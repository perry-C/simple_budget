'use client';

import WikiSidebar from './wikiSideBar';
const WikiPage = (props) => {
    return (
        <div
            id="wiki-page-container"
            className="grid grid-cols-6 grid-rows-4"
            style={{ minHeight: '90vh' }}
        >
            <div className="flex flex-col flex-grow items-center col-span-1 row-span-4">
                <WikiSidebar></WikiSidebar>
            </div>

            <div
                id="content"
                className="col-span-5 row-span-4 flex flex-col justify-start p-2 space-y-2"
            >
                {/* <h1 className=" text-primary text-5xl">{props.title}</h1> */}
                {props.children}
            </div>
        </div>
    );
};

export default WikiPage;
