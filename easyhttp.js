function EasyHTTP() {
    this.http = new XMLHttpRequest();
}

// http GET request
EasyHTTP.prototype.get = function(url, callback) {
    this.http.open("GET", url, true);

    const self = this;

    this.http.onload = function() {
        if (self.http.status === 200) {
            callback(null, self.http.responseText);
        } else {
            callback("Error status: " + self.http.status);
        }
    };

    this.http.onerror = function() {
        console.log("connection error");
    };

    this.http.send();
};

// http POST request
EasyHTTP.prototype.post = function(url, data, callback) {
    this.http.open("POST", url, true);

    this.http.setRequestHeader("Content-type", "application/json");

    const self = this;

    this.http.onload = function() {
        callback(null, self.http.responseText);
    };

    this.http.send(JSON.stringify(data));
};

// http PUT request
EasyHTTP.prototype.put = function(url, data, callback) {
    this.http.open("PUT", url, true);

    this.http.setRequestHeader("Content-type", "application/json");

    const self = this;

    this.http.onload = function() {
        callback(null, self.http.responseText);
    };

    this.http.send(JSON.stringify(data));
};

// http DELETE request
EasyHTTP.prototype.delete = function(url, callback) {
    this.http.open("DELETE", url, true);

    const self = this;

    this.http.onload = function() {
        if (self.http.status === 200) {
            callback(null, "Post deleted");
        } else {
            callback("Error number: " + self.http.status);
        }
    };

    this.http.send();
};
