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
};


export async function getUserById(id: string | number) {
    const user: UserType | undefined | null = await prisma?.user.findUnique({
        where: { id: id as string },
        include: {
            Post: { include: { author: true } }
        }
    })
    return user;
}