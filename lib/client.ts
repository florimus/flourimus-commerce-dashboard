import { cookie } from '@/constants/cookieConstants';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { cookies } from 'next/headers';
import { setContext } from '@apollo/client/link/context';

const serviceUrl = process.env.API_URL;

const httpLink = createHttpLink({
  uri: serviceUrl
});

const authLink = setContext((_, { headers }) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get(cookie.accessToken);
  return {
    headers: {
      ...headers,
      authorization: accessToken?.value ? `Bearer ${accessToken?.value}` : '',
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    }
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache' // Disable caching for watch queries
    },
    query: {
      fetchPolicy: 'no-cache' // Disable caching for regular queries
    },
    mutate: {
      fetchPolicy: 'no-cache' // Disable caching for mutations
    }
  }
});
