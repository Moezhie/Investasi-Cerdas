// telegram_menu.js
// Pastikan file 'telegram.js' sudah di-load atau fungsi sendTelegramMessage tersedia

async function sendTelegramMenu() {
  const url = `https://api.telegram.org/bot${"7872065476:AAGZL0Dpb-Ni6j2MWoZFQwryqRUl7Catvsk"}/sendMessage`;

  const messageData = {
    chat_id: "6870748802",
    text: "📊 Menu Investasi:\nPilih opsi di bawah untuk melihat data terkini:",
    reply_markup: {
      inline_keyboard: [
        [{ text: "📈 Orderbook Saham & Crypto", callback_data: "orderbook" }],
        [{ text: "📰 Analisis Berita & Sentimen", callback_data: "sentiment" }],
        [{ text: "💰 Rekomendasi Investasi", callback_data: "recommendation" }],
        [{ text: "⚙️ Pengaturan & Notifikasi", callback_data: "settings" }]
      ]
    }
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(messageData)
    });
    
    const data = await response.json();
    console.log("Menu Telegram dikirim:", data);
  } catch (error) {
    console.error("Error saat mengirim menu:", error);
  }
}

// Kirim menu secara otomatis ketika bot diaktifkan
sendTelegramMenu();
