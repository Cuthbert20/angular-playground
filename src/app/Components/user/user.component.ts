import { Component, OnInit } from "@angular/core";

// Adding decorator, decorator is a typeScript feature it allows us to add extra information onto our class component
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  //css file
  styleUrls: ["./user.component.css"]
  //below using template if you are embeding Component into main app.component.html
  // template: "<h2>Test</h2>",
  //inline styling
  // styles: [
  //   `
  //     h2 {
  //       color: blue;
  //     }
  //   `
  // ]
})

//creating class && exporting the class, Remeber classes are PascalCase
export class UserComponent implements OnInit {
  //properties
  //setting Types, TypeScript
  firstName: string;
  lastName: string;
  age: number;
  address;

  //different TypeScript Types
  foo: any;
  hasKids: boolean;
  numArr: number[]; //Type has to be an array of numbers
  stringArr: string[]; //Type has to be an array of strings
  anyArr: any[]; //Type can be an array of any type
  myTuple: [string, number, boolean]; //Type has to be a Tuple Array and values have to match was has been set ie string, number, boolean after these values any value can be used :)
  unusable: void; //Type void, variable can't be used except being set to undefined
  u: undefined; //Type can only be undefined
  n: null; //Type can only be null

  //Methods
  //First method is the constructor which is a function that runs automatically when ojbect is instantiated.
  //Since this is a Component it is when the component is initialised.
  constructor() {}
  ngOnInit() {
    // this.sayHello();
    this.firstName = "Juno";
    this.lastName = "Knowlt";
    this.age = 10;
    this.address = {
      street: "50 Main Street",
      city: "Nephi",
      state: "Utah",
      zipCode: 84057
    };
    console.log(this.age);
    this.hasBirthday();
    console.log(this.age);
    console.log(
      "Setting Types with function returns and function paramters",
      this.addNumbers(2, 3)
    );
  }

  sayHello() {
    console.log(`Hi ${this.firstName}`);
  }

  hasBirthday() {
    this.age += 1;
    console.log(`Happy Birthday ${this.firstName}`);
  }

  newAge() {
    return this.age + 2;
  }
  //setting type to function retun values and parameters.
  addNumbers(num1: number, num2: number): number {
    return num1 + num2;
  }
}

//We also need to add the Component to the app.module.ts file
//the app.module.ts file is the meeting place for Components, services, & everything else.

//

//Also before we can Display the Component we need to embed it in the main app Component template ie. app.component.html
//using <app-user></app-user> tag.
