console.log(" 🔐 Welcome to the Secret Number Game!")

let count = 3

function guess(secret) {
    return function check(key) {
        if (key === secret) {
            return "🎉 Correct"
        }
        else if (key < secret) {
            return "📉 Too low"
        }
        else {
            return "📈 Too high"
        }
    }
}

const secret = guess(7)

let a = () => {
    for (let i = 1; i <= count; i++) {
        console.log(`Attempts ${i}:Guess the secret number(1-10)`)
        let key = Number(prompt("Enter:"))
        let res = secret(key)
        console.log(res)
        if (res == "🎉 Correct") {
            return
        }
    }
    console.log("🚫 Out of Attempts")
}
a()