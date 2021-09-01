import { gql } from '@apollo/client';

export const GET_REGIONS_SCREEN = gql`
  query getRegionScreen($reg: Int) {
    getRegionScreen(region:$reg) {
      id
      region
      name
      created
    }
  }
`;

export const CREATE_REGION_SCREEN = gql`
  mutation createScreen($createScreenInput: ScreenInput) {
    createScreen(input: $createScreenInput) {
      id
      name
      region
      created
    }
  }
`;

export const UPDATE_REGION_SCREEN = gql`
  mutation updateScreen($screenUpdateInput: ScreenUpdateInput) {
    updateScreen(input: $screenUpdateInput) {
      id
      name
      region
      created
    }
  }
`;
export const DELETE_REGION_SCREEN = gql`
  mutation deleteScreen($id: Int){
    deleteScreen(id:$id) {
      id
      name
      region
      created
    }
  }
`;
