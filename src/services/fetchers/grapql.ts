import {GraphQLClient} from 'graphql-request';
import {GRAPHQL_ENDPOINT, GRAPHQL_TOKEN} from '@env';

export const gqlApiUrl = GRAPHQL_ENDPOINT;

const headers = {
  'Content-Type': 'application/json',
  Authorization: 'Bearer ' + GRAPHQL_TOKEN,
};

export const client = new GraphQLClient(gqlApiUrl, {headers: headers});

export const gplQuery = async (query: string, variables?: {}) => {
  return client.request(query, variables);
};
