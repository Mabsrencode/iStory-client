import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import "../Header/header.css"
import { Link } from 'react-router-dom';
const NoPostAvail = () => {
    return (
        <section className='my-2'>
            <Card className="w-full max-w-[48rem] flex-row mx-auto">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-2/5 shrink-0 rounded-r-none"
                >
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                        alt="banner"
                        className="h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h6" color="gray" className="mb-4 uppercase">
                        No post was created try to post something.
                    </Typography>
                    <Typography variant="h4" color="blue-gray" className="logo mb-2">
                        <span className='text-primary-accent-color'>i</span>Story
                    </Typography>
                    <Typography color="gray" className="mb-8 font-normal">
                        This website was created to be used for creating your story or post your memories with your loved one's.
                    </Typography>
                    <Link to="/about">
                        <Button variant="text" className="flex items-center gap-2">
                            Learn More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </Button>
                    </Link>
                </CardBody>
            </Card>
        </section>
    )
}

export default NoPostAvail