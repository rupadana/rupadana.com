import { NextRequest, NextResponse } from 'next/server';

import getLearnSeries from '@/app/learn/data';
import axios from 'axios';

interface Params {
    params : {
        content: string;
    }
}

export const GET = async (req: Request, { params }: Params) => {
    try {
        const ENDPOINT = `${process.env.CMS_API_URL}/learn-series/${params.content}/contents`;
        
        const response = await axios.get(ENDPOINT)
        return NextResponse.json({ status: true, data: response.data.data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ status: false, error }, { status: 400 });
    }
};
