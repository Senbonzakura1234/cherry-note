import { authOptions } from '@root/server/auth';
import NextAuth from 'next-auth';

export default NextAuth(authOptions);
