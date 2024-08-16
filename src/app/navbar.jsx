'use client';
import Logo from '@/assets/Logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="flex flex-row justify-between items-center w-full h-[70px] text-xl text-white bg-primary">
            <div className="flex flex-row gap-2 items-center">
                <Image src={Logo} width={50} height={50} />
                <div className="font-bold">
                    <Link href="/">Simple Budget</Link>
                </div>
            </div>
            <div className="flex gap-2 mr-5 text-md">
                <div className="mr-2">
                    <Link href="/budget">Budget Calculator</Link>
                </div>

                <div className="mr-2">Loans</div>
                <div>Debt</div>
                <div className="ml-5">Search</div>
                <div className="w-[200px] bg-white"></div>
            </div>
        </div>
    );
}
