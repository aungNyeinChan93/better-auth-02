'use server'

export async function createPostAction(initialState: any, formData: FormData) {
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const id = formData.get('id') as string | number;
    const image = formData.get('image') as File;

    if (!title) {
        return { success: false, error: 'title filed are required' }
    };

    const post = await prisma?.post.create({
        data: { title, author_id: id as string, content }
    })

    if (!post) {
        return { success: false, error: 'post create fail' }
    }

    return { success: true, message: 'post create success!' }
}