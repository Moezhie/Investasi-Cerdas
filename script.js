function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// Simulasi API untuk Orderbook
function fetchOrderbook(symbol) {
    return [
        { price: 170, volume: 500 },
        { price: 168, volume: 300 },
        { price: 165, volume: 700 }
    ];
}

function displayOrderbook(symbol) {
    const data = fetchOrderbook(symbol);
    let orderbookHTML = "<table><tr><th>Harga</th><th>Volume</th></tr>";

    data.forEach(order => {
        orderbookHTML += `<tr><td>${order.price}</td><td>${order.volume}</td></tr>`;
    });

    orderbookHTML += "</table>";

    document.getElementById(`orderbook_${symbol}`).innerHTML = orderbookHTML;
}

window.onload = () => {
    displayOrderbook("AAPL");
    displayOrderbook("BTC");
};