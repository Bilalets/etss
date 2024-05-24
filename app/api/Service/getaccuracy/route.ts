import prisma from "../../../libs/prismadb";

interface subid {
 userId: string;
 createdAt: string ;
}

export async function POST(req: Request) {
  const body = await req.json() as subid;
  const { userId,createdAt} = body;

  try {
    
    const date = new Date(createdAt);
    const startOfDay = new Date(date.setUTCHours(0, 0, 0, 0));
    const endOfDay = new Date(date.setUTCHours(23, 59, 59, 999));
    const subjectrecord = await prisma.saverecord.findMany({
      where: {
        userId:  userId,
        createdAt: {
            gte: startOfDay,
            lt: endOfDay
          },
      },
      select: {
        Percentage:true,
        Correctawn:true,
        Wrongawn:true,
        subjectname:true,
        createdAt:true
      },
      
    });

    return Response.json(subjectrecord);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}
