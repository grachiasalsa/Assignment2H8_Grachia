// console.log("Bithealth");

// // PUSH // 
// const students = [
//     "Febrian",
//     "Athan",
//     "Dika"
// ]

// console.log(students, "==> BEFORE");
// // students.push("Rido") 

// students.push(0)

// console.log(students, "==> AFTER");

// // POP //

// const students = [
//     "Febrian",
//     "Athan",
//     "Dika"
// ]

// console.log(students, "==> BEFORE");
// // students.push("Rido") 

// let newStudents = students.pop()

// console.log(students, "==> AFTER");

// // UNSHIFT // 

// const students = [
//     "Febrian",
//     "Athan",
//     "Dika"
// ]

// console.log(students, "==> BEFORE");
// // students.push("Rido") 

// students.unshift("Athan", "Almer")

// console.log(students, "==> AFTER");

// // SHIFT //

// const students = [
//     "Febrian",
//     "Athan",
//     "Dika"
// ]

// console.log(students, "==> BEFORE");
// // students.push("Rido") 

// students.shift("Athan", "Almer")

// console.log(students, "==> AFTER");

// // SORTING //

// const genapNumber = [4, 8, 6, 2]

// // console.log(genapNumber.sort());

// let contNewNumber = genapNumber.sort(function (value1, value2) {
// console.log(val);
// })


// // SLICE //

// const fruits = [
//     "Apple",
//     "Mango",
//     "Banana",
//     "Orange"
// 

// ]

// console.log(fruits);
// const newFruits = fruits.splice(1, 2)

// console.log(fruits, "==> NEW FRUITS");
// console.log(newFruits, "==> This is Return");

// // SPLIT //
// const word = "Hello World"
// const newWord = word.split (" ")

// console.log(newWord, "==> FINAL");

// OBJECT //
const student = {
    name: "Faqih",
    age: 20,
    age: 21,
    "address": "Jakarta"
    Kendaraan: {
        roda: 6,
        colour: "orange",
        pintu: 3
    }
    favFoods: [
        "Ayam Geprek",
        "Nasi Kuning"
    ]
}

let nameStudent = student.name 
let addressStudent = student.address
let studentAge = student.age

let colourBSDLink = student.Kendaraan.colour
let nasiKuning = student.favFoods[1]

console.log(nameStudent);
console.log(addressStudent);
console.log(nasiKuning);
console.log(colourBSDLink);

for (const key in student) {
    console.log(student, "==> OBJ");
    console.log(key, "==> KEY");
}

// //
const startObject = student.start()
console.log(startObject, "==> Start Object");

