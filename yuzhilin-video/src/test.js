
const obj = {
    name: "yuzhilin",
    age: 18,
    job: {
        coding: 4,
        student: {
            a: 1
        }
    }
}


function deepClone(origin) {
    if (origin == undefined || typeof origin !== "object") {
        return origin
    }
    const target = new origin.constructor()

    for (let k in origin) {
        // if (origin.hasOwnProperty(k)) {
            target[k] = deepClone(origin[k])
        // }
        console.log(k,origin[k]);

    }
    return target
}

const newObj = deepClone(obj)
newObj.job.student.a='1223'