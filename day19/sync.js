let employees=[
    {eid:101, ename:"John Doe", salary:50000},
    {eid:102, ename:"Jane Smith", salary:60000},
    {eid:103, ename:"Emily Johnson", salary:70000}
];
function createEmployee(employee, Callback){
    setTimeout(()=>{
        employees.push(employee);
        Callback();
    },4000)
function getEmployees(){
    setTimeout(()=>{
        let rows= "";
        for(let employee of employees){
            rows+=`<tr>
            <td>${employee.eid}</td>
            <td>${employee.ename}</td>
            <td>${employee.salary}</td>
            </tr>`;
            document.getElementById("tdata").innerHTML=rows;
        }
    },2000)
}
createEmployee({eid:104, ename:"David Brown", salary:80000}, ()=>{
    getEmployees();
});
}
