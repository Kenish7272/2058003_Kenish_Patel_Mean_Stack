(function () {
    var oldData = JSON.parse(localStorage.getItem('cart')) || [];
    var length = 0;
    for (var k in oldData)
        if (oldData.hasOwnProperty(k))
            length++;
    document.getElementById('cart').innerText = length.toString();
})();
function addToCart(name, price) {
    var oldData = JSON.parse(localStorage.getItem('cart')) || [];
    var length = 0;
    for (var k in oldData)
        if (oldData.hasOwnProperty(k))
            length++;
    var values = {
        'name': name,
        'price': price
    };
    oldData[length] = values;
    localStorage.setItem("cart", JSON.stringify(oldData));
    alert('Added to the Cart.');
    window.location.href = 'index.html';
}
