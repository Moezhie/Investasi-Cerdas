const TELEGRAM_BOT_TOKEN = "7872065476:AAGZL0Dpb-Ni6j2MWoZFQwryqRUl7Catvsk";
const TELEGRAM_BOT_USERNAME = "@Investasicerdasbot";
const TELEGRAM_CHAT_ID = "Investasicerdasbot";

async function sendTelegramMessage(message) {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: "Investasicerdasbot",
            text: message
        })
    });

    console.log("📩 Pesan Telegram terkirim:", message);
}

// Uji coba kirim pesan
sendTelegramMessage("🚀 Bot @Investasicerdasbot telah terhubung dengan aplikasi!");
