const password_box = document.getElementById("password");

const lengthh = 12;

const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower_case = "abcdefghijklmnopqrstuvwxyz";
const numb = "0123456789";
const symbol = "@#$%^&*()_+?><!~=";

const total = upper_case + lower_case + numb + symbol;

function generatepassword() {
    let password = "";
    password += upper_case[Math.floor(Math.random() * upper_case.length)];
    password += lower_case[Math.floor(Math.random() * lower_case.length)];
    password += numb[Math.floor(Math.random() * numb.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];


    while(lengthh > password.length) {
        password += total[Math.floor(Math.random() * total.length)];
    }

    password_box.value = password;
}


// function () {
//     password_box.select();
//     document.execCommand("copy");
// }

function copy_ninja() {
    password_box.select();
    document.execCommand("copy");
}