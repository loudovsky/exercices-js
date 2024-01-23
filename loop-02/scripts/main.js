let tab1 = [10, 55, 352, 4],
    tab2 = [543, 40, 0, 34],
    sum = 0;

for (let i=0; i < tab1.length; i++) {
    sum += tab1[i]*tab2[i];
    document.querySelector(".wrapper").innerHTML = sum;
}
