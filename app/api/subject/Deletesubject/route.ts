import prisma from '../../../libs/prismadb'

interface deletesub{
    name: string;
    id:string;
}

export async function DELETE(
    req: Request,
    
  ) 
  
  {
    try {
      const body = await req.json() as  deletesub;
      
      const { id }:  deletesub = body;
    
      const deletesubjects = await prisma.subProducts.delete({
        where: {
          id:id
        },
      
      });
  
      return Response.json([deletesubjects ]);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }