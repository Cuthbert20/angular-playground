import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
//importing UserComponent that we crate in the Components directory/file.
import { UserComponent } from "./Components/user/user.component";
import { UserComponentTwo } from "./Components/userTwo/userTwo.component";
import { UsersComponent } from './components/users/users.component';

@NgModule({
  //Add Components to declarations Array to display on UI
  declarations: [AppComponent, UserComponent, UserComponentTwo, UsersComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
