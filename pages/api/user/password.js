import auth from "@/utils/auth";

const handler = async(req, res) => {
    if (req.method !== 'POST') {
        res.status(400).json()
        return 
    }
    const { password, newPassword } = req.body
    if (req.user.comparePassword(password)) {
        req.user.password = newPassword
        await req.user.save()
        return res.status(200).json({ success: true })
    }
    res.status(400).json({ error: true })
}

export default auth(handler)