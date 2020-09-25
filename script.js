const table = document.createElement("table");
const caption = document.createElement("caption");
///
const firstTr = document.createElement("tr");
const secondTr = document.createElement("tr");
const thirdTr = document.createElement("tr");
const fourthTr = document.createElement("tr");
const fifthTr = document.createElement("tr");
const sixthTr = document.createElement("tr");
///
const firstTrFirstTh = document.createElement("th");
///
const fourthTrFirstTh = document.createElement("th");
///
const fifthTrFifthTd = document.createElement("td");
///
const row1 = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const row2 = ["Science", "Math", "Science", "Math", "Arts"];
const row3 = ["Social", "History", "English", "Social", "Sports"];
// const row4 = ["Lunch"];
const row5 = ["Science", "Math", "Science", "Math"];
const row6 = ["Social", "History", "English", "Social"];

//////////////////////////////////////

const addEl = (tr, el, text = null, span = null, num = null) => {
    tr.append(el);
    el.innerText = text;
    span && el.setAttribute(span, num, text);
}

const createRow = (arr, dom, parent) => {
    for (let i = 0; i < arr.length; i++) {
        const td = document.createElement(dom);
        addEl(parent, td, arr[i]);
    }
}


////////////////////////////////////////////////////////1

document.body.prepend(table);
table.classList.add("table")
addEl(table, caption, "Time Table");


const rowsNum = 6;

table.append(firstTr);
table.append(secondTr);
table.append(thirdTr);
table.append(fourthTr);
table.append(fifthTr);
table.append(sixthTr);

////////////////////////////////////////////////////////

addEl(firstTr, firstTrFirstTh, "Hours", "rowspan", "6");

createRow(row1, "th", firstTr);

createRow(row2, "td", secondTr);

createRow(row3, "td", thirdTr);

addEl(fourthTr, fourthTrFirstTh, "Lunch", "colspan", "5");

createRow(row5, "td", fifthTr);

addEl(fifthTr, fifthTrFifthTd, "Project", "rowspan", "2");

createRow(row6, "td", sixthTr);



