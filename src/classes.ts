// abstract class Department {
//      static fiscalYear = 2022;
//      // private id: string;
//      // private name: string;
//      protected employees: string[] = [];

//      constructor(protected readonly id: string, public name: string) {
//           // this.id = id;
//           // this.name = n;
//      }

//      static createEmplyoyee(name: string){
//           return {name: name};
//      }

//      abstract describe(): void ; 

//      addEmployee(employee: string) {
//           // this.id = 'd2';
//           this.employees.push(employee);
//      }

//      printEmployees(){ 
//           console.log(this.employees.length);
//           console.log(this.employees);
//      }
      
// }

// // Static Method 
// const employee1 = Department.createEmplyoyee("Sai Ar Kar");
// // console.log(employee1);
// // console.log(Department.fiscalYear);

// // inheritance
// class ITDepartment extends Department{
//      constructor(id: string, public admins: string[]){
//           super(id, "IT");
//           this.admins = admins;
//      }
//      describe(): void {
//           console.log("IT Department  -ID: " + this.id);
//      }
// }
// const it = new ITDepartment("IT1", ["Sai"]);
// // it.describe();
// // console.log(it);

// // inheritance
// class AccountingDepartment extends Department{
//      private lastRepost: string;
//      private static instance: AccountingDepartment;

//      private constructor(id: string, public reports: string[]){ // singleton
//           super(id, "Accounting");
//           this.lastRepost = reports[0];
//      }

//      static getInstance(){ // singleton
//           if(AccountingDepartment.instance){
//                return this.instance;
//           }
//           this.instance = new AccountingDepartment("D2", []);
//           return this.instance;
//      }

//      describe(): void {
//           console.log("Accounting Departmen -ID: " + this.id);
//      }

//      get mostRecentRepost(){
//           if(this.lastRepost){
//                return this.lastRepost;
//           }
//           throw new Error("No Repost Foundl.");
//      }

//      set mostRecentRepost(value: string){
//           if(!value){
//                throw new Error("Please pass a valid value!");
//           }
//           this.addReport(value);
//      }
//      addEmployee(name: string) {
//           if(name === "sai"){
//                return;
//           }
//           this.employees.push(name);
//      }
//      addReport(text: string){
//           this.reports.push(text);
//           this.lastRepost = text;
//      }
//      printReports(){
//           console.log(this.reports);
//      }
// }

// // const accounting = new AccountingDepartment("AC", []);

// // accounting.describe();
// const accouting = AccountingDepartment.getInstance();
// // console.log(accouting);