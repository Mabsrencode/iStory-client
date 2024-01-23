import React, { useState, useEffect, useCallback } from 'react'
import {
    Card,
    Input,
    Button,
    Typography,
    Textarea
} from "@material-tailwind/react";
import FileBase from "react-file-base64"
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts.action';
const SideBar = ({ currentId, setCurrentId }) => {
    const isSubmitting = useSelector((state) => state.posts.isSubmitting);
    const [postData, setPostData] = useState({
        title: '', message: '', tags: '', selectedFile: '',
    });
    const post = useSelector((state) =>
        currentId ? state.posts.posts.find((p) => p._id === currentId) : null
    );
    const [sideBarOpenClose, setSideBarOpenClose] = useState(true)
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const clear = () => {
        setCurrentId(null);
        setPostData((prevData) => ({
            ...prevData,
            title: '',
            message: '',
            tags: '',
            selectedFile: '',
        }));
    };
    useEffect(() => {
        if (post) setPostData(post);
    }, [post])
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (currentId) {
                dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
            } else {
                dispatch(createPost(currentId, { ...postData, name: user?.result?.name }));
            }
        } catch (error) {
            console.log(error);
        }
        clear();
    };


    const handleOpenClose = useCallback(() => {
        setSideBarOpenClose(prevState => !prevState);
    }, []);

    useEffect(() => {
        handleOpenClose();
    }, [handleOpenClose]);
    return (
        <div>
            <Button onClick={handleOpenClose} className={`my-6 ${!user?.result?.name ? "hidden" : 'block'} mx-auto 2xl:hidden`} type="button">
                Post Something now
            </Button>

            {!user?.result?.name ? <aside className="fixed bg-secondary-color  z-10 top-0 w-full overflow-auto left-0 z-40 lg:max-w-[500px] xl:max-w-[500px] h-screen transition-transform  xl:translate-x-0 ">
                <div className='bg-white max-w-[400px] text-center mx-[2%] sm:mx-auto mt-[50%] p-4 rounded-lg'>
                    <Typography variant='h2' >
                        Sign In now
                    </Typography>
                    <Typography>
                        Post Memories with your friends or love one's.</Typography>
                </div></aside> : <aside
                    id="drawer-navigation"
                    className={`fixed bg-secondary-color ${!sideBarOpenClose ? "translate-x-0" : "-translate-x-full"} z-10 top-0 w-full overflow-auto left-0 z-40 lg:max-w-[500px] xl:max-w-[500px] h-screen transition-transform  xl:translate-x-0`}
                >

                <div className="h-full px-3 py-4">
                    <Card className='mt-[20%] py-4' shadow={false}>
                        <button onClick={handleOpenClose} type="button" className={`2xl:hidden text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white`} >
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                        <Typography className='text-center' variant="h4" color="blue-gray">
                            {currentId ? "Editing" : "Create a Memory"}
                        </Typography>
                        <Typography color="gray" className="mt-1  text-center font-normal">
                            Nice to meet you! <br /> Enter your memories details.
                        </Typography>
                        <form autoComplete='off' className="mt-8 mx-auto mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
                            <div className="mb-1 flex flex-col gap-6">
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Title
                                </Typography>
                                <Input name='title' onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                                    size="lg"
                                    label='Title'
                                />
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Message
                                </Typography>
                                <Textarea name='message' onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                                    label='Message'
                                />
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Tags
                                </Typography>
                                <Input name='tags' onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
                                    size="lg"
                                    label='Tags (coma separated)'
                                />
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Image
                                </Typography>
                                <FileBase multiple={false} name='selectedFile' type="file" onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                            </div>
                            <div className='flex justify-center items-center'>
                                <Button disabled={!user?.result?.name ? true : false} loading={isSubmitting} type='submit' className="mt-6 font-bold flex justify-center items-center" fullWidth>
                                    {isSubmitting ? "Processing..." : "Submit"}
                                </Button>
                                <button type='button' onClick={clear} className='bg-blue-500 h-0 ml-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </Card>
                </div>
            </aside>
            }
        </div >
    )
}

export default SideBar