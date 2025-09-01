import prisma from '@/lib/prisma'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { NextResponse } from 'next/server'

type Params = Promise<{keyword: string}>

export async function GET(request: Request, { params }: { params: Params }) {
    const { getUser } = getKindeServerSession();
    const  {keyword}  = await params;
    const userFromSession = await getUser();
    if (!userFromSession) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    try {

        if (!keyword || keyword.trim() === '') {
            return NextResponse.json({ users: [] })
        }

        const users = await prisma.user.findMany({
            where: {
                userName: {
                    contains: keyword,
                    mode: 'insensitive', // case-insensitive search
                },
            },
            take: 10, // limit to 10 results
            select: {
                id: true,
                userName: true,
            },
        })

        return NextResponse.json({ users })
    } catch (error) {
        console.error('User search error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
