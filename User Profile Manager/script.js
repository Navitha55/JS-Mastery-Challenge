let usercount = 0
let user = []

let add = document.getElementById('add');
let show = document.getElementById('show');
let clear = document.querySelector('#clear');

function check() {
    if (user.length > 0) {
        clear.classList.remove("hide")
        show.classList.remove("hide")
    }
    else {
        clear.classList.add("hide")
        show.classList.add("hide")
    }
}

add.addEventListener("click", () => {
    let name = prompt("Enter your name:");
    if (!name) {
        return
    }
    name = name.trim();
    if (name.toLowerCase().includes("admin")) {
        alert("Reserved name!");
        return;
    }
    let displayName = name.toUpperCase();
    let email = `${name.toLowerCase()}@example.com`;
    usercount++;
    let temp = {
        id: usercount,
        name: displayName,
        email: email
    }
    user.push(temp)
    check();
    setTimeout(() => {
        alert("User added Successfully !");
    }, 500);
})

show.addEventListener("click", () => {
    user.forEach((dict) => {
        let str = ''
        for (let key in dict) {
            str += `${key} : ${dict[key]}   `
        }
        console.log(str)
    })
})

clear.addEventListener("click", () => {
    user.length = 0
    usercount = 0
    alert("All users Clear!")
    console.log("User List is now Empty")
    check()
})