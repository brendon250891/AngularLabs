class User {
    constructor(username = "", birthdate = "", age = 0, email = "", password = "", avatar = "") {
        this.username = username;
        this.birthdate = birthdate;
        this.age = age;
        this.email = email;
        this.password = password;
        this.avatar = avatar;
    }

    isEmpty() {
        return this.username == "" && this.birthdate == "" && this.age == 0 && this.email == "" && this.password == "" && this.avatar == "";
    }
}

const validUsers = [
    new User('Brendon', '25-08-1991', 28, 'brendon@week5.com', '123', 'brendon.jpeg'),
    new User('John', '25-08-1990', 29, 'john@week5.com', '123', 'john.jpg'),
    new User('Jane', '25-08-1989', 30, 'jane@week5.com', '123', 'jane.jpeg')
];

module.exports = (app, path) => {
    app.post('/api/auth', (request, response) => {
        let user = authenticate(request.body.email, request.body.password);
        if (user.isEmpty()) {
            response.status(403).send('Invalid User Credentials Were Provided')
        }

        response.send(JSON.stringify({
            username: user.username,
            birthdate: user.birthdate,
            age: user.age,
            email: user.email,
            avatar: user.avatar
        }));
    });
}

function authenticate(email, password) {
    let user = new User();
    validUsers.forEach(u => {
       if (u.email == email && u.password == password) {
           user = u;
           user.valid = true;
       } 
    });

    return user;
}