import { gql } from '@apollo/client';

export const GET_MAP_REGIONS = gql`
  query getMapRegion($map: Int) {
    getMapRegion(map:$map) {
      id,map,name,created
    }
  }
`;

export const CREATE_MAP_REGION = gql`
  mutation createRegion($createRegionInput: RegionInput){
    createRegion(input: $createRegionInput) {
      id
      map
      name
      created
    }
  }
`;
export const UPDATE_MAP_REGION = gql`
  mutation updateRegion($updateRegionInput: RegionUpdateInput){
    updateRegion(input: $updateRegionInput) {
      id
      map
      name
      created
    }
  }
`;
export const DELETE_MAP_REGION = gql`
  mutation deleteRegion($id: Int){
    deleteRegion(id:$id) {
      id
      map
      name
      created
    }
  }
`;
