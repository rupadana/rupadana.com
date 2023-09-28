import { NextRequest, NextResponse } from 'next/server';

import getLearnSeries from '@/app/learn/data';
import axios from 'axios';
import { LEARN_CONTENTS } from '@/common/constant/learn';
import { ContentProps } from '@/common/types/learn';
import { DEV_TO_URL } from '@/common/constant';

interface Params {
    params: {
        content: string;
    }
}

export const GET = async (req: Request, { params }: Params) => {
    try {
        const serie = LEARN_CONTENTS.find((c: ContentProps) => c.slug == params.content);

        const response = await axios.get(`${DEV_TO_URL}/api/articles?collection_id=${serie?.collection_id}`)
        return NextResponse.json({ status: true, data: response.data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ status: false, error }, { status: 400 });
    }
};
