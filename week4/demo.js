async function getData1() {
    resp = await fetch('https://httpbin.org/get');
    data = await resp.json();
    console.log(data);
}
function fetchWrapper() {
    resp = fetch('https://httpbin.org/get');
    return resp;
}

async function getData2() {
    resp = await fetchWrapper();
    data = await resp.json();
    console.log(data);
}
getData1();
console.log(fetchWrapper());
getData2();
