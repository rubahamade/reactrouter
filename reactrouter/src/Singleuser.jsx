import { useParams, Link } from "react-router-dom"

const Singleuser = ({users}) => {
    const params = useParams()
    const id = params.id*1

    const user =users.find((user) => {
        return user.id === id
    })

    if(!user){
        return null
    }



    return (
        <div>
            <h1>{user.name}</h1>
            <Link to='/users'>
                Back to all users
            </Link>
        </div>
    )
}

export default Singleuser