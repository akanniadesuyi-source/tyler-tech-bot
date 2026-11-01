const {
  default: makeWASocket,
  useMultiFileAuthState,
  fetchLatestWaWebVersion,
  Browsers
} = require("@whiskeysockets/baileys");

const qrcode = require("qrcode-terminal");
const { handleMessage } = require("./core");

async function startBot() {
  const { state, saveCreds } =
    await useMultiFileAuthState("auth_state");

  const latest = await fetchLatestWaWebVersion();

  const sock = makeWASocket({
    auth: state,
    version: latest.version,
    browser: Browsers.macOS("Chrome")
  });

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("connection.update", ({ connection, qr }) => {
    if (qr) qrcode.generate(qr, { small: true });
    if (connection === "open") console.log("Tyler Tech connected!");
    if (connection === "close") console.log("Connection closed.");
  });

  sock.ev.on("messages.upsert", async ({ messages, type }) => {
    if (type !== "notify") return;

    for (const msg of messages) {
      if (!msg.message || msg.key.fromMe) continue;

      const chatId = msg.key.remoteJid;
      const senderId = msg.key.participant || chatId;

      const messageText =
        msg.message.conversation ||
        msg.message.extendedTextMessage?.text ||
        "";

      const quotedMessageId =
        msg.message.extendedTextMessage?.contextInfo?.stanzaId;

      const announce = (chat, text) =>
        sock.sendMessage(chat, { text });

      const senderName = msg.pushName || "Player";

      const response = await handleMessage(messageText, {
        chatId,
        senderId,
        senderName,
        quotedMessageId,
        announce
      });

      if (response) {
        await sock.sendMessage(chatId, { text: response });
      }
    }
  });
}

if (process.env.RUN_WHATSAPP === "true") {
  startBot().catch(console.error);
} else {
  console.log("Tyler Tech is in offline mode.");
}
