import { nextCookies } from "better-auth/next-js";
import { createAuthClient } from "better-auth/react"
import { inferAdditionalFields } from 'better-auth/client/plugins'
import { auth } from "@/lib/auth";

const authClient = createAuthClient({
    baseURL: "http://localhost:3000",
    plugins: [
        nextCookies(),
        inferAdditionalFields<typeof auth>()
    ],

})

export const { signIn, signOut, signUp, useSession, getSession } = authClient

export type ClientSession = typeof authClient.$Infer.Session;

export default authClient;