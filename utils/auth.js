import User from "@/models/user";
import jwt from "jsonwebtoken";
import dbConnect from "./dbConnect";

async function check(req, res) {
    await dbConnect()

    const decoded = jwt.verify(req.cookies?.accessToken, process.env.JWT_SECRET)
    if (decoded?.id) {
        const user = await User.findById(decoded.id)
        if(user) return user
    }
    throw new Error("Access Denied")
}

const auth = (handler) => async (req, res) => {
    try {
        req.user = await check(req, res)
        return handler(req, res)
    } catch (error) {
        res.status(401).json(error)
    }
}

export default auth