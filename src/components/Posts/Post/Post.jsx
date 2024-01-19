import React, { useState } from 'react'
import "./post.css"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    IconButton,
    Dialog,
    DialogHeader,
    Avatar,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import moment from "moment";
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts.action';
const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    const isDeleting = useSelector((state) => state.posts.isDeleting.includes(post._id));
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);
    return (
        <div>
            <Dialog size="xl" open={open} handler={handleOpen}>
                <DialogHeader className="justify-between">
                    <div className="flex items-center gap-3">
                        <Avatar
                            size="sm"
                            variant="circular"
                            alt="null"
                            src=""
                        />
                        <div className="-mt-px flex flex-col">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-medium"
                            >
                                null
                            </Typography>
                            <Typography
                                variant="small"
                                color="gray"
                                className="text-xs font-normal"
                            >
                                null
                            </Typography>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <IconButton
                            variant="text"
                            size="sm"
                            color={"red"}
                            onClick={() => { dispatch(likePost(post._id)) }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                            </svg>
                        </IconButton>
                    </div>
                </DialogHeader>
                <DialogBody>
                    <img
                        alt="nature"
                        className="h-[48rem] md:w-[30%] rounded-lg object-cover object-top"
                        src={post.selectedFile}
                    />
                </DialogBody>
                <DialogFooter className="justify-between">
                    <div className="flex items-center gap-16">
                        <div>
                            <Typography variant="small" color="gray" className="font-normal">
                                Likes
                            </Typography>
                            <Typography color="blue-gray" className="font-medium">
                                {post.likeCount}
                            </Typography>
                        </div>
                        <div>
                        </div>
                    </div>
                    <Typography variant="small" color="gray" className="font-normal">
                        {post.message}
                    </Typography>
                </DialogFooter>
            </Dialog>
            <Card className="w-full max-w-[26rem] shadow-lg card">
                <CardHeader onClick={handleOpen} floated={false} color="blue-gray" className='header-card cursor-pointer'>
                    <img className='max-h-[200px] w-[600px] object-cover'
                        src={post.selectedFile}
                        alt="ui/ux review check"
                    />
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    <div className='!absolute top-4 px-4 w-full flex justify-between'>
                        <div>
                            <Typography>
                                {post.creator}
                            </Typography>
                            <Typography className='text-gray-400'>
                                {moment(post.createdAt).fromNow()}
                            </Typography>
                        </div>
                        <IconButton
                            onClick={() => setCurrentId(post._id)}
                            size="sm"
                            color="white"
                            variant="text"
                            className="rounded-full"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </IconButton>
                    </div>
                </CardHeader>
                <CardBody>
                    <div className="mb-3 flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray" className="font-medium">
                            {post.title}
                        </Typography>
                        <div className='flex items-center justify-between items-center'
                        >
                            <IconButton onClick={() => { dispatch(likePost(post._id)) }}
                                size="sm"
                                color="red"
                                variant="text"
                                className="rounded-full"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </IconButton>{post.likeCount}
                        </div>
                    </div>
                    <Typography color="gray">
                        {post.message}
                    </Typography>
                    <ul className="group mt-8 inline-flex flex-wrap items-center gap-3">
                        {post.tags.map((tag) => <li key={tag} className='bg-gray-200 rounded-lg px-2'>
                            {`#${tag}`}
                        </li>)}
                    </ul>
                </CardBody>
                <CardFooter className="pt-3">
                    <Button loading={isDeleting} onClick={() => { dispatch(deletePost(post._id)) }} className="mt-6 font-bold flex justify-center items-center" fullWidth>
                        {isDeleting ? "Processing..." : <><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>Delete</>}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Post