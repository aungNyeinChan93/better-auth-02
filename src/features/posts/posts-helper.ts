


export async function getAllPosts() {
    const posts = await prisma?.post.findMany({
        include: {
            author: {
                include: { accounts: true }
            }
        }
    })
    return posts
}