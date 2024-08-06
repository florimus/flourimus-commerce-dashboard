'use server';

import { cookie } from '@/constants/cookieConstants';
import { client } from '@/lib/client';
import { UserTokenDocument } from '@/lib/graphql/graphql';
import { gql } from '@apollo/client';
import { cookies } from 'next/headers';

export const getTokenWithEmailAndPassword: (
  email: string,
  password: string,
  type: string
) => Promise<any> = async (email, password, type) => {
  const cookieStore = cookies();
  try {
    const { data } = await client.query({
      query: gql`
        ${UserTokenDocument}
      `,
      variables: {
        email,
        password
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
      message: error?.cause?.message || 'INTERNAL_SERVER_ERROR'
    } as any;
  }
};