////////////////////////////////////////////////////////////////2
const secondTable = document.createElement("table");
const secondCaption = document.createElement("caption");
///
let secondTableFirstTr = document.createElement("tr");
let secondTableSecondTr = document.createElement("tr");
let secondTableThirdTr = document.createElement("tr");
let secondTableFourthTr = document.createElement("tr");
///
secondTable.append(secondTableFirstTr);
secondTable.append(secondTableSecondTr);
secondTable.append(secondTableThirdTr);
secondTable.append(secondTableFourthTr);
///
let secondTableFirstTrFirstTh = document.createElement("th");
let secondTableFirstTrSecondTh = document.createElement("th");
let secondTableFirstTrThirdTh = document.createElement("th");
///
document.body.prepend(secondTable);
secondTable.classList.add("second-table");
secondTable.append(secondCaption);
let obliqueType = document.createElement("i");
secondCaption.append(obliqueType);
obliqueType.innerText = "A test table with merged cells";
///
addEl(secondTableFirstTr, secondTableFirstTrFirstTh, "", "rowspan", "2");
secondTableFirstTrFirstTh.classList.add("empty-th");
addEl(secondTableFirstTr, secondTableFirstTrSecondTh, "Average", "colspan", "2");
addEl(secondTableFirstTr, secondTableFirstTrThirdTh, "Red eyes", "rowspan", "2");
///
secondTableRow2 = ["height", "width"];
secondTableRow3 = ["Males", "1.9", "0.003", "40%"];
secondTableRow4 = ["Femals", "1.7", "0.002", "30%"];
///;
createRow(secondTableRow2, "th", secondTableSecondTr);
createRow(secondTableRow3, "td", secondTableThirdTr)
createRow(secondTableRow4, "td", secondTableFourthTr)
///////////////////////////////////////////////////////////////////3
let thirdTable = document.createElement("table");
///
let thirdTableFirstTr = document.createElement("tr");
let thirdTableSecondTr = document.createElement("tr");
let thirdTableThirdTr = document.createElement("tr");
let thirdTableFourthTr = document.createElement("tr");
let thirdTableFifthTr = document.createElement("tr");
///
thirdTable.append(thirdTableFirstTr);
thirdTable.append(thirdTableSecondTr);
thirdTable.append(thirdTableThirdTr);
thirdTable.append(thirdTableFourthTr);
thirdTable.append(thirdTableFifthTr);
///
let thirdTableFirstTrFirstTd = document.createElement("td");
let thirdTableFirstTrSecondTd = document.createElement("td");
let thirdTableFirstTrThirdTd = document.createElement("td");
let thirdTableSecondTrFirstTd = document.createElement("td");
let thirdTableSecondTrSecondTd = document.createElement("td");
let thirdTableSecondTrThirdTd = document.createElement("td");
let thirdTableSecondTrForthTd = document.createElement("td");
let thirdTableThirdTrFirstTd = document.createElement("td");
let thirdTableThirdTrSecondTd = document.createElement("td");
let thirdTableThirdTrThirdTd = document.createElement("td");
let thirdTableFourthTrFirstTd = document.createElement("td");
let thirdTableFourthTrSecondTd = document.createElement("td");
let thirdTableFifthTrFirstTd = document.createElement("td");
let thirdTableFifthTrSecondTd = document.createElement("td");
let thirdTableFifthTrThirdTd = document.createElement("td");
///
document.body.prepend(thirdTable);
thirdTable.setAttribute("class", "third-table");
///
addEl(thirdTableFirstTr, thirdTableFirstTrFirstTd, "", "colspan", "3");
addEl(thirdTableFirstTr, thirdTableFirstTrSecondTd,);
thirdTableFirstTrSecondTd.classList.add("third-table-second-td");
addEl(thirdTableFirstTr, thirdTableFirstTrThirdTd, "", "rowspan", "3");
addEl(thirdTableSecondTr, thirdTableSecondTrFirstTd,);
thirdTableSecondTrFirstTd.classList.add("third-table-second-tr-first-td");
addEl(thirdTableSecondTr, thirdTableSecondTrSecondTd, "", "rowspan", "2");
thirdTableSecondTrSecondTd.classList.add("third-table-second-tr-second-td");
addEl(thirdTableSecondTr, thirdTableSecondTrThirdTd);
addEl(thirdTableSecondTr, thirdTableSecondTrForthTd);
addEl(thirdTableThirdTr, thirdTableThirdTrFirstTd, "", "rowspan", "2")
addEl(thirdTableThirdTr, thirdTableThirdTrSecondTd);
thirdTableThirdTrSecondTd.classList.add("class", "third-table-third-tr-second-td");
addEl(thirdTableThirdTr, thirdTableThirdTrThirdTd);
addEl(thirdTableFourthTr, thirdTableFourthTrFirstTd, "", "colspan", "3")
thirdTableFourthTrFirstTd.classList.add("third-table-fourth-tr-first-td");
addEl(thirdTableFourthTr, thirdTableFourthTrSecondTd);
addEl(thirdTableFifthTr, thirdTableFifthTrFirstTd);
thirdTableFifthTrFirstTd.classList.add("third-table-fifth-tr-first-td");
addEl(thirdTableFifthTr, thirdTableFifthTrSecondTd);
addEl(thirdTableFifthTr, thirdTableFifthTrSecondTd);
thirdTableFifthTrSecondTd.classList.add("third-table-fifth-tr-second-td");
addEl(thirdTableFifthTr, thirdTableFifthTrThirdTd, "", "colspan", "3")
///////////////////////////////////////////////////////////////////////////////4
let fourthTable = document.createElement("table");
///
let fourthTableFirstTr = document.createElement("tr");
let fourthTableSecondTr = document.createElement("tr");
let fourthTableThirdTr = document.createElement("tr");
let fourthTableFourthTr = document.createElement("tr");
let fourthTableFifthTr = document.createElement("tr");
let fourthTableSixthTr = document.createElement("tr");
let fourthTableSeventhTr = document.createElement("tr");
let fourthTableEighthTr = document.createElement("tr");
///
fourthTable.append(fourthTableFirstTr);
fourthTable.append(fourthTableSecondTr);
fourthTable.append(fourthTableThirdTr);
fourthTable.append(fourthTableFourthTr);
fourthTable.append(fourthTableFifthTr);
fourthTable.append(fourthTableSixthTr);
fourthTable.append(fourthTableSeventhTr);
fourthTable.append(fourthTableEighthTr);
///
document.body.prepend(fourthTable);
fourthTable.classList.add("fourth-table");
///
fourthTableSecondRow = ["Item Description", "Price"];
fourthTableThirdRow = ["Shipping Handling, Installation, ect", "Expense"];
fourthTableFourthRow = ["IBM Clone Computer", "$ 400.00"];
fourthTableFifthRow = ["Shipping Handling, Installation, ect", "$ 20.00"];
fourthTableSixthRow = ["IGB RAM Module for Computer.", "$ 50.00"];
fourthTableSeventhRow = ["Shipping Handling, Installation, ect", "$ 14.00"];
///
let fourthTableFirstTrFirstTh = document.createElement("th");
let fourthTableSecondTrFirstTh = document.createElement("th");
let fourthTableSecondTrSecondTh = document.createElement("th");
let fourthTableFourthTrFirstTh = document.createElement("td");
let fourthTableFourthTrSecondTh = document.createElement("td");
fourthTableFourthTrSecondTh.classList.add("fourth-table-fourth-tr-second-th");
let fourthTableSixthTrFirstTh = document.createElement("td");
let fourthTableSixthTrSecondTh = document.createElement("td");
fourthTableSixthTrSecondTh.classList.add("fourth-table-sixth-tr-second-th");
let fourthTableEighthTrFirstTh = document.createElement("th");
///
addEl(fourthTableFirstTr, fourthTableFirstTrFirstTh, "Purhased Equipments (June, 2006)", "colspan", "4");
addEl(fourthTableSecondTr, fourthTableSecondTrFirstTh, "Item Num#", "rowspan", "2");
addEl(fourthTableSecondTr, fourthTableSecondTrSecondTh, "Item pictures", "rowspan", "2");
addEl(fourthTableFourthTr, fourthTableFourthTrFirstTh, "1.", "rowspan", "2");
addEl(fourthTableFourthTr, fourthTableFourthTrSecondTh, "", "rowspan", "2");
addEl(fourthTableSixthTr, fourthTableSixthTrFirstTh, "2.", "rowspan", "2");
addEl(fourthTableSixthTr, fourthTableSixthTrSecondTh, "", "rowspan", "2");
addEl(fourthTableEighthTr, fourthTableEighthTrFirstTh, "Purhased Equipments (June, 2006)", "colspan", "4");
///
createRow(fourthTableSecondRow, "th", fourthTableSecondTr);
createRow(fourthTableThirdRow, "th", fourthTableThirdTr);
createRow(fourthTableFourthRow, "td", fourthTableFourthTr);
createRow(fourthTableFifthRow, "td", fourthTableFifthTr);
createRow(fourthTableSixthRow, "td", fourthTableSixthTr);
createRow(fourthTableSeventhRow, "td", fourthTableSeventhTr);