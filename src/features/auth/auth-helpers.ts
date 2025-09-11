import { auth } from "@/lib/auth"
import { headers } from "next/headers"


// auth session
export async function getAuthSession() {
    const session = await auth.api.getSession({ headers: await headers() })
    return session
}