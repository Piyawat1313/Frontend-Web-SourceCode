let staff = [
    { name: "John", role: "Dev", salary: 40000 },
    { name: "Jane", role: "Manager", salary: 80000 },
    { name: "Bob", role: "Dev", salary: 45000 }
];

// ลองหาคนที่เงินเดือนมากกว่า 50000
let richPeople = staff.filter(person => person.salary > 50000); //filter loop เช็คทีละตัว

// แสดงชื่อคนแรกที่เจอ
console.log("คนที่มีเงินเดือนสูงคือ: " + richPeople[0].name + " (" + richPeople[0].salary + " บาท)");
          