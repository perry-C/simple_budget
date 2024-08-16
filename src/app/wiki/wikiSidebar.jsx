import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
    CommandSeparator,
} from '@/components/ui/command';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
const financialConceptList = [
    'loans',
    'mortgages',
    'pensions',
    'savings',
    'investments',
];
const WikiSidebar = () => {
    return (
        <Command>
            <CommandList>
                <CommandGroup heading="Terminologies">
                    {financialConceptList.map((val) => (
                        <CommandItem>
                            <Button variant="link">
                                <Link href={`/wiki/${val}`}>{val}</Link>
                            </Button>
                        </CommandItem>
                    ))}
                </CommandGroup>
                <CommandSeparator />
            </CommandList>
        </Command>
    );
};

export default WikiSidebar;
