////////////////////////////////////////////////////////1
let table = document.createElement("table");

table.setAttribute("class", "table");

document.body.prepend(table);

let caption = document.createElement("caption")
    
table.append(caption);

caption.innerText = "Time Table";

let firstTr = document.createElement("tr");

table.append(firstTr);

    let firstTrFirstTh = document.createElement("th");

    firstTr.append(firstTrFirstTh);

    firstTrFirstTh.innerText = "Hours";

    firstTrFirstTh.setAttribute("rowspan", "6");


    let firstTrSecondTh = document.createElement("th");
        
    firstTr.append(firstTrSecondTh);

    firstTrSecondTh.innerText = "Mon";


    let firstTrThirdTh = document.createElement("th");
        
    firstTr.append(firstTrThirdTh);

    firstTrThirdTh.innerText = "Tue";


    let firstTrFourthTh = document.createElement("th");
        
    firstTr.append(firstTrFourthTh);

    firstTrFourthTh.innerText = "Wed";


    let firstTrFifthTh = document.createElement("th");
        
    firstTr.append(firstTrFifthTh);

    firstTrFifthTh.innerText = "Thu";


    let firstTrSixthTh = document.createElement("th");

    firstTr.append(firstTrSixthTh);

    firstTrSixthTh.innerText = "Fri";


let secondTr = document.createElement("tr");

table.append(secondTr);

    let secondTrFirstTd = document.createElement("td");

    secondTr.append(secondTrFirstTd);

    secondTrFirstTd.innerText = "Science";


    let secondTrSecondTd = document.createElement("td");
        
    secondTr.append(secondTrSecondTd);

    secondTrSecondTd.innerText = "Math";


    let secondTrThirdTd = document.createElement("td");
        
    secondTr.append(secondTrThirdTd);

    secondTrThirdTd.innerText = "Science";


    let secondTrFourthTd = document.createElement("td");
        
    secondTr.append(secondTrFourthTd);

    secondTrFourthTd.innerText = "Math";


    let secondTrFifthTd = document.createElement("td");
        
    secondTr.append(secondTrFifthTd);

    secondTrFifthTd.innerText = "Arts";


let thirdTr = document.createElement("tr");

table.append(thirdTr);

    let thirdTrFirstTd = document.createElement("td");

    thirdTr.append(thirdTrFirstTd);

    thirdTrFirstTd.innerText = "Social";


    let thirdTrSecondTd = document.createElement("td");
        
    thirdTr.append(thirdTrSecondTd);

    thirdTrSecondTd.innerText = "History";


    let thirdTrThirdTd = document.createElement("td");
        
    thirdTr.append(thirdTrThirdTd);

    thirdTrThirdTd.innerText = "English";


    let thirdTrFourthTd = document.createElement("td");
        
    thirdTr.append(thirdTrFourthTd);

    thirdTrFourthTd.innerText = "Social";


    let thirdTrFifthTd = document.createElement("td");
        
    thirdTr.append(thirdTrFifthTd);

    thirdTrFifthTd.innerText = "Sports";


let fourthTr = document.createElement("tr");

table.append(fourthTr);
    
    let fourthTrFirstTh = document.createElement("th");

    fourthTr.append(fourthTrFirstTh);

    fourthTrFirstTh.innerText = "Lunch";

    fourthTrFirstTh.setAttribute("colspan", "5")


let fifthTr = document.createElement("tr");

table.append(fifthTr);

    let fifthTrFirstTd = document.createElement("td");

    fifthTr.append(fifthTrFirstTd);

    fifthTrFirstTd.innerText = "Science";


    let fifthTrSecondTd = document.createElement("td");
        
    fifthTr.append(fifthTrSecondTd);

    fifthTrSecondTd.innerText = "Math";


    let fifthTrThirdTd = document.createElement("td");
        
    fifthTr.append(fifthTrThirdTd);

    fifthTrThirdTd.innerText = "Science";


    let fifthTrFourthTd = document.createElement("td");
        
    fifthTr.append(fifthTrFourthTd);

    fifthTrFourthTd.innerText = "Math";


    let fifthTrFifthTd = document.createElement("td");
        
    fifthTr.append(fifthTrFifthTd);

    fifthTrFifthTd.innerText = "Project";

    fifthTrFifthTd.setAttribute("rowspan", "2");


let sixthTr = document.createElement("tr");

