import prisma from '../../../libs/prismadb'

interface updatesub{
    name:string;
    id: string;
}

export async function PUT(
    req: Request,
    
  ) 
  
  {
    try {
      const body = await req.json() as  updatesub;
      
      const { name,id }:  updatesub= body;
    
      const updatesubjects = await prisma.subject.update({
        where: {
          id
        },
        data: {
          
          name,
        
          
  
          
          
        },
      });
  
      return Response.json([updatesubjects ]);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }