const form = document.querySelector(".form");
const nameInput = document.querySelectorAll("input")[0];
const idInput = document.querySelectorAll("input")[1];
const deptInput = document.querySelectorAll("input")[2];
const statusInput = document.querySelector("select");
const addBtn = document.querySelector(".form button");
const darkBtn = document.querySelector(".dark");
const container = document.querySelector(".container");

let students = [];

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const student = {
        name: nameInput.value,
        id: idInput.value,
        dept: deptInput.value,
        status: statusInput.value
    };

    students.push(student);
    showStudents();
    form.querySelectorAll("input, select").forEach(x => x.value = "");
});

function showStudents() {
    document.querySelector(".students")?.remove();

    const box = document.createElement("div");
    box.classList.add("students");

    students.forEach((s, i) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${s.name}</h3>
            <p>ID: ${s.id}</p>
            <p>Department: ${s.dept}</p>
            <p>Status: ${s.status}</p>
            <button onclick="deleteStudent(${i})">Delete</button>
        `;

        box.appendChild(card);
    });

    container.appendChild(box);
    updateStats();
}

function deleteStudent(i) {
    students.splice(i, 1);
    showStudents();
}

function updateStats() {
    const cards = document.querySelectorAll(".top h2");

    cards[0].textContent = students.length;
    cards[1].textContent =
        students.filter(s => s.status === "Active").length;
    cards[2].textContent =
        students.filter(s => s.status === "Inactive").length;
}

darkBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
