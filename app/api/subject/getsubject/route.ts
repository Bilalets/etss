import prisma from '../../../libs/prismadb';

export async function GET(req: Request) {
    try {
        const subjectsWithQuestions = await prisma.question.findMany({
            include: {
                subject: true
            }
        });

        return Response.json(subjectsWithQuestions);
    } catch (error) {
        console.error(error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}