class Customer{

  
constructor( private_firstName:string,private_lastName:string){

}

public get firstName():string{
   return this._firstName;
}
public set firstName(value:string){
   this._firstName=value;

}

public get lastName():string{
   return this._lastName;
}
public set lastName(value:string){
   this._lastName=value;

}
}
    
//let's create an instance //beispiel
let myCustomer=new Customer('martin','dikon');

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);