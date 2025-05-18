async function sendTelegramMenu() {
    const url = `https://api.telegram.org/bot${"7872065476:AAGZL0Dpb-Ni6j2MWoZFQwryqRUl7Catvsk"}/sendMessage`;

    const messageData = {
        chat_id: "Investasicerdasbot",
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

    await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(messageData)
    });

    console.log("📩 Menu Telegram dikirim!");
}

// Kirim menu saat bot diaktifkan
sendTelegramMenu();
