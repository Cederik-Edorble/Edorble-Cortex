import { gql } from '@apollo/client';

export const AUTH_USER = gql`
  query AuthUser($email: String!, $password: String!) {
    authUser(input: { email: $email, password: $password }) {
      email
      id
      token
    }
  }
`;

export const CREATE_USER = gql`
  mutation ($email: String!, $password: String!) {
    createUser(input: { email: $email, password: $password }) {
      email
      id
      token
    }
  }
`;
