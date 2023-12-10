import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useLocation, Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './Homepage.jsx'
import Users from './Users.jsx'
import Posts from './Posts.jsx'
import Singleuser from './Singleuser.jsx'
import Singlepost from './Singlepost.jsx'




function App() {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])

  const location = useLocation()
  const {pathname} = location //const pathname = location.pathname


  

 

 

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await axios.get ("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users")
      setUsers(data.data)
    }
    fetchUsers()
  }, [])

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await axios.get ("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/posts")
      setPosts(data.data)
    }
    fetchPosts()
  }, [])


  return (
    <div>
      <nav>
        <Link to='/' className={pathname === "/" ? "selected" : ""}>Home</Link>
        <Link to='users' className={pathname === "/users" ? "selected" : ""}>Users - {users.length} </Link>
        <Link to='posts' className={pathname === "/posts" ? "selected" : ""}>Posts - {posts.length}</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/users' element={<Users users={users} />} />
        <Route path='/users/:id' element={<Singleuser users={users}  />} />
        <Route path='/posts' element={<Posts posts={posts} />} />
        <Route path='/posts/:id' element={<Singlepost posts={posts}  />} />
      </Routes>

 

    </div>
  )
}

export default App
