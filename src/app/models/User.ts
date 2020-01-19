//Interface file that we are using in userTwo Component but, we could use it anywhere.

export interface User {
  firstName: string;
  lastName: string;
  age: number;
  address: {
    street: string;
    city: string;
    state: string;
  };
}
