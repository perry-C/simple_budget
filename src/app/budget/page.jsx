'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useState } from 'react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

const BudgetCalculatorPage = () => {
    const [submitted, setSubmitted] = useState(false);
    return (
        <div
            id="budget-page-container"
            className="flex justify-center items-center"
            style={{ minHeight: '80vh' }}
        >
            <div id="user-input-form">
                <Card>
                    <CardHeader>
                        <CardTitle>Budget Calculator</CardTitle>
                        <CardDescription>
                            Input your spending situation to get advise on
                            budget
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col">
                        <form>
                            <Input id="income" placeholder="Monthly income" />
                            <br />
                            <Input
                                id="scheduled-spending"
                                placeholder="Scheduled spending"
                            />
                            <br />
                            <Input id="debt" placeholder="Debt" />
                            <br />
                        </form>
                        <Button>
                            <Link href="/budget/result"> Submit</Link>
                        </Button>
                    </CardContent>
                    <CardFooter>
                        <p className="text-secondary ml-auto">
                            © 2024 ... Inc.
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default BudgetCalculatorPage;
