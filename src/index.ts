import { Alert } from './alert'
console.log('Hello World');

window.onload=function(){
    const a = new Alert();
    var table: HTMLTableElement = <HTMLTableElement>document.getElementById("my-table");
    if (table) {
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = "1";
        cell2.innerHTML = "Mario";
        cell3.innerHTML = "Rossi";
    }
}

