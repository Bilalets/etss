import prisma from '../../../../libs/prismadb'


export async function GET(req: Request , { params }: { params: { id: string } }) {
   
      
  
    try {
        const id = params.id;
     
        const subjectname= await prisma.subjectQuestions.findMany({
            where:{
             subjectsId:id
            },
         select:{
            id:true,
          questionName:true,
          correctAwnser:true,
          awnsers:true
         },
         take: 10
          });
          
          return Response.json(subjectname );
    } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        
        }
      }
     
  }