import { Input } from '@/components/ui/input';
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

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const changeHandler = (e) => {
        setUser({ ...user, [event.target.name]: e.target.value })
    }

    const loginHandler = async () => {
        try {
            const res = await axios.post('http://localhost:8000/api/v1/user/login', user, { headers: { 'Content-Type': 'application/json' }, withCredentials: true });
            res.success && console.log(res.data.message);
            if (res.data.success) {
                toast.success(res.data.message)
                navigate('/')
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
                        <Link variant="link" to={'/register'} className='txt-gray'>Sign Up</Link>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    type="text" name='email' placeholder='Enter Registered Email' value={user.email} onChange={changeHandler} required />
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
                                <Input type="password" name='password' placeholder='Enter Password' value={user.password} onChange={changeHandler} required />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full bg-gray-700" onClick={loginHandler}>
                        Login
                    </Button>
                    <Button variant="outline" className="w-full">
                        Login with Google
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Login