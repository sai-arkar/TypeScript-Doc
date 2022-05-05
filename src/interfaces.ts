// // type AddFn = (n1: number, n2: number) => number;
// interface AddFn {
//      (a: number, b: number): number;
// }

// let add : AddFn;

// add = (n1: number, n2: number) =>{
//      return n1 + n2;
// }


// interface Named {
//      readonly name? : string;
//      outputName? : string;
// }

// interface Greatable extends Named{
//      greet(phrase: string): void;
// }

// class Person implements Greatable {
     
//      name?: string;
//      age = 30;

//      constructor(n?: string){
//           if(n){
//                this.name = n;
//           }
//      }
//      greet(phrase: string): void {
//           if(this.name){
//                console.log(phrase + ' ' + this.name);
//           }else{
//                console.log("HI...");
//           }
//      }
// }

// let user1: Greatable;

// user1 = new Person('Mario');
// console.log(user1);
// user1.greet("Hello");