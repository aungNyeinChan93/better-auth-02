import { Prisma } from "@/generated/prisma"

export type UserType = Prisma.UserGetPayload<{
    include: { Post: { include: { author: true } } }
}>

export async function getAllUsers() {
    const users: Array<UserType> | undefined = await prisma?.user.findMany({
        include: {
            Post: {
                include: { author: true }
            },
        },
        orderBy: {
            createdAt: "desc"
        },
        take: 10
    })
    return users
}