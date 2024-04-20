import prisma from '../../../libs/prismadb'
interface allsub{
    name:string
}

export async function GET(req: Request) {
    try {
        const allsubject= await prisma.subProducts.findMany({
            select: { name: true, id:true }
          });
          
          return Response.json(allsubject );
    } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
     
  }