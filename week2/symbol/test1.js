let s = Symbol();
console.log(typeof s);

const obj = {
    toString() {
        return 'abc';
    }
};
const sym = Symbol(obj);
console.log(sym)