//ES6 Fundamentsals
//1. Let and Const
let language = 'JavaScript';
if(true){
    let language ="java";
    console.log(language);
}
console.log(language);

function printMyDEtails(name,job,city){
    const message = `Hey! My name is ${name}. I work as a ${job} in ${city}.`;
    console.log(message);
}
printMyDEtails('John','Developer','New York');

// ================================OBJECTS AND PROTOTYPES===========================
/*
1.creating a shared object explicitly
2.Linking the same using Object.create
3.Retirning the user
 */

const shared={
    //1. shared method
    getDetails: function(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

function CreateUser(name,age){
    let user = Object.create(shared); //2
    user.name = name;
    user.age = age;
    return user; //3
}

const u1 = CreateUser('Alice',30);
u1.getDetails();

const u2 = CreateUser('Bob',25);
u2.getDetails();

console.log(u1);
console.log(u2);