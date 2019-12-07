## Promise
async函数, 在被调用时可以使用await, try, and catch关键字, 它内部实际上使用了Promise的机制
关于promise的相当好的资料: https://developers.google.com/web/fundamentals/primers/promises


## Fetch
const response = await fetch('https://api.com/values/1');
const json = await response.json();
console.log(json);

In the first line, we make a GET request to https://api.com/values/1. Instead of continuing to the next line, we wait for the request to finish, hence await. When it finishes, it passes the resolved value to the response variable.
In the second line, we get the JSON version of the response. Again, we use await so we can wait for it to complete (or fail) and then pass the result to the json variable.
Finally, in the last line, we log the value of the json variable to the console.

await allows us to wait for a Promise to resolve to a value.
await will return the value only after the Promise is resolved.

但这么写, 代码其实还没跑起来, 要加入事件循环才行, 例子见`demo2.js`

const request = async () => {
    const response = await fetch('https://api.com/values/1');
    const json = await response.json();
    console.log(json);
}
request();

fetchApi: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
node-fetch文档(一种fetchApi的实现): https://www.npmjs.com/package/node-fetch
