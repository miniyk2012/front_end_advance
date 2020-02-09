function wait(ms) {
    return new Promise(r => setTimeout(r, ms));
}

async function series() {
    await wait(500);
    await wait(500);
    return "series done!";
  }

async function parallel() {
    const wait1 = wait(500);
    const wait2 = wait(500);
    await wait1;
    await wait2;
    return "parallel done!";
}



parallel().then(ret => console.log(ret));
series().then(ret => console.log(ret));
console.log('next line');