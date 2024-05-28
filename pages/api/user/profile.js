import User from "@/models/user";
import auth from "@/utils/auth";

const handler = async(req, res) => {
    if (req.method !== 'POST') {
        res.status(400).json()
        return 
    }
    const { name, email } = req.body

    try {
        await User.findByIdAndUpdate(req.user.id, { name, email })
        res.status(200).json({ success: true })
    } catch (error) {
        res.status(400).json(error)
    }
}

export default auth(handler)