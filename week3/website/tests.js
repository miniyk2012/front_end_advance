/* Function to GET data */
const retrieveData = async (url = '') => {
    const request = await fetch(url);
    try {
        // Transform into JSON
        const allData = await request.json()
        console.log(allData);
    } catch (error) {
        console.log("error", error);
    }
}

retrieveData('/all');