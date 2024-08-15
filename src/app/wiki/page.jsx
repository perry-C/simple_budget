'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const WikiPage = ({ children }) => {
    const financialConceptList = [
        'loans',
        'mortgages',
        'pensions',
        'savings',
        'investments',
    ];

    return (
        <div
            id="wiki-page-container"
            className="grid grid-cols-5 grid-rows-4"
            style={{ minHeight: '100vh' }}
        >
            <ul className="flex flex-col justify-center items-center col-span-1 row-span-4">
                {financialConceptList.map((val) => (
                    <Button variant="link" className="text-secondary">
                        <Link href={`/wiki/${val}`}>{val}</Link>
                    </Button>
                ))}
            </ul>
            <h1 className="col-span-3 row-span-1 flex justify-center mt-4 text-primary"></h1>
            <div id="content" className="col-span-3 row-soan-3">
                {children}
            </div>
        </div>
    );
};

export default WikiPage;
