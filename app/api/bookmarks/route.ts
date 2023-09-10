import domain from '@/common/libs/domain';
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, res: NextResponse) => {

    try {
        const ENDPOINT = process.env.CMS_API_URL + '/bookmarks/all' || '' as string;
        const response = await axios.get(ENDPOINT);
        return NextResponse.json({ status: true, data: response.data.data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ status: false, error }, { status: 400 });
    }
};
