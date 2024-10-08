import React from 'react'
import { prismadb } from '@/lib/prismaDB';

import { CategoryForm } from './components/category-form';

const DynamicBillBoardPage = async ({
    params
}: {
    params: {
        storeId: string;
        categoryId: string;
    }
}) => {
    
    
    const category = await prismadb.category.findFirst({
        where: {
            id: params.categoryId
        }
    });

    const billboards = await prismadb.billboard.findMany({
        where:{
            storeId: params.storeId,
        },
        orderBy: {
            createdAt: 'desc'
        }
    })


    return (
        <div className='flex-col'>
            <div className='flex-1 space-y-4 p-8'>
                <CategoryForm initialData={category} billboards={billboards}/>
            </div>
        </div>
    )
}

export default DynamicBillBoardPage
