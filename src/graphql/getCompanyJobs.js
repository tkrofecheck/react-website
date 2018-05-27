import { gql } from 'apollo-boost';

// $where = {"jobCompany": { "companyName": { "eq": "Time Inc."}}}
const GetCompanyJobs = gql`query ($id: ID!) {
  getCompany(id: $id) {
    display
    companyName
    city
    state
    jobs {
      edges {
        node {
          jobTitle
          jobRole
        }
      }
    }
  }
}`;

export default GetCompanyJobs;