table.append(sixthTr);

    let sixthTrFirstTd = document.createElement("td");

    sixthTr.append(sixthTrFirstTd);

    sixthTrFirstTd.innerText = "Social";


    let sixthTrSecondTd = document.createElement("td");
        
    sixthTr.append(sixthTrSecondTd);

    sixthTrSecondTd.innerText = "History";


    let sixthTrThirdTd = document.createElement("td");
        
    sixthTr.append(sixthTrThirdTd);

    sixthTrThirdTd.innerText = "English";


    let sixthTrFourthTd = document.createElement("td");
        
    sixthTr.append(sixthTrFourthTd);

    sixthTrFourthTd.innerText = "Social";

////////////////////////////////////////////////////////////////2

let secondTable = document.createElement("table");

document.body.prepend(secondTable);

secondTable.setAttribute("class", "second-table");

let secondCaption = document.createElement("caption");

secondTable.append(secondCaption);

let obliqueType = document.createElement("i");

secondCaption.append(obliqueType);

obliqueType.innerText = "A test table with merged cells";

let secondTableFirstTr = document.createElement("tr");

secondTable.append(secondTableFirstTr);
    
    let secondTableFirstTrFirstTh = document.createElement("th")

    secondTableFirstTr.append(secondTableFirstTrFirstTh);

    secondTableFirstTrFirstTh.setAttribute("rowspan", "2")

    secondTableFirstTrFirstTh.setAttribute("class", "empty-th")
    

    let secondTableFirstTrSecondTh = document.createElement("th")

    secondTableFirstTr.append(secondTableFirstTrSecondTh);

    secondTableFirstTrSecondTh.setAttribute("colspan", "2");

    secondTableFirstTrSecondTh.innerText = "Average";


    let secondTableFirstTrThirdTh = document.createElement("th")

    secondTableFirstTr.append(secondTableFirstTrThirdTh);

    secondTableFirstTrThirdTh.setAttribute("rowspan", "2");

    secondTableFirstTrThirdTh.innerText = "Red eyes"


let secondTableSecondTr = document.createElement("tr");

secondTable.append(secondTableSecondTr);

    let secondTableSecondTrFirstTh = document.createElement("th");

    secondTableSecondTr.append(secondTableSecondTrFirstTh);

    secondTableSecondTrFirstTh.innerText = "height";


    let secondTableSecondTrSecondTh = document.createElement("th");

    secondTableSecondTr.append(secondTableSecondTrSecondTh);

    secondTableSecondTrSecondTh.innerText = "width";


let secondTableThirdTr = document.createElement("tr");

secondTable.append(secondTableThirdTr);

    let secondTableThirdTrFirstTh = document.createElement("th");

    secondTableThirdTr.append(secondTableThirdTrFirstTh);

    secondTableThirdTrFirstTh.innerText = "Males";


    let secondTableThirdTrFirstTd = document.createElement("td");

    secondTableThirdTr.append(secondTableThirdTrFirstTd);

    secondTableThirdTrFirstTd.innerText = "1.9";


    let secondTableThirdTrSecondTd = document.createElement("td");

    secondTableThirdTr.append(secondTableThirdTrSecondTd);

    secondTableThirdTrSecondTd.innerText = "0.003";


    let secondTableThirdTrThirdTd = document.createElement("td");

    secondTableThirdTr.append(secondTableThirdTrThirdTd);

    secondTableThirdTrThirdTd.innerText = "40%";


let secondTableFourthTr = document.createElement("tr");

secondTable.append(secondTableFourthTr);

    let secondTableFourthTrFirstTh = document.createElement("th");

    secondTableFourthTr.append(secondTableFourthTrFirstTh);

    secondTableFourthTrFirstTh.innerText = "Femals";


    let secondTableFourthTrFirstTd = document.createElement("td");

    secondTableFourthTr.append(secondTableFourthTrFirstTd);

    secondTableFourthTrFirstTd.innerText = "1.7";


    let secondTableFourthTrSecondTd = document.createElement("td");

    secondTableFourthTr.append(secondTableFourthTrSecondTd);

    secondTableFourthTrSecondTd.innerText = "0.002";


    let secondTableFourthTrThirdTd = document.createElement("td");

    secondTableFourthTr.append(secondTableFourthTrThirdTd);

    secondTableFourthTrThirdTd.innerText = "30%";

///////////////////////////////////////////////////////////////////3

let thirdTable = document.createElement("table");

document.body.prepend(thirdTable);

thirdTable.setAttribute("class", "third-table");

let thirdTableFirstTr = document.createElement("tr");

