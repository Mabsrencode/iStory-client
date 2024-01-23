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
    const user = JSON.parse(localStorage.getItem('profile'));
    const [likes, setLikes] = useState(post?.likes);
    const dispatch = useDispatch();
    const isDeleting = useSelector((state) => state.posts.isDeleting.includes(post._id));
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);
    const userId = user?.result.sub || user?.result?._id;
    const hasLikedPost = post.likes.find((like) => like === userId);

    const handleLike = async () => {
        dispatch(likePost(post._id));

        if (hasLikedPost) {
            setLikes(post.likes.filter((id) => id !== userId));
        } else {
            setLikes([...post.likes, userId]);
        }
    };

    const Likes = () => {
        if (likes.length > 0) {
            return likes.find((like) => like === userId)
                ? (
                    <><IconButton disabled={!user?.result}
                        size="sm"
                        color="red"
                        variant="text"
                        className="rounded-full"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </IconButton>&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}`}</>
                ) : (
                    <><IconButton disabled={!user?.result}
                        size="sm"
                        color="red"
                        variant="text"
                        className="rounded-full"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </IconButton>&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
                );
        }

        return <><IconButton disabled={!user?.result}
            size="sm"
            color="red"
            variant="text"
            className="rounded-full"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
        </IconButton>&nbsp;Like</>;
    };
    return (
        <div>
            <Dialog size="xs" open={open} handler={handleOpen} className='dialog-card'>
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
                                {post.name}
                            </Typography>
                            {/* <Typography
                                variant="small"
                                color="gray"
                                className="text-xs font-normal"
                            >
                                {post.email}
                            </Typography> */}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        {(user?.result?.sub === post?.creator || user?.result?._id === post?.creator) && (
                            <IconButton
                                variant="text"
                                size="sm"
                                color={"red"}
                                onClick={() => { dispatch(likePost(post._id)) }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </IconButton>
                        )}
                    </div>
                </DialogHeader>
                <DialogBody>
                    <img
                        alt="nature"
                        className="rounded-lg object-cover object-top"
                        src={post.selectedFile}
                    />
                    <div>
                        <Typography variant="small" color="gray" className="font-normal mt-2">
                            {post.message}
                        </Typography>
                    </div>
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
                    <Button onClick={() => { handleOpen(false) }}>
                        Close
                    </Button>
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
                                {post.name}
                            </Typography>
                            <Typography className='text-gray-900 inline-block bg-gray-200 px-1 rounded-lg opacity-75'>
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
                            <div onClick={handleLike}>
                                <Likes />
                            </div>
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
                    {(user?.result?.sub === post?.creator || user?.result?._id === post?.creator) && (
                        <Button loading={isDeleting} onClick={() => { dispatch(deletePost(post._id)) }} className="mt-6 font-bold flex justify-center items-center" fullWidth>
                            {isDeleting ? "Processing..." : <><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>Delete</>}
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </div>
    )
}

export default Post