import { NextRequest, NextResponse } from 'next/server';

import getLearnSeries from '@/app/learn/data';

export const GET = async (req: NextRequest, res: NextResponse) => {
    try {
        const response = await getLearnSeries()
        
        return NextResponse.json({ status: true, data: response }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ status: false, error }, { status: 400 });
    }
};
