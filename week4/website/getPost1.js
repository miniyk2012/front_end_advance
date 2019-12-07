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

function getPost(e) {
    postData('/animal', {
            fav: 'lion'
        })
        .then(function (animal) {
            console.log('/animal', animal);
            retrieveData('/all')
                .then(data => {
                    console.log('/all', data);
                });
        });
}