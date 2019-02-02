class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
    }

    log() {
        this.tasks.forEach(function(task) {
            console.log(task);
        });

        this.tasks.forEach((task) => {
            console.log(task);
        });

        this.tasks.forEach(task => {
            console.log(task);
        });

        this.tasks.forEach(task => console.log(task));

        this.tasks.forEach((task, index) => console.log(task, index));

        this.tasks.forEach(() => console.log('task'));

        // scope of this is like OOP languages
        // with => syntax instead of traditional javascript
    }
}

class Task {}

new TaskCollection([
    new Task, new Task, new Task
]).log();
