import { gql } from 'apollo-boost';

// $where = {"jobCompany": { "companyName": { "eq": "Time Inc."}}}
const GetCompanyProjects = gql`query ($id: ID!) {
  getCompany(id: $id) {
    display
    companyName
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

export default GetCompanyProjects;