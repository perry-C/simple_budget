'use client';
import { Button } from '@/components/ui/button';
const LoansPage = () => {
    return (
        <div>
            <div>
                A loan lets you borrow a specific amount of money, which you
                repay in installments—typically with interest—over a fixed
                period. It can be useful for covering significant expenses. The
                amount you can borrow and the interest rate you receive are
                usually determined by factors such as your credit score and the
                repayment duration.
            </div>
            <div className="flex flex-col space-y-2 items-center">
                <Button>Reasons to get a loan and should I request one?</Button>
                <Button>What are the different types of loans?</Button>
                <Button>Things to consider before taking out a loan</Button>
                <Button>How to apply for a loan </Button>
                <Button> What happens if I can't repay?</Button>
            </div>
        </div>
    );
};

export default LoansPage;
