const API_URL = "http://localhost:3000/api/v1/";
async function getTasks() {
    try {
        const response = await fetch(API_URL);
        const tasks = await response.json();
        const taskList = document.querySelector('ul');
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.name;
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            li.appendChild(editButton);
            li.appendChild(deleteButton);
            taskList.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
}
async function addTask(event) {
    event.preventDefault();
    const taskInput = document.getElementById('results-textarea');
    const newTask = taskInput.value.trim();

    if (newTask) {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: newTask })
            });
            if (!response.ok) {
                throw new Error('Failed to add task');
            }
            taskInput.value = '';
            getTasks();
        } catch (error) {
            console.error('Error adding task:', error);
        }
    }
}
document.querySelector('#task-form').addEventListener('submit', addTask);
document.addEventListener('DOMContentLoaded', getTasks);
