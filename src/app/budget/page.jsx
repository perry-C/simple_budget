'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from 'react';
const BudgetCalculatorPage = () => {
    const [submitted, setSubmitted] = useState(false)
    return (
        <div id='budget-page-container' className='flex justify-center items-center' style={{minHeight: '100vh'}}>
            <div id='user-input-form' className='flex flex-col space-y-2'> 
            <h1 className=''>Budget Calculator</h1>
            <form>
                <Input id='Income' placeholder='Monthly income'/>
                <br/>
                <Input id='scheduled-spending' placeholder='Scheduled spending'/>
                <br/>
                
            </form>
            <Button>Submit</Button>
            </div>
        </div>
        
    )
}

export default BudgetCalculatorPage
