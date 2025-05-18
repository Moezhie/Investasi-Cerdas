async function hourlyNotification() {
    const marketData = await fetch("https://api.example.com/market-update").then(res => res.json());
    const message = `📈 Update Pasar (1 Jam)\nEmas: Rp${marketData.goldPrice}\nBTC: $${marketData.cryptoPrice}\nAAPL: $${marketData.stockPrice}`;
    
    sendTelegramMessage(message);
}

async function dailyNotification() {
    const marketSummary = await fetch("https://api.example.com/daily-summary").then(res => res.json());
    const message = `📊 Laporan Harian\n📉 Perubahan harga:\nEmas: ${marketSummary.goldChange}%\nBTC: ${marketSummary.cryptoChange}%\nAAPL: ${marketSummary.stockChange}%\n💰 Rekomendasi: ${marketSummary.recommendation}`;
    
    sendTelegramMessage(message);
}

// Jalankan notifikasi setiap 1 jam
setInterval(hourlyNotification, 3600000); // 1 Jam

// Jalankan notifikasi setiap 24 jam
setInterval(dailyNotification, 86400000); // 24 Jam