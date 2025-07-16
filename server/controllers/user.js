import { User } from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        if (!fullName || !email || !password) {
            return res.status(403).json({
                success: false,
                message: 'All fields are required'
            })
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                success: false,
                message: 'User already exists with same email'
            })
        }
        const hashedpassword = await bcrypt.hash(password, 10)
        await User.create({
            fullName,
            email,
            password: hashedpassword
        });

        return res.status(201).json({
            success: true,
            message: 'Account created successfully'
        });
    } catch (error) {
        console.log(error)
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'User does not exist with the provided email'
            })
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                success: false,
                message: 'Incorrect Email or Password'
            })
        }

        const token = await jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1d' });


        return res.status(200).cookie('token', token, {
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000
        })
            .json({
                success: true,
                message: `Welcome back ${user.fullName}`
            })
    } catch (error) {
        console.log(error)
    }
}

export const logOut = async (_, res) => {
    try {
        return res.status(200).cookie('token', '', { maxAge: 0 }).json({
            success: true,
            message: 'User Logged Out'
        })
    } catch (error) {
        console.log(error)
    }
}