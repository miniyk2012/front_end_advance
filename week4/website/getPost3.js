// Async POST
const postData = async (url = '', data = {}) => {

    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });

    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
};

// Async GET
const retrieveData = async (url = '') => {
    const request = await fetch(url);
    try {
        // Transform into JSON
        const allData = await request.json()
        return allData;
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
};

document.getElementById('generate').addEventListener('click', getPost);

async function getPost(e) {
    const animal = document.querySelector('#animal').value;
    const fav = document.querySelector('#favorite').value;
    const retVal = await postData('/animal', {
        animal: animal,
        fav: fav
    });
    console.log(retVal);
    data = await updateUI();
    console.log(data);
}

async function updateUI() {
    const data = await retrieveData('/all');
    document.getElementById('content').innerHTML = JSON.stringify(data);
    return data;
}


// 下面的代码需要再启动一个支持cors的服务器跑在3000端口的, 验证跨域功能
getWeather = async () => { 
    data = await fetch('http://localhost:3000/all');
    data = await data.json()
    return data;
};

async function logData() {
    data = await getWeather();
    console.log(data);
}

console.log(logData());
logData();
logData();
logData();
logData();
console.log('wawa');