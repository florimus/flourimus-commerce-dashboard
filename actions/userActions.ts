'use server';

import { cookie } from '@/constants/cookieConstants';
import { client } from '@/lib/client';
import { gql } from '@apollo/client';
import { cookies } from 'next/headers';

const createTokenQuery = gql`
  query Token {
    token(
      tokenRequestInput: {
        email: "john.doe@example.com"
        password: "password123"
        grandType: "password"
      }
    ) {
      access
      refresh
    }
  }
`;

export const getTokenWithEmailAndPassword: (
  email: string,
  password: string,
  type: string
) => Promise<any> = async (email, password, type) => {
  const cookieStore = cookies();
  try {
    const { data } = await client.query({
      query: createTokenQuery,
      variables: {
        tokenInput: {
          email,
          password,
          type
        }
      }
    });
    const { token } = data;
    if (token?.access && token?.refresh) {
      cookieStore.set(cookie.accessToken, token?.access);
      cookieStore.set(cookie.refreshToken, token?.refresh);
    }
    return token;
  } catch (error: any) {
    return {
      code: error.graphQLErrors?.[0]?.extensions.code || 'INTERNAL_SERVER_ERROR'
    } as any;
  }
};
