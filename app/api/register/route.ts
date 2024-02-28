import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      email,
      password,
      emailVerified,
      role,
    }: {
      email: string;
      password: string;
      emailVerified?: boolean;
      role: string;
    } = body;

    if (!email || !password) {
      return new NextResponse('Missing information', { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        emailVerified: emailVerified || false,
        role: role || 'Applicant',
      },
    });

    return new NextResponse(
      JSON.stringify({ message: 'User created successfully', user }),
      {
        status: 201,
      }
    );
  } catch (error: any) {
    console.error(error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}
