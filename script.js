document.addEventListener('DOMContentLoaded', function(event) {
    const datetEl = document.getElementById('current-date');
    const dataobj = new Date();
    datetEl.innerHTML = dataobj.toDateString();
});

document.querySelectorAll('.cmplt-btn').forEach(function(button) {
    button.addEventListener('click', function(event) {
        alert('Board updated successfully!');
        this.disabled = true;
        this.style.opacity = "0.5";
        this.style.cursor = "not-allowed";

        let tasks = document.getElementById('tasks-remaining');
        tasks.innerHTML = tasks.innerHTML - 1;

        let completed = document.getElementById('tasks-completed');
        completed.innerHTML = parseInt(completed.innerHTML) + 1;

        const currBtn = event.target;
        const card = currBtn.parentElement.parentElement;

        const taskTitle = card.querySelector('.task-title').textContent;
        const currentTime = new Date().toLocaleTimeString();

        // activity log
        const message = document.createElement('p');
        message.textContent = `You have completed the task "${taskTitle}" at ${currentTime}.`;
        message.classList.add('bg-primary', 'text-lg', 'mt-2', 'p-2');

        let log = document.getElementById('activity-log');
        log.appendChild(message);

        if (parseInt(tasks.innerHTML) === 0) {
            alert('Congratulations! You have completed all the tasks.');
        }
    });
});

document.getElementById('random-clr').addEventListener('click', function(event) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);
    document.body.style.backgroundColor = `#${randomColor}`;
});

document.getElementById('clear-history').addEventListener('click', function(event) {
    let log = document.getElementById('activity-log');
    log.innerHTML = '';
});
