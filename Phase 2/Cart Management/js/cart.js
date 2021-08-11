(function () {
    var data = JSON.parse(localStorage.getItem('cart')) || [];
    var table = document.getElementById('table');
    var total = 0;
    for (var k in data) {
        var row = table.insertRow();
        var clientName = row.insertCell();
        var projName = row.insertCell();
        clientName.innerHTML = data[k].name;
        projName.innerHTML = '$' + data[k].price;
        total = total + parseInt(data[k].price);
    }
    var totalRow = table.insertRow();
    totalRow.insertCell();
    var totalCell3 = totalRow.insertCell();
    totalCell3.innerHTML = '$' + total.toString();
})();
