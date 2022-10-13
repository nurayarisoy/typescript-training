class Customer{
    firstName: string;
    lastName:string;
constructor(theFirst:string,theLast:string){
this.firstName=theFirst;
this.lastName=theLast;
}
}
    
//let's create an instance //beispiel
let myCustomer=new Customer('martin','dikon');
myCustomer.firstName='martin';
myCustomer.lastName='dikon';
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);