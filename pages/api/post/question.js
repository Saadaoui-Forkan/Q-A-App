import auth from "@/utils/auth";
import Post from "@/models/post";

const handler = async (req, res) => {
    if (req.method !== 'POST') {
        res.status(405).json()
        return 
    }

    const user = req.user.id

    const { title, content, tags } = req.body

    const question = await Post.create({
        question: { title },
        content,
        user,
        tags
    })
    res.status(201).json({ data: question })

}

export default auth(handler)