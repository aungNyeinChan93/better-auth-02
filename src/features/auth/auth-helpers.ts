import { auth } from "@/lib/auth"
import { headers } from "next/headers"


export type AuthSession = typeof auth.$Infer.Session | undefined;

// auth session
export async function getAuthSession() {
    const session = await auth.api.getSession({ headers: await headers() })
    return session
}