export default class HolbertonCourse {
    constructor(name, length, students) {
        if (typeof name !== "string") {
            throw TypeError("Name must be a string")
        }
        if ( typeof length !== "number") {
            throw TypeError("Length must be a number")
        }
        if (students.constructor !== Array && students.every((items) => typeof items !== "string")) {
            throw TypeError("students must be an array of string.")
        }
        this._name = name;
        this._leghth = length;
        this._students = students;
    }

    //name getternmethod
    get name() {
        return this._name;
    }

    //names settermethod
    set name(name) {
        if (typeof name === "string") {
            this._name = name;
        } else {
            throw TypeError("Name must be a string")
        }
    }

    //gettermethod for length
    get length() {
        return this._length;
    };

    //lengthsetter method
    set length(length) {
        if ( typeof length === "number" ) {
            this._leghth = length;
        } else {
            throw TypeError("Length must be a number")
        }
    }

    //gettermethod for students
    get students() {
        return this._students;
    };

    //studentsSetter method
    set students(students) {
        if (students.constructor !== Array && students.every((items) => typeof items !== "string")) {
            throw TypeError("students must be an array of string.")
        } else {
            this._students = students;
        }
    }
}
