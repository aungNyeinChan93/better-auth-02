import { Prisma } from "@/generated/prisma";

export type PostType = Prisma.PostGetPayload<{
    include: {
        author: { include: { accounts: true } }
    }
}>;

export async function getAllPosts(limit?: number | string) {
    const posts: PostType[] | undefined = await prisma?.post.findMany({
        include: {
            author: {
                include: { accounts: true }
            }
        },
        orderBy: {
            created_at: 'desc'
        },
        take: limit ? Number(limit) : 10
    })
    return posts;
}
