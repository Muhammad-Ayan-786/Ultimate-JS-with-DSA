/* =========================================
Post Request with Fetch API
========================================= */

console.log("Welcome to Post Request with Fetch API");

const postReq = async () => {
    const options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            title: 'Post Request Creation',
            body: 'This is a post request using fetch API',
            Request_types: ["GET", "POST", "PUT", "DELETE"],
            Developer: 'Mohammad Ayan',
            Language: 'JavaScript',
            userId: 786
        }),
    } // JSON API

    // The url for Post Request is used from JSONPlaceholder
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    const data = await response.json()

    return data;
}

const main = async () => {
    const result = await postReq();
    console.log(result);
};

main();