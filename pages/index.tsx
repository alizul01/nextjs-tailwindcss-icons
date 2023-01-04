import Head from 'next/head'
import { Inter } from '@next/font/google'
import React from "react";
import QuestionMarkCircleIcon from "~icons/heroicons/question-mark-circle-solid";


const inter = Inter({ subsets: ['latin'] })

const index: React.FC = () => {
    return (
        <div className={"text-slate-500"}>
            This is index page!
            <QuestionMarkCircleIcon />
        </div>
    )
}

export default index