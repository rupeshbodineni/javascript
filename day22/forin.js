let person = {
    name: "Rupesh",
    age: 22,
    city: "Bangalore"
};

for (let key in person) {
    console.log(key);           
    console.log(person[key]);   
}