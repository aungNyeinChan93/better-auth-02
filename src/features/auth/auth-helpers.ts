import { auth } from "@/lib/auth"
import authClient from "@/lib/auth-cleint";
import { headers } from "next/headers"
import { cache } from "react";


export type ServerAuthSession = typeof auth.$Infer.Session | undefined | null;
export type ClientAuthSession = typeof authClient.$Infer.Session

// get auth session
export const getAuthSession = cache(async () => {
    const session: ServerAuthSession = await auth.api.getSession({ headers: await headers() })
    return session
})

// get auth user
async function authUser() {
    const session = await auth.api.getSession({ headers: await headers() });

    if (!session) return undefined;

    const authUser = session && (await prisma?.user.findUnique({
        where: {
            id: session?.user?.id as string
        }
    }))

    return authUser;
}
export const getAuthUser = cache(authUser)