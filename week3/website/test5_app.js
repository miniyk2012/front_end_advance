const postData = async (url = '', data = {}) => {
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Network response was not ok.');
    }
    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}

// postData('/addAnimal', {
//     animal: 'tiger'
// });

// postData('/addAnimal', {
//     animal: 'cat', 'weight': 10
// });
async function process() {
    try {
        const data = await postData('/addAnimal', {
            animal: 'tiger'
        });
        console.log(JSON.stringify(data)); // JSON-string from `response.json()` call
    } catch (error) {
        console.error(error);
    }
}

process();