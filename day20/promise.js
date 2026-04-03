let employee=[{id:1,name:"John",salary:5000},
               {id:2,name:"Jane",salary:6000}
]
let createEmployee=(employee)=>{
    setTimeout(()=>{
    let flag=true;
    flag?resolve("Data inserted successfully"):reject("Error in data insertion ")
    employee.push(employee);
    },4000)
}
let getEmployee=()=>{
    setTimeout(()=>{

    },2000)
}

createEmployee({id:3,name:"Doe",salary:7000})
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error);
});

getEmployee();