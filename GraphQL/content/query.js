import { gql } from '@apollo/client';

export const GET_SCREEN_CONTENT = gql`
  query getScreenContent($screen: Int,$world:Int) {
    getScreenContent(screen: $screen,world:$world) {
      id
      screen
      world
      created
      description
      title
      type
      url
    }
  }
`;

export const ADD_SCREEN_CONTENT = gql`
  mutation addContent($contentInput: ContentInput){
    addContent(input: $contentInput ){
      id
      screen
      world
      type
      url
      description
      title
      created
    }
  }
`;
export const DELETE_SCREEN_CONTENT = gql`
  mutation deleteContent($id: Int){
    deleteContent(id: $id ){
      id
      screen
      world
      type
      url
      description
      title
      created
    }
  }
`;
