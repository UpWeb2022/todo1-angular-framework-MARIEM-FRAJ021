import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { User } from '../models/user';

@Component({
  selector: 'app-list-user-component',
  templateUrl: './list-user-component.component.html',
  styleUrls: ['./list-user-component.component.css']
})
export class ListUserComponentComponent implements OnInit {
  category :  string;
  list: User[];
  constructor() { }

  ngOnInit(): void {
  
    this.list=[
      {
      idcustomer: 1,
      firstName: "Mila",
      lastName: " Kunis",
      birthDate: "1999-06-30",
      accountCategory: "Admin",
      email: "mila@kunis.com",
      password: "test",
      picture: "https://bootdey.com/img/Content/avatar/avatar3.png",
      profession: "Software Engineer"
      },
      {
      idcustomer: 2,
      firstName: "George",
      lastName: "Clooney",
      birthDate: "1999-06-30",
      accountCategory: "Customer",
      email: "marlon@brando.com",
      password: "test",
      picture: "https://bootdey.com/img/Content/avatar/avatar2.png",
      profession: "Software Engineer"
      },
      {
      idcustomer: 3,
      firstName: "George",
      lastName: "Clooney",
      birthDate: "1999-06-30",
      accountCategory: "Customer",
      email: "marlon@brando.com",
      password: "test",
      picture: "https://bootdey.com/img/Content/avatar/avatar1.png",
      profession: "Software Engineer"
      },
      {
      idcustomer: 4,
      firstName: "Ryan",
      lastName: "Gossling",
      birthDate:"1999-06-30",
      accountCategory: "Golden",
      email: "Ryan@nicholson.com",
      password: "test",
      picture: "https://bootdey.com/img/Content/avatar/avatar4.png",
      profession: "Software Engineer"
      },
      {
      idcustomer: 5,
      firstName: "Robert",
      lastName: "Downey",
      birthDate: "1999-06-30",
      accountCategory: "Blocked Account",
      email: "robert@nicholson.com",
      password: "test",
      picture: "https://bootdey.com/img/Content/avatar/avatar5.png",
      profession: "Software Engineer"
      }];
      
     
  }
 
  deleteUser(user: User){
    let i= this.list.indexOf(user);
    this.list.splice(i,1);

  }
}


