import React, { useState, useEffect } from 'react'
import "./header.css"
import { Link } from 'react-router-dom';
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    Avatar,
    Dialog,
    Card,
    CardBody,
    CardFooter,
    Input,
    Checkbox,
} from "@material-tailwind/react";
import { GoogleLogin } from '@react-oauth/google';
const Header = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);
    const [openNav, setOpenNav] = useState(false);
    const [seePassword, setSeePassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const token = user?.token;
        setUser(JSON.parse(localStorage.getItem('profile')))
        console.log(token)
    }, [user?.token])
    const handleSignUp = () => {
        setIsSignUp((prevShowPasswords) => !prevShowPasswords);
    }
    const handleSeePassword = () => {
        setSeePassword((prevShowPasswords) => !prevShowPasswords);
    }
    const handleSignUpButton = () => {
        setIsSignUp(true);
    };
    const handleSignInButton = () => {
        setIsSignUp(false);
    };
    const handleLogOut = () => {
        dispatch({ type: 'LOGOUT' })
        navigate("/");
        setUser(null);
    }
    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);
    const handleChange = () => {

    }
    const handleSubmit = () => {

    }
    const googleSuccess = async (res) => {
        const result = jwtDecode(res?.credential);
        const token = jwtDecode(res.credential).sub;
        try {
            dispatch({ type: 'AUTH', data: { result, token } })
            navigate.push('/')
        } catch (error) {
            console.log(error)
        }
    }
    const googleError = () => {
        console.log('Login Failed');
    }
    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="/">
                    Home
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="/about">
                    About
                </Link>
            </Typography>
        </ul>
    );
    return (

        <> <Dialog
            size="xs"
            open={open}
            handler={handleOpen}
            className="bg-transparent shadow-none"
        >
            <form onSubmit={handleSubmit}>
                <Card className="mx-auto w-full max-w-[24rem]">
                    <CardBody className="flex flex-col gap-3">
                        <Typography variant="h4" color="blue-gray">
                            {isSignUp ? "Sign Up" : "Sign In"}
                        </Typography>
                        {isSignUp ? <></> : <Typography
                            className="mb-3 font-normal"
                            variant="paragraph"
                            color="gray"
                        >
                            Enter your email and password to Sign In.
                        </Typography>}
                        {isSignUp && (<>
                            <Typography className="-mb-2" variant="h6">
                                Your First Name
                            </Typography>
                            <Input label="First Name" size="lg" onChange={handleChange} />
                            <Typography className="-mb-2" variant="h6">
                                Your Last Name
                            </Typography>
                            <Input label="Last Name" size="lg" onChange={handleChange} />
                        </>)}
                        <Typography className="-mb-2" variant="h6">
                            Your Email
                        </Typography>
                        <Input label="Email" size="lg" onChange={handleChange} />
                        <Typography className="-mb-2" variant="h6">
                            Your Password
                        </Typography>
                        <Input label='Password' type={seePassword ? "text" : "password"} icon={seePassword ? <FaRegEye onClick={handleSeePassword} className='cursor-pointer' /> : <FaRegEyeSlash onClick={handleSeePassword} className='cursor-pointer' />} id="password" onChange={handleChange} className="registration_input pl-6" maxLength={24} />
                        {isSignUp && (<Input type={seePassword ? "text" : "password"} label='Confirm Password' />)}
                        {isSignUp ? <></> : <div className="-ml-2.5 -mt-4">
                            <Checkbox label="Remember Me" />
                        </div>}
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button variant="gradient" fullWidth>
                            {isSignUp ? "Sign Up" : "Sign In"}
                        </Button>
                        <Typography variant="small" className="mt-4 flex justify-center">
                            {isSignUp ? "Already have an account?" : " Don't have an account?"}
                            <Typography
                                onClick={handleSignUp}
                                variant="small"
                                color="blue-gray"
                                className="ml-1 font-bold cursor-pointer"

                            >
                                {isSignUp ? "Sign In" : "Sign Up"}
                            </Typography>
                        </Typography>
                        <section className='flex justify-center mt-2'>
                            <GoogleLogin
                                onSuccess={googleSuccess}
                                onError={googleError}
                            />
                        </section>
                    </CardFooter>

                </Card>
            </form>
        </Dialog>
            {/* split */}
            <Navbar className="sticky navbar top-0 h-max max-w-full rounded-lg px-4 py-2 lg:px-8 lg:py-4">
                <div className="flex mx-6 items-center justify-between text-blue-gray-900">
                    <Typography
                        className="mr-4 logo text-3xl cursor-pointer py-1.5 font-medium"
                    >
                        <Link to="/">
                            <span className='text-primary-accent-color'>i</span>Story</Link>
                    </Typography>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <div className="flex items-center gap-x-1">
                            {user ? (<><div className="flex items-center gap-3">
                                <Avatar
                                    size="sm"
                                    variant="circular"
                                    alt="tania andrew"
                                    src={user.result.picture}
                                />
                                <div className="-mt-px flex flex-col">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-medium"
                                    >
                                        {user.result.name}
                                    </Typography>
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="text-xs font-normal"
                                    >
                                        {user.result.email}
                                    </Typography>
                                </div>
                                <div>
                                    <Button onClick={handleLogOut}>Log Out</Button>
                                </div>
                            </div></>) : (<>
                                <Button onClick={() => { handleOpen(); handleSignInButton(); }}
                                    variant="text"
                                    size="sm"
                                    className="hidden lg:inline-block"
                                >
                                    <span>Sign In</span>
                                </Button>
                                <Button onClick={() => { handleOpen(); handleSignUpButton(); }}
                                    variant="gradient"
                                    size="sm"
                                    className="hidden lg:inline-block"
                                >
                                    <span>Sign up</span>
                                </Button>
                            </>)}
                        </div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav}>
                    {navList}
                    {user ? (<><div className="flex items-center gap-3">
                        <Avatar
                            size="sm"
                            variant="circular"
                            alt="tania andrew"
                            src={user.result.picture}
                        />
                        <div className="-mt-px flex flex-col">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-medium"
                            >
                                {user.result.name}
                            </Typography>
                            <Typography
                                variant="small"
                                color="gray"
                                className="text-xs font-normal"
                            >
                                {user.result.email}
                            </Typography>
                        </div>
                    </div></>) : (<><div className="flex items-center gap-x-1">
                        <Button onClick={() => { handleOpen(); handleSignInButton(); }} fullWidth variant="text" size="sm" className="">
                            <span>Sign in</span>
                        </Button>
                        <Button onClick={() => { handleOpen(); handleSignUpButton(); }} fullWidth variant="gradient" size="sm" className="">
                            <span>Sign up</span>
                        </Button>
                    </div></>)}
                </Collapse >
            </Navbar>
        </>
    )
}

export default Header
