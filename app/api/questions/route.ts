import { Level } from "@prisma/client";
import prisma from '../../libs/prismadb'
interface quest{
    question: string;
    correctAnswer:string;
    level: Level;
    answers: string[];
    subproductId: string;


}

export async function POST(req:Request) {
    try {
        const body = await req.json() as quest;
        const { question, correctAnswer, level, answers,subproductId } = body;

        const newdata: quest = { question, correctAnswer, level:level || "easy" || "hard" || 'medium', answers ,subproductId}; 

        const createdquestions = await prisma.question.create({ data: newdata });
        return Response.json([createdquestions]);
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}