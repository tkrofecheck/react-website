import { gql } from 'apollo-boost';

// $where = {"jobCompany": { "companyName": { "eq": "Time Inc."}}}
const GetCompany = gql`query ($id: ID!) {
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
    projects {
      aggregations {
        max {
          projectName
        }
      }
      edges {
        node {
          images {
            edges {
              node {
                blobUrl
                blobMimeType
              }
            }
          }
        }
      }
    }
  }
}`;

export default GetCompany;