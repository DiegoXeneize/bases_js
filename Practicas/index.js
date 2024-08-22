const nombres = [1,2,3,4,5,6];

nombres.map((item) => {
    console.log(item);
});

const arrayResult = nombres.filter((item) => {
    return item ===1;
});

console.log(arrayResult);