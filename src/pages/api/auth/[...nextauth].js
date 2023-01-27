import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongo from "../../../database/conn";
import {compare} from 'bcryptjs';
import Users from '../../../model/user'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req){
        connectMongo().catch(err => {error: "Connections failed.."});
        const result = await Users.findOne({email: credentials.email});
        if (!result){
          throw new Error("Couldn't find")
        }
        // compare
        const checkPassword = await compare(credentials.password, result.password);
        if (!checkPassword || result.email !== credentials.email){
          throw new Error("Username or Password does't match!");
        }
        
        return result;
      }
    }),
  ],
  secret: "/+NTlOhGkryakR6a72vMpvOna3w7tajtw0y8xtmvcP0="
}

export default NextAuth(authOptions)