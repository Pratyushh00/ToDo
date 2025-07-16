import { Input } from '@/components/ui/input'
import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

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
        <div>
            <Input type="text" name='fullName' placeholder='Enter FullName' value={user.fullName} onChange={changeHandler} className='mb-2' />
            <Input type="text" name='email' placeholder='Enter Email' value={user.email} onChange={changeHandler} />
            <Input type="password" name='password' placeholder='Enter Password' value={user.password} onChange={changeHandler} className='mt-2 mb-2' />
            <button onClick={registerHandler}>Register</button>
        </div>
    )
}

export default Register