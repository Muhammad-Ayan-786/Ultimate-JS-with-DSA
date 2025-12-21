let table = document.body.firstElementChild.firstElementChild;

console.log(table);

console.log(table.rows); // collection of <tr> elements
console.log(table.caption); // reference to table <caption>

console.log(table.tHead); // reference to table <thead>
console.log(table.tFoot); // reference to table <tfoot>
console.log(table.tBodies); // collection of tbody elements

console.log(table.rows[0].cells); // collection of <td> & <th> elements in tr
console.log(table.rows[0].sectionRowIndex); // index of <tr> inside enclosing element
console.log(table.rows[1].rowIndex); // Row number starting from 0

console.log(table.tHead.firstElementChild.firstElementChild.nextElementSibling); // first <th> element in <thead>
console.log(table.tBodies[0].firstElementChild.firstElementChild.nextElementSibling); // first <th> element in <tbody>

/*
<-------------------- TABLE NAVIGATION -------------------->

table.rows      -> collection of tr elements
table.caption   -> reference to table <caption>
table.tHead     -> reference to table <thead>
table.tFoot     -> reference to table <tfoot>
table.tBodies   -> collection of tbody elements
tbody.rows      -> collection of <tr> elements in tbody

tr.cells    -> collection of <td> & <th> elements in tr
tr.sectionRowIndex -> index of <tr> inside enclosing element
tr.rowIndex    -> index of <tr> inside table (Row number starting from 0)

td.cellIndex    -> number of cells inside enclosing <tr>
*/