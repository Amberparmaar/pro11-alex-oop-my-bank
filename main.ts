#! /usr/bin/env node

interface ibankaccount{
    credit (amount:number) :void;
    debit (amount: number) : void;
}

class Bankaccount implements ibankaccount{
    accountbalance : number
    constructor(accountbalance:number){
        this.accountbalance =accountbalance
    }
    // publically credit
 public credit (amount : number){
        if(amount > 0){
            this.accountbalance += amount
            console.log("Credit sucessfully get into new account & your balance is :" +this.accountbalance);
            
        }
        else {
            console.log("Credit unsucessfull");
            
        }
   }
   //publically debit
   public debit (amount: number){
    if(amount>0 && amount<this.accountbalance){
        this.accountbalance-= amount
        console.log("Debit sucessfully share in new account balance :"+this.accountbalance)
        
    } else {
        console.log("Debit unsucessfully");
        
    }
   }
}
// customer detail
class Customer {
    person : {
        firstname: string;
        lastname : string
    }
    age:number;
    gender:string;
    mobile_number :number;
    bankaccount:Bankaccount;

    constructor(person:{firstname:string, lastname: string}, age:number, gender:string, mobile_number:number, bankaccount:Bankaccount){
        this.person=person;
        this.age=age;
        this.gender=gender;
        this.mobile_number=mobile_number;
        this.bankaccount=bankaccount;

    }
    //publically user access
    public display(){
        console.log("Name: "+this.person.firstname+""+this.person.lastname);
        console.log("Age: "+this.age);
        console.log("Gender: "+this.gender);
        console.log("Mobile Number: "+this.mobile_number);
        console.log("Bank Account: "+this.bankaccount.accountbalance);
        console.log();
     }
}
const a1 = new Bankaccount(900)
const c1 = new Customer({firstname:"Amber", lastname:"Parmaar"},32,"female", 93242345678,a1);
c1.display()
c1.bankaccount.debit(500)
console.log();

const a2 = new Bankaccount(1200)
const c2 = new Customer({firstname:"Fahad", lastname:"Parmaar"},30,"male", 93241645678,a2);
c2.display()
c2.bankaccount.debit(200)
console.log();

