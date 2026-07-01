const database = [
    "hello",
    "result1",
    "result2",
    "javascript",
    "java",
    "hi",
    "python",
    "programming"
];

const input = document.querySelector("#input");
const result = document.querySelector(".result");


const logger = (type) => (message) => {
    console.log(`[${type}] - ${message}`);
};
const info = logger("INFO");


function throttle(fn, delay) {
    let last = 0;
    return function (...args) {
        const now = Date.now();
        if (now - last >= delay) {
            last = now;
            fn(...args);
        }
    };
}

function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

function getData(searchText) {
    info("Searching database...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const matches = database.filter(word =>
                word.toLowerCase().includes(searchText.toLowerCase())
            );
            if (matches.length > 0) {
                resolve(matches);
            } else {
                reject("No Results Found");
            }
        }, 1000);
    });
}

function displayResults(list) {
    result.innerHTML = "";
    list.forEach(item => {
        const p = document.createElement("p");
        p.textContent = item;
        result.appendChild(p);
    });

}

const throttledLogger = throttle(() => {
    info(`Throttled keystroke: ${input.value}`);
}, 800);

const debouncedSearch = debounce(() => {
    info("Debounced search triggered");
    getData(input.value)
        .then(results => results.map(word => word.toUpperCase()))
        .then(formatted => {
            displayResults(formatted);
        })
        .catch(error => {
            result.innerHTML = `<p>${error}</p>`;
        });
}, 1000);

input.addEventListener("input", () => {
    throttledLogger();
    debouncedSearch();
});











// const data = ["hello", "result1", "result2", "javascript", "java", "hi", "python", "programming"]

// let btn = document.querySelector("#btn");
// let input = document.querySelector("#input");
// let result = document.getElementsByClassName("result")

// function logData(type) {
//     const text = input.value;
//     console.log(`${type} : ${text}`);
// }

// const myThrottled = (call, delay) => {
//     let last = 0;
//     return function (...args) {
//         let now = new Date().getTime();
//         if (now - last < delay) return;
//         last = now
//         return call(...args);
//     }
// }
// const throttledLog = myThrottled(
//     () => logData("(INFO) - Throttled keystroke:"),
//     1200
// );
// input.addEventListener("input", throttledLog);

// const myDebounce = (call, delay) => {
//     let timer;
//     return function (...args) {
//         if (timer) clearTimeout(timer);
//         timer = setTimeout(() => {
//             call(...args);
//         }, delay);
//     }
// }
// const debounced = myDebounce(() => {
//     logData("(INFO) - Debounced search triggered");
//     getData(input.value).then((res) => {
//         console.log(res)
//     }).catch((err) => {
//         console.log(err)
//     })
// }, 1000);
// input.addEventListener("input", debounced);

// function getData(ele) {
//     return new Promise((resolve, reject) => {
//         let res = false
//         console.log("Searching")
//         setTimeout(() => {
//             data.forEach((val) => {
//                 if (val.includes(ele)) {
//                     p = document.createElement("p")
//                     p.innerHTML = val;
//                     result.appendChild(p)
//                     res = true
//                 }
//             })
//             if (res) {
//                 resolve("Found")
//             } else {
//                 reject("Not Found")
//             }
//         }, 1000);
//     })
// }

