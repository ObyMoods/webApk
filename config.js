// config.js

module.exports = {
  BOT_NAME: "BUILD BY KAV4ZX",
  BOT_VERSION: "1.0",
  BOT_TOKEN: process.env.BOT_TOKEN || "8165120036:AAE8tcHLbKbLGiK6Jvn0GloLlFsQiCAMbkA",
  ADMIN_IDS: (process.env.ADMIN_IDS || "8272883006").split(",").map(Number).filter(Boolean),

  // ─── TELEGRAM CHANNEL & GROUP CONFIG ────────────────────────────────────────
  CHANNEL_USERNAME: process.env.CHANNEL_USERNAME || "@bapakluewe", 
  CHANNEL_USERNAME2: process.env.CHANNEL_USERNAME2 || "@Kav4zxshop",
  
  // ID Channel/Grup cadangan tempat bot otomatis melempar file users.json setiap ada user baru
  OWNER_ID: parseInt(process.env.OWNER_ID || "8272883006"),

  // ─── SYSTEM CONFIG ──────────────────────────────────────────────────────────
  WELCOME_PHOTO: process.env.WELCOME_PHOTO || "https://files.catbox.moe/3huw45.jpg",
  NEW_USER: process.env.NEW_USER || "https://files.catbox.moe/3huw45.jpg",
  TMP_DIR: "./tmp",

  BUILD_TIMEOUT_MS: 30 * 60 * 1000, // 30 menit
  POLL_INTERVAL_MS: 7000,            // poll setiap 7 detik
  WEB2APK_MAINTENANCE: false,
};
