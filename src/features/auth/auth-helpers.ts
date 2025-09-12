import { auth } from "@/lib/auth"
import authClient from "@/lib/auth-cleint";
import { headers } from "next/headers"


export type ServerAuthSession = typeof auth.$Infer.Session | undefined | null;
export type ClientAuthSession = typeof authClient.$Infer.Session

// auth session
export async function getAuthSession() {
    const session: ServerAuthSession = await auth.api.getSession({ headers: await headers() })
    return session
}

