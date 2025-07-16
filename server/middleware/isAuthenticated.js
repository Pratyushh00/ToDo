import jwt from 'jsonwebtoken';

const isAuthentcated = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'user not Authenticated'
            })
        }
        const decode = await jwt.verify(token, process.env.SECRET_KEY);

        if (!decode) {
            return res.status(401).json({
                success: false,
                message: 'invalid Token'
            })
        }

        req.id = decode.userId;
        next();
    } catch (error) {
        console.log(error)
    }
}

export default isAuthentcated;