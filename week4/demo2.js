baseUrl = 'https://api.github.com/users/solomonxie';

const fetch = require("node-fetch");
/* 
Promised-based Request
*/
const requestAnimePromise = () => {
    fetch(baseUrl)
        .then(response => response.json())
        .then(json => {
            console.log("Promise-based")
            console.log(json)
        });
}
requestAnimePromise();
/* 
async/await based Request
*/

const requestAnimeAwait = async function() {
    const response = await fetch(baseUrl)
    const json = await response.json();
    console.log("async/await based");
    console.log(json);
}

requestAnimeAwait();
console.log(fetch(baseUrl));  // 这句话会先执行哟, 打印: Promise { <pending> }