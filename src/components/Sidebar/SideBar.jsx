import React, { useState } from 'react'
import {
    Card,
    Input,
    Button,
    Typography,
    Textarea
} from "@material-tailwind/react";
import FileBase from "react-file-base64"
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts.action';
const SideBar = () => {
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: '',
    })

    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createPost(postData))
        console.log(postData)
    }

    const handleClear = () => {
        console.log("Clearing form");
        setPostData({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: '',
        });
    }
    return (
        <div>
            <button
                data-drawer-target="default-sidebar"
                data-drawer-toggle="default-sidebar"
                aria-controls="default-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                POST
            </button>

            <aside
                id="default-sidebar"
                className="fixed bg-secondary-color z-10 top-0 left-0 z-40 w-64 sm:w-[500px] h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4">
                    <Card className='mt-[20%] py-4' shadow={false}>
                        <Typography className='text-center' variant="h4" color="blue-gray">
                            Create a Memory
                        </Typography>
                        <Typography color="gray" className="mt-1 text-center font-normal">
                            Nice to meet you! Enter your details to register.
                        </Typography>
                        <form autoComplete='off' className="mt-8 mx-auto mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
                            <div className="mb-1 flex flex-col gap-6">
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Creator
                                </Typography>
                                <Input name='creator' onChange={(e) => setPostData({ ...postData, creator: e.target.value })} label='Creator Name'
                                    size="lg"
                                />
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
                                <Input name='tags' onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
                                    size="lg"
                                    label='Tags (coma separated)'
                                />
                                <FileBase multiple={false} name='selectedFile' type="file" onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                            </div>
                            <div className='flex justify-center items-center'>
                                <Button type='submit' className="mt-6" fullWidth>
                                    submit
                                </Button>
                                <button type='button' onClick={() => handleClear()} className='bg-blue-500 h-0 ml-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </Card>
                </div>
            </aside>
        </div>
    )
}

export default SideBar