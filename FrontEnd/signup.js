// Make connection
console.log(io)
var socket = io.connect('http://localhost:8080');

function signUp() {
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    if (!(username.value && email.value && password.value)) {
        alert('Please fill all the boxes!');
    }
    socket.emit('signup', {
        username: username.value,
        email: email.value,
        password: password.value
    });

}