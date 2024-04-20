import prisma from '../../libs/prismadb'
interface SubjectData{
  name:string;
  isAvailable:true

}
export async function POST(req: Request) {
    try {
      const body = await req.json() as SubjectData;
      const { name ,isAvailable } = body;
  
      if (!name) {
        return Response.json({ error: 'Name cannot be null or empty' }, { status: 500 });
      }
  
      
      const existingSubject = await prisma.subProducts.findFirst({
        where: { name }
      });
  
      if (existingSubject) {
        return Response.json({ error: 'Name Already Exits' }, { status: 500 });
      }
     
      const newSubjectData: SubjectData = { name, isAvailable:true};
      const createdSubject = await prisma.subProducts.create({ data: newSubjectData });
  
      return Response.json(createdSubject);
    } catch (error:any) {
      console.error(error.message);
      return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }