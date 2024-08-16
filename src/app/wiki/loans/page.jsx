'use client';
import { Button } from '@/components/ui/button';
import WikiPage from '../page';

import { Card, CardContent, CardHeader } from '@/components/ui/card';

const LoansPage = () => {
    return (
        <WikiPage title="Loans">
            <Card>
                <CardHeader>
                    <h1 className=" text-primary text-5xl">Loans</h1>
                </CardHeader>
                <CardContent>
                    <div>
                        A loan lets you borrow a specific amount of money, which
                        you repay in installments—typically with interest—over a
                        fixed period. It can be useful for covering significant
                        expenses. The amount you can borrow and the interest
                        rate you receive are usually determined by factors such
                        as your credit score and the repayment duration.
                    </div>
                    <div className="flex flex-col space-y-4 mt-4 mx-4">
                        <Button>
                            Reasons to get a loan and should I request one?
                        </Button>
                        <Button>What are the different types of loans?</Button>
                        <Button>
                            Things to consider before taking out a loan
                        </Button>
                        <Button>How to apply for a loan </Button>
                        <Button> What happens if I can't repay?</Button>
                    </div>
                </CardContent>
            </Card>
        </WikiPage>
    );
};

export default LoansPage;
