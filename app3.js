const http = new EasyHTTP();

// http
//     .get("https://jsonplaceholder.typicode.com/users")
//     .then(users => console.log(users))
//     .catch(err => console.log(err));

const data = {
    name: "John Doe",
    username: "batman",
    email: "batman@batcave.com"
};

// http
//     .post("https://jsonplaceholder.typicode.com/posts", data)
//     .then(response => console.log(response))
//     .catch(error => console.log(error));

// http
//     .put("https://jsonplaceholder.typicode.com/posts/1", data)
//     .then(response => console.log(response))
//     .catch(err => console.log(err));

http
    .delete("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => console.log(response))
    .catch(error => console.log(error));
