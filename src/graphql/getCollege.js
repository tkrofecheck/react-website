import { gql } from 'apollo-boost';

// $where = {"jobCompany": { "companyName": { "eq": "Time Inc."}}}
const GetCollege = gql`query ($id: ID!) {
	getCollege(id: $id){
    collegeName
    city
    state
    degrees {
      edges {
        node {
          degreeType
          degreeFocus
          gradYear
        }
      }
    }
  }
}`;

export default GetCollege;