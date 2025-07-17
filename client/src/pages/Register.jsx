import { Input } from '@/components/ui/input'
import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"

const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        fullName: "",
        email: "",
        password: ""
    });

    const changeHandler = (e) => {
        setUser({ ...user, [event.target.name]: e.target.value })
    }
    const registerHandler = async () => {
        try {
            const res = await axios.post('http://localhost:8000/api/v1/user/register', user, { headers: { 'Content-Type': 'application/json' }, withCredentials: true })
            if (res.data.success) {
                toast.success(res.data.message)
                navigate('/login');
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }


    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                    <CardAction>
                        <Link variant="link" to={'/login'} className='txt-gray'>Log In</Link>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">FullName</Label>
                                <Input
                                    type="text" name='fullName' placeholder='Enter FullName' value={user.fullName} onChange={changeHandler} className='mb-2' />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    type="text" name='email' placeholder='Enter Email' value={user.email} onChange={changeHandler} />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <a
                                        href="#"
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                                <Input type="password" name='password' placeholder='Enter Password' value={user.password} onChange={changeHandler} className='mt-2 mb-2' />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full bg-gray-700" onClick={registerHandler}>
                        Register
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Register