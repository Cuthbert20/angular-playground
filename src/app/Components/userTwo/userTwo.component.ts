import { Component, OnInit } from "@angular/core";
import { User } from "../../models/User";

@Component({
  selector: "app-userTwo",
  templateUrl: "./userTwo.component.html"
})
export class UserComponentTwo implements OnInit {
  //Properties
  user: User; //pointing to User interface below
  constructor() {}
  ngOnInit() {
    this.user = {
      firstName: "Cody",
      lastName: "Knowl",
      age: 12,
      address: {
        street: "50 Front Rd.",
        city: "Nephi",
        state: "Utah"
      }
    };
  }
}

//Creating an interface. Interface moved to models folder inside of app
//an interface is basiclly a mapped object
// interface User {
//   firstName: string;
//   lastName: string;
//   age: number;
//   address: {
//     street: string;
//     city: string;
//     state: string;
//   };
// }
