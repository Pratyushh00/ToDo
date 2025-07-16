import { Input } from '@/components/ui/input';
import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, Navigate, useNavigate } from 'react-router-dom';

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
        <div>
            <Input type="text" name='email' placeholder='Enter Registered Email' value={user.email} onChange={changeHandler} />
            <Input type="password" name='password' placeholder='Enter Password' value={user.password} onChange={changeHandler} />
            <div>
                <button onClick={loginHandler}>LogIn</button>
                <Link to={'/register'}>New Here? Register</Link>
            </div>
        </div>
    )
}

export default Login