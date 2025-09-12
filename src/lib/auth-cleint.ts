import { nextCookies } from "better-auth/next-js";
import { createAuthClient } from "better-auth/react"

const authClient = createAuthClient({
    baseURL: "http://localhost:3000",
    plugins: [nextCookies()],

})

export const { signIn, signOut, signUp, useSession, getSession } = authClient
export default authClient;