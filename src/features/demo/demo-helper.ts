import prisma from "@/lib/prisma";

// 
export const createDemo = async (name: string) => {
    const demo = await prisma?.demo.create({
        data: {
            name
        }
    })
    console.log(demo?.name);

};

// 

export const getAllDemos = async () => {
    return await prisma?.demo.findMany();
}

