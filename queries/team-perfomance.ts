import { gql } from "@apollo/client";

export const TEAM_PERFORMANCE_QUERY = gql`
  query GetTeamPerformance($id: Int!) {
    teamPerformance(id: $id) {
      date
      goals
      assists
    }
  }
`;