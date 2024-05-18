import prisma from '../../libs/prismadb'
interface recd{
    
    correctawnser: String
    wrongawnser  : String
    subjectname   :String
}

export async function POST(req:Request) {
    try {
        const body = await req.json() as recd;
        const { Percentage,correctawnser,wrongawnser,subjectname } = body;

        const newdata: recd= { Percentage,correctawnser,wrongawnser,subjectname}; 

        const createdrecord= await prisma.testrecord.create({ data: newdata });
        return Response.json([createdrecord]);
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}