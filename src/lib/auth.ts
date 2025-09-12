import prisma from '@/lib/prisma'
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    emailAndPassword: {
        enabled: true,
        autoSignIn: true
    },
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        },
    },
    plugins: [nextCookies()],
    session: {},
    rateLimit: {
        enabled: true,
        window: 60,
        max: 100
    },
    user: {
        additionalFields: {
            role: {
                type: "string",
                defaultValue: 'user',
                input: false
            }
        }
    }
});

export type ServerAuthSession = typeof auth.$Infer.Session;
export type AuthUser = typeof auth.$Infer.Session.user;

