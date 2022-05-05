// type Admin = {
//      name: string;
//      privileges: string[];
// }

// type Employee = {
//      name: string;
//      startDate: Date;
// }

// type ElevatedEmployee = Admin & Employee;

// const e1: ElevatedEmployee = {
//      name: "Sai", 
//      privileges: ["create-server"],
//      startDate: new Date()
// }

// // console.log(e1);

// type UnknowEmployee = Employee | Admin;

// function PrintEmployeeInformation (emp: UnknowEmployee){
//      console.log('Name: ' + emp.name);
//      if("privileges" in emp){
//           console.log("Privileges: " + emp.privileges);
//      }
//      if("startDate" in emp){
//           console.log("Start Date : ", emp.startDate);
//      }
// }

// PrintEmployeeInformation(e1);

// type Combinable = string | number;
// type Numeric = number | boolean;

// type Universal = Combinable & Number;

// function add(a: number, b: number) : number
// function add(a: string, b: string) : string
// function add(a: string, b: number) : string
// function add(a: number, b: string) : string
// function add(a: Combinable, b: Combinable){
//      if(typeof a === "string" || typeof b === "string"){
//           return a.toString() + b.toString();
//      }
//      return a + b;
// }

// const result = add("Harry ", "Potter");
// result.split(" ");

// class Car{
//      drive(){
//           console.log("Driving...");
//      }
// }

// class Truck {
//      drive(){
//           console.log("Driving a truck...");
//      }
//      loadCargo(amount: number){
//           console.log("Loading cargo ..." + amount);
//      }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle (vehicle: Vehicle){
//      vehicle.drive();
//      if(vehicle instanceof Truck){
//           vehicle.loadCargo(1000);
//      }
// }
// // useVehicle(v1);
// // useVehicle(v2);

// interface Bird {
//      type: "bird";
//      flyingSpeed: number;
// }

// interface Horse {
//      type: "horse";
//      runningSpeed: number; 
// }

// type Animal = Bird | Horse;

// function moveAnimal (animal: Animal){
//      let speed;
//      switch(animal.type){
//           case "bird":
//                speed = animal.flyingSpeed;
//                break;
//           case "horse":
//                speed = animal.runningSpeed;
//                break;
//      }
//      console.log("Moving at speed: " + speed);
// }

// // moveAnimal({type:"bird", flyingSpeed: 20});


// // const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
// const userInputElement = document.getElementById("user-input")! as HTMLInputElement;

// userInputElement.value = "Hi There";

// // {email: "Not a valid email", username: "Must start with a character!"}
// interface Errorcontainer { 
//      [prop: string] : string;
// }

// const errorBag : Errorcontainer = {
//      email : "Not a valid Email",
//      username: "Mario"
// };


// const fetchUserData = {
//      id : 1,
//      name: "Mario", 
//      job: {title: "CEO", description: "My Own Company"}
// }

// console.log(fetchUserData?.job?.title);

let userInput = undefined;

let storeData = userInput ?? "DEFAULT";

console.log(storeData);
