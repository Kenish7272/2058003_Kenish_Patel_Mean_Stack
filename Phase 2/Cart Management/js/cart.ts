(function() {

    let data = JSON.parse(localStorage.getItem('cart')) || [];
    let table: HTMLTableElement = <HTMLTableElement> document.getElementById('table');

    let total:number = 0;
    for(let k in data){
        let row = table.insertRow();
        let clientName = row.insertCell();
        let projName = row.insertCell();
        clientName.innerHTML = data[k].name;
        projName.innerHTML = '$'+ data[k].price;
        total = total + parseInt(data[k].price);
    }

    let totalRow = table.insertRow();
    totalRow.insertCell();
    let totalCell3 = totalRow.insertCell();
    totalCell3.innerHTML = '$'+total.toString();

})();