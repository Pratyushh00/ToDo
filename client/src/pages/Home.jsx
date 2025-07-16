import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import toast from 'react-hot-toast';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Home = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [todos, setTodos] = useState([]);

    const addToDoHandler = async () => {
        try {
            const res = await axios.post('http://localhost:8000/api/v1/todo/', { title, description },
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            if (res.data.success) {
                toast.success(res.data.message);
                setTodos([...todos, res.data.todo]);
                setTitle('');
                setDescription('');
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }

    const fetchTodo = async () => {
        try {
            const res = await axios.get('http://localhost:8000/api/v1/todo/');
            console.log(res)
            if (res.data.success) {
                setTodos(res.data.todos);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchTodo();
    }, []);


    return (
        <div>
            <Navbar />
            <div className='flex items-center gap-5 mt-5'>
                <Input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Add a new ToDo" className='w-1/4' />
                <button onClick={addToDoHandler}>Add ToDo</button>
            </div>
            <Textarea placeholder='Write a desciption' className='w-1/4 mt-2' value={description} onChange={(e) => setDescription(e.target.value)} />

            <div className='grid grid-cols-5 gap-2 mt-5'>
                {
                    todos.map((todo) => (
                        <Card key={todo._id} className='bg-gray-700'>
                            <CardHeader>
                                <CardTitle>{todo.title}</CardTitle>
                                <CardDescription>{todo.description}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))
                }
            </div>

        </div>
    )
}

export default Home