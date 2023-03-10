interface DirectorInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string
}

interface TeacherInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home"
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break"
    }
    workDirectorTasks(): string {
        return "Getting to director tasks"
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home"
    }
    getCoffeeBreak(): string {
        return "Cannot have a break"
    }
    workTeacherTasks(): string {
        return "Getting to work"
    }
}

function createEmployee(salary: number | string) {
    if (typeof salary === "number" && salary < 500) {
        return Teacher
    }
    return Director
}


function executeWork(employee: Function) {
    if ( employee == Director ) {
        const direc = new Director;
        return direc.workDirectorTasks()
    } else if ( employee == Teacher ) {
        const teach = new Teacher;
        return teach.workTeacherTasks()
    }
}

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
