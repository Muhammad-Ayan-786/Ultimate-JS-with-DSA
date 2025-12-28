const rawData = fetch("https://goweather.xyz/weather/Ny");

rawData.then((response) => {
    console.log(response.status); // Prints the http status code (200-299 for success)
    console.log(response.ok); // Boolean, true if the http status code is 200-299
    console.log(response.headers); // The response headers
    console.log(response); // The Response object

    return response.json();
}).then((data) => {
    console.log(data);
})