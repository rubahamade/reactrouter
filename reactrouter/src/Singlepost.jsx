import { useParams, Link } from "react-router-dom"

const Singlepost = ({posts}) => {
    const params = useParams()
    const id = params.id*1

    const post =posts.find((post) => {
        return post.id === id
    })

    if(!post){
        return null
    }



    return (
        <div>
            <h1>{post.title}</h1>
            <Link to='/posts'>
                Back to all posts
            </Link>
        </div>
    )
}

export default Singlepost