function wait(message, ms) {
    return new Promise(r => setTimeout(function () {
        r(message);
    }, ms));
}
const urls = ['www.baidu.com', 'www.google.com', 'www.xx.com'];

// 顺序返回结果, 慢速方法, 前一个完成, 再运行下一个
async function logInOrder(urls) {
    for (const url of urls) {
        const response = await wait(url, 500);
        console.log(response);
    }
}


// 顺序返回结果, 快速方法, 同时await, 然后顺序输出
async function fastLogInOrder(urls) {
    const textPromises = urls.map(async url => {
        return await wait(url, 500);
    })
    for (const textPromise of textPromises) {
        console.log(await textPromise);  // 这里保证了会顺序输出结果
    }
}


logInOrder(urls).then(ret => fastLogInOrder(urls));
console.log('next line');
