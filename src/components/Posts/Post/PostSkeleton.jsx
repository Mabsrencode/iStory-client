import { Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react'
import React from 'react'

const PostSkeleton = () => {
    return (
        <div className="flex flex-wrap justify-center items-center gap-5 rounded-lg">
            <Card className="card mt-6 w-96 mx-4">
                <CardHeader color="blue-gray" className="relative h-36 mt-4 image-card animate-pulse">

                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="white" className="mb-2">
                        <div className='w-[200px] h-[20px] animate-pulse bg-gray-500 rounded-lg'></div>
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <div className='w-[120px] h-[40px] animate-pulse bg-gray-500 rounded-lg'></div>
                </CardFooter>
            </Card>
            <Card className="card mt-6 w-96 mx-4">
                <CardHeader color="blue-gray" className="relative h-36 mt-4 image-card animate-pulse">

                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="white" className="mb-2">
                        <div className='w-[200px] h-[20px] animate-pulse bg-gray-500 rounded-lg'></div>
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <div className='w-[120px] h-[35px] animate-pulse bg-gray-500 rounded-lg'></div>
                </CardFooter>
            </Card>
            <Card className="card mt-6 w-96 mx-4">
                <CardHeader color="blue-gray" className="relative h-36 mt-4 image-card animate-pulse">

                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="white" className="mb-2">
                        <div className='w-[200px] h-[20px] animate-pulse bg-gray-500 rounded-lg'></div>
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <div className='w-[120px] h-[35px] animate-pulse bg-gray-500 rounded-lg'></div>
                </CardFooter>
            </Card>
            <Card className="card mt-6 w-96 mx-4">
                <CardHeader color="blue-gray" className="relative h-36 mt-4 image-card animate-pulse">

                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="white" className="mb-2">
                        <div className='w-[200px] h-[20px] animate-pulse bg-gray-500 rounded-lg'></div>
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <div className='w-[120px] h-[35px] animate-pulse bg-gray-500 rounded-lg'></div>
                </CardFooter>
            </Card>
            <Card className="card mt-6 w-96 mx-4">
                <CardHeader color="blue-gray" className="relative h-36 mt-4 image-card animate-pulse">

                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="white" className="mb-2">
                        <div className='w-[200px] h-[20px] animate-pulse bg-gray-500 rounded-lg'></div>
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <div className='w-[120px] h-[35px] animate-pulse bg-gray-500 rounded-lg'></div>
                </CardFooter>
            </Card>
            <Card className="card mt-6 w-96 mx-4">
                <CardHeader color="blue-gray" className="relative h-36 mt-4 image-card animate-pulse">

                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="white" className="mb-2">
                        <div className='w-[200px] h-[20px] animate-pulse bg-gray-500 rounded-lg'></div>
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <div className='w-[120px] h-[35px] animate-pulse bg-gray-500 rounded-lg'></div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default PostSkeleton