// telegram_notifications.js
// Pastikan file 'telegram.js' sudah di-load atau fungsi sendTelegramMessage tersedia

// Fungsi untuk mengirim notifikasi setiap 1 jam (update pasar simulasi)
async function hourlyNotification() {
  // Data pasar simulasi; ganti dengan API aktual sesuai kebutuhan
  const marketData = {
    goldPrice: "700,000",
    cryptoPrice: "43,200",
    stockPrice: "170"
  };
  
  const message = `📈 Update Pasar (1 Jam):
Emas: Rp${marketData.goldPrice}
BTC: $${marketData.cryptoPrice}
AAPL: $${marketData.stockPrice}`;
  
  await sendTelegramMessage(message);
}

// Fungsi untuk mengirim laporan harian setiap 24 jam (data simulasi)
async function dailyNotification() {
  // Data ringkasan pasar simulasi; ganti dengan API asli jika sudah tersedia
  const marketSummary = {
    goldChange: "1.2",
    cryptoChange: "2.3",
    stockChange: "-0.5",
    recommendation: "Beli saham AAPL"
  };
  
  const message = `📊 Laporan Harian:
Emas: ${marketSummary.goldChange}%
BTC: ${marketSummary.cryptoChange}%
AAPL: ${marketSummary.stockChange}%
💰 Rekomendasi: ${marketSummary.recommendation}`;
  
  await sendTelegramMessage(message);
}

// Jalankan notifikasi secara otomatis:
// Setiap 1 jam (3600000 ms) dan setiap 24 jam (86400000 ms)
setInterval(hourlyNotification, 3600000);
setInterval(dailyNotification, 86400000);
