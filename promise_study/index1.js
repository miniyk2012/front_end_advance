function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function hello() {
  await wait(1000);
  return 'world';
}

async function receiveHello() {
  console.log('receive ' + await hello());
}

async function foo() {
  await wait(500);
  throw Error('bar');
}

async function main() {
  // 调用异步函数, 就类似then的操作
  receiveHello();
  hello().then(ret => console.log('promise ' + ret));
  try { 
    await foo()
  } catch(err) {
    console.log(err)
  }
  console.log('next line');
}

main();