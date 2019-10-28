// rest parameter
const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);

function sum() {
    console.log(arguments);
    let total = 0;
    for (const argument of arguments) {
        total += argument;
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5));


function sum2(...nums) {
    console.log('nums', nums);
    console.log('arg', arguments);
    console.log(typeof arguments);
    let total = 0;
    for (const num of nums) {
        total += num;
    }
    return total;
}
console.log(sum2(1, 2, 3, 4, 5, 6));

obj = {
    1: 1,
    2: 2
}
console.log(typeof obj);
for (const k in obj) {
    console.log(obj[k]);
}



