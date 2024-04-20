import bcrypt from "bcrypt";
import { PrismaClient, Role } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
type User = {
  name: string;
  city: string;
  phoneNumber: string;
  dateofBirth:Date;
  fatherName: string;
  email: string;
  password: string;
  emailVerified: boolean;
  role: Role;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as User;
    const {
      fatherName,
      name,
      email,
      password,
      city,
      phoneNumber,
      dateofBirth,
      emailVerified,
      role,
    } = body;

    if (!email || !password) {
      return new NextResponse("Missing information", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const userData: User = {
      name,
      city,
      phoneNumber,
      dateofBirth,
      fatherName,
      email,
      password: hashedPassword,
      emailVerified: emailVerified || false,
      role: role || 'admin',
    };

    const user = await prisma.user.create({
      data: userData,
    });

    return new NextResponse(
      JSON.stringify({ message: "User created successfully", user }),
      {
        status: 201,
      }
    );
  } catch (error: any) {
    console.error(error);
    return new NextResponse("Internal server errors", { status: 500 });
  }
}
