// telegram.js
const TELEGRAM_BOT_TOKEN = "7872065476:AAGZL0Dpb-Ni6j2MWoZFQwryqRUl7Catvsk";
const TELEGRAM_BOT_USERNAME = "@Investasicerdasbot";
const TELEGRAM_CHAT_ID = "6870748802";  // Chat ID untuk MUZIBURRAHMAN, lang: id

// Fungsi untuk mengirim pesan ke Telegram
async function sendTelegramMessage(message) {
  const url = `https://api.telegram.org/bot${"7872065476:AAGZL0Dpb-Ni6j2MWoZFQwryqRUl7Catvsk"}/sendMessage`;
  
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message
      })
    });
    
    const data = await response.json();
    console.log("Response dari Telegram:", data);
    
    if (!data.ok) {
      console.error("Error dari API Telegram:", data);
    }
  } catch (error) {
    console.error("Error saat mengirim pesan:", error);
  }
}

// Uji coba: Kirim pesan uji coba untuk memastikan bot terhubung
sendTelegramMessage("🚀 Uji coba: Bot @Investasicerdasbot telah terhubung! Halo MUZIBURRAHMAN!");
