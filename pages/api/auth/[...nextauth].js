import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";
import {MongoDBAdapter} from '@next-auth/mongodb-adapter'
import clientPromise from './mongodb'
export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    // OAuth authentication providers...
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
  ],
  pages: {
    signIn: '/singin',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.JWT_SECRET,
})