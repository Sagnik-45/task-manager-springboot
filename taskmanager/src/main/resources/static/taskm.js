const API_URL = "http://localhost:8080/api/tasks";

function loadTasks() {
    fetch(API_URL)
        .then(res => res.json())
        .then(tasks => {
            const list = document.getElementById("taskList");
            list.innerHTML = "";

            tasks.forEach(task => {
                const li = document.createElement("li");
                li.innerHTML =
                    task.title + " - " + task.status +
                    ` <button onclick="deleteTask(${task.id})">Delete</button>`;
                list.appendChild(li);
            });
        });
}

function createTask() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const status = document.getElementById("status").value;

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, description, status })
    })
    .then(() => loadTasks());
}

function deleteTask(id) {
    fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    }).then(() => loadTasks());
}

loadTasks();