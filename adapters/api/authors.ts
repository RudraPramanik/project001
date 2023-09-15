import {
  GetWritersDocument,
  GetWritersQuery,
  GetWritersQueryVariables,
  queryClientGraphql,
} from "@adapters";

export const getWriters = (variables?: GetWritersQueryVariables) => {
  return queryClientGraphql<GetWritersQuery, GetWritersQueryVariables>(
    variables,
    GetWritersDocument,
  );
};
