import auth from "@/utils/auth";
import Post from "@/models/post";

const handler = async (req, res) => {
    if (req.method !== 'POST') {
        res.status(405).json()
        return 
    }

    const user = req.user.id

    const { content, question } = req.body

    await Post.create({
        parent: question,
        content,
        user,
        tags
    })

    await Post.findByIdAndUpdate(question, {
        $inc: {
            'question.answerCount': 1
        }
    })

    res.status(201).json({ answer: true })
}

export default auth(handler)