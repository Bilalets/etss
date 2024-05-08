import prisma from '../../../libs/prismadb'

interface updatecat{
    name:string;
    id: string;
}

export async function PUT(
    req: Request,
    
  ) 
  
  {
    try {
      const body = await req.json() as  updatecat;
      
      const { name,id }:  updatecat= body;
    
      const updatedcategory = await prisma.category.update({
        where: {
          id
        },
        data: {
          
          name,
        
        },
      });
  
      return Response.json([updatedcategory]);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }