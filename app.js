const http = new EasyHTTP();

// http.get("https://jsonplaceholder.typicode.com/posts", function(err, response) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });

// http.get("https://jsonplaceholder.typicode.com/posts/1", function(err, response) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });

const data = {
    title: "Test title",
    body: "This is test body."
};

// http.post("https://jsonplaceholder.typicode.com/posts", data, function(
//     err,
//     response
// ) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });

// http.put("https://jsonplaceholder.typicode.com/posts/1", data, function(
//     err,
//     response
// ) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });

http.delete("https://jsonplaceholder.typicode.com/posts/5", function(
    err,
    response
) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
});
