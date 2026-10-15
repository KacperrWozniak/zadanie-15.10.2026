let tab1 = [7, 3, 1, 6, 9, 5, 4, 10, 2, 2];

document.write("5 komorka tablicy: " + tab1[4] + "<br>");

tab1[6] = 12;

let tab2 = new Array(tab1.length);

for (let i = 0; i < tab1.length; i++) {
    tab2[i] = tab1[i];
}

let tab3 = new Array(tab1.length);

for (let i = 0; i < tab1.length; i++) {
    tab3[i] = tab1[i] + tab2[i];
}

for (let i = 0; i < tab1.length; i++) {
    tab2[i] = tab1[tab1.length - 1 - i];
}

document.write("Tablica tab1: " + tab1 + "<br>");
document.write("Tablica tab2: " + tab2 + "<br>");
document.write("Tablica tab3: " + tab3 + "<br>");