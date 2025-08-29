class User {
    #password;

    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }

    checkPassword(pwd) {
        return this.#password === pwd;
    }

    getUsername() {
        return this.username;
    }
}

let users = [
    new User("user1", "pass1"),
    new User("user2", "pass2"),
]

function register(uname, pwd, confirmPwd) {
    if (pwd != confirmPwd) {
        alert("Passeords didn't match");
        return;
    }

    for (i = 0; i < users.length; i++) {
        if (users[i].getUsername() === uname) {
            alert(`Username ${uname} already exists`);
            return;
        }
    }

    users.push(new User(uname, pwd));
    alert("You are successfully registered");
}

function login(uname, pwd) {

    for (i = 0; i < users.length; i++) {
        if (users[i].getUsername() === uname && users[i].checkPassword(pwd)) {
            alert("You are logged in");
            return;
        }
    }

    alert("Username or password is incorrect");
}

function loginRegisterFunction() {
    const uname = document.getElementById('username');
    const pwd = document.getElementById('password');
    const confirmPwd = document.getElementById('confirmPassword');

    if (confirmPwd) {  
        register(uname.value, pwd.value, confirmPwd.value);
    } else { 
        login(uname.value, pwd.value);
    }
}

let LRButton = document.getElementById('loginRegisterButton');
if (LRButton) {
    LRButton.addEventListener('click', loginRegisterFunction);
} else {
    console.log("Button not found");
}
