import gql from 'graphql-tag';
import { User } from '../Models/interfaces';

export const AUTH_SIGNUP = gql`
mutation signup($email: String!, $pass: String!, $name: String!){
    signup(email:$email, password:$pass, name:$name){
      token
      user{
        id
      }
    }
  }
`;

export interface SignUpVariables {
    email: string;
    pass: string;
    name: string;
}

export interface SignUpResponse {
    token: string;
    user: User;
}
