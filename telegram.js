const TELEGRAM_BOT_TOKEN = "7872065476:AAGZL0Dpb-Ni6j2MWoZFQwryqRUl7Catvsk";
const TELEGRAM_CHAT_ID = "Investasicerdasbot"

async function sendTelegramMessage(message) {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message
        })
    });

    console.log("📩 Pesan Telegram terkirim:", message);
}

// Kirim pesan uji coba
sendTelegramMessage("🚀 Bot Investasicerdasbot telah terhubung dengan aplikasi!");