thirdTable.append(thirdTableFirstTr);

    let thirdTableFirstTrFirstTd = document.createElement("td");

    thirdTableFirstTr.append(thirdTableFirstTrFirstTd);

    thirdTableFirstTrFirstTd.setAttribute("class", "third-table-first-td");

    thirdTableFirstTrFirstTd.setAttribute("colspan", "3")


    let thirdTableFirstTrSecondTd = document.createElement("td");

    thirdTableFirstTr.append(thirdTableFirstTrSecondTd);

    thirdTableFirstTrSecondTd.setAttribute("class", "third-table-second-td");


    let thirdTableFirstTrThirdTd = document.createElement("td");

    thirdTableFirstTr.append(thirdTableFirstTrThirdTd);

    thirdTableFirstTrThirdTd.setAttribute("class", "third-table-third-td");

    thirdTableFirstTrThirdTd.setAttribute("rowspan", "3")


let thirdTableSecondTr = document.createElement("tr");

thirdTable.append(thirdTableSecondTr);

    let thirdTableSecondTrFirstTd = document.createElement("td");

    thirdTableSecondTr.append(thirdTableSecondTrFirstTd);

    thirdTableSecondTrFirstTd.setAttribute("class", "third-table-second-tr-first-td");


    let thirdTableSecondTrSecondTd = document.createElement("td");

    thirdTableSecondTr.append(thirdTableSecondTrSecondTd);

    thirdTableSecondTrSecondTd.setAttribute("class", "third-table-second-tr-second-td");

    thirdTableSecondTrSecondTd.setAttribute("rowspan", "2");


    let thirdTableSecondTrThirdTd = document.createElement("td");

    thirdTableSecondTr.append(thirdTableSecondTrThirdTd);

    thirdTableSecondTrThirdTd.setAttribute("class", "third-table-second-tr-third-td");


    let thirdTableSecondTrForthTd = document.createElement("td");

    thirdTableSecondTr.append(thirdTableSecondTrForthTd);

    thirdTableSecondTrForthTd.setAttribute("class", "third-table-second-tr-forth-td");
    

let thirdTableThirdTr = document.createElement("tr");

thirdTable.append(thirdTableThirdTr);

    let thirdTableThirdTrFirstTd = document.createElement("td");

    thirdTableThirdTr.append(thirdTableThirdTrFirstTd);

    thirdTableThirdTrFirstTd.setAttribute("class", "third-table-third-tr-first-td");

    thirdTableThirdTrFirstTd.setAttribute("rowspan", "2");


    let thirdTableThirdTrSecondTd = document.createElement("td");

    thirdTableThirdTr.append(thirdTableThirdTrSecondTd);

    thirdTableThirdTrSecondTd.setAttribute("class", "third-table-third-tr-second-td");


    let thirdTableThirdTrThirdTd = document.createElement("td");

    thirdTableThirdTr.append(thirdTableThirdTrThirdTd);

    thirdTableThirdTrThirdTd.setAttribute("class", "third-table-third-tr-third-td");


let thirdTableFourthTr = document.createElement("tr");

thirdTable.append(thirdTableFourthTr);

    let thirdTableFourthTrFirstTd = document.createElement("td");

    thirdTableFourthTr.append(thirdTableFourthTrFirstTd);

    thirdTableFourthTrFirstTd.setAttribute("class", "third-table-fourth-tr-first-td");

    thirdTableFourthTrFirstTd.setAttribute("colspan", "3");


    let thirdTableFourthTrSecondTd = document.createElement("td");

    thirdTableFourthTr.append(thirdTableFourthTrSecondTd);

    thirdTableFourthTrSecondTd.setAttribute("class", "third-table-fourth-tr-second-td");


let thirdTableFifthTr = document.createElement("tr");

thirdTable.append(thirdTableFifthTr);

    let thirdTableFifthTrFirstTd = document.createElement("td");

    thirdTableFifthTr.append(thirdTableFifthTrFirstTd);

    thirdTableFifthTrFirstTd.setAttribute("class", "third-table-fifth-tr-first-td");


    let thirdTableFifthTrSecondTd = document.createElement("td");

    thirdTableFifthTr.append(thirdTableFifthTrSecondTd);

    thirdTableFifthTrSecondTd.setAttribute("class", "third-table-fifth-tr-second-td");


    
    let thirdTableFifthTrThirdTd = document.createElement("td");

    thirdTableFifthTr.append(thirdTableFifthTrThirdTd);

    thirdTableFifthTrThirdTd.setAttribute("class", "third-table-fifth-tr-third-td");

    thirdTableFifthTrThirdTd.setAttribute("colspan", "3");


let fourthTable = document.createElement("table");

document.body.prepend(fourthTable);

fourthTable.setAttribute("class", "fourth-table");


