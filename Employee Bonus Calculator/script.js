let employees = [
    {
        id: 1,
        name: "Navitha",
        salary: 43000
    },
    {
        id: 2,
        name: "Srinivas",
        salary: 48000
    },
    {
        id: 3,
        name: "Anitha",
        salary: 50000
    },
    {
        id: 4,
        name: "Yashwanth",
        salary: 50000
    }
];

const all = document.querySelector(".all-emp");
const heading = document.querySelector(".heading");
const btn = document.querySelector("#emp");

btn.addEventListener("click", () => {

    heading.classList.remove("hide");
    all.classList.remove("hide");

    all.innerHTML = "";

    employees.forEach((obj) => {

        const emp = document.createElement("ul");
        emp.classList.add("emp");

        for (let key in obj) {
            const li = document.createElement("li");
            li.textContent = `Employee ${key}: ${obj[key]}`;
            emp.appendChild(li);
        }

        all.appendChild(emp);
    });

});


function calculateBonus(percent) {
    return (this.salary * percent) / 100;
}

const eligibleEmployees = employees.filter(
    employee => employee.salary > 45000
);

const employeesWithBonus = eligibleEmployees.map(employee => {

    const { id, name, salary } = employee;

    const bonus = calculateBonus.call(employee, 10);

    return {
        ...employee,
        bonus
    };
});

const totalBonus = employeesWithBonus.reduce(
    (sum, employee) => sum + employee.bonus,
    0
);

employeesWithBonus.forEach(({ name, salary, bonus }) => {
    console.log(
        `${name} earns ₹${salary} and got a bonus of ₹${bonus}`
    );
});

console.log(`Total Bonus Given: ₹${totalBonus}`);