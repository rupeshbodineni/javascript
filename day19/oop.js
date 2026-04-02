class person{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log(`Hello, my name is ${this.name}`);
        let p1=new person("Alice");
        p1.greet();
    }
}
let p1=new person("Alice");
        p1.greet();