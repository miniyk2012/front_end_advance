const digits = [9,8,7,6,5,4,3,2,1,0];
for (let i=0; i<digits.length; i++) {
    console.log(digits[i]);
}

for (const i in digits) {
    console.log(digits[i]);
}

for (const i of digits) {
    console.log(i);
}

Array.prototype.decimalfy = function() {
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i].toFixed(2);
    }
  };
  
  
  for (const index in digits) {
    console.log(`${index}:`, digits[index]);
  }

  for (const i of digits) {
    console.log(i);
}
digits.forEach(function (value) {
    console.log(value);
})
  