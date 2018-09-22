import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { SignUpResponse, SignUpVariables, AUTH_SIGNUP } from './auth.mutation';
import { User } from '../Models/interfaces';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  email: string;
  password: string;
  name: string;
  user: User;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
  }

  onSignUp() {
    console.log(this.email, this.password, this.name)
    this.apollo.mutate<SignUpResponse, SignUpVariables>({
      mutation: AUTH_SIGNUP,
      variables: {
        email: this.email,
        pass: this.password,
        name: this.name
      }
    }).subscribe(result => {
      this.user = result.data.signup.user;
      console.log(this.user)
    });
  }

}
