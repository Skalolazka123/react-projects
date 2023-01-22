import { useEffect, useState } from 'react'
import Post from './Post'
import loading from '../img/loading.gif'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

function Posts() {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        ;(async function () {
            //IIFE - Immidiatle Invoke Function Expression
            try {
                const res = await fetch(API_URL)
                const posts = await res.json()
                setPosts(posts)
            } catch (error) {
                setError(error.message)
            }
            setIsLoading(false)
        })()
    }, [])

    // useEffect(() => {
    //     fetch(API_URL)
    //         .then((res) => res.json())
    //         .then((posts) => setPosts(posts))
    //         .catch((error) => setError(error.message))
    //         .finally(() => setIsLoading(false))
    // }, [])

    if (error) {
        return <h1>Error: {error}</h1>
    }

    return (
        <>
            <h1>Posts</h1>
            <hr />
            {isLoading ? (
                <div>
                    <img src={loading} alt="loading"></img>
                    <h1>Loading</h1>
                </div>
            ) : (
                posts.map((post) => <Post {...post} key={post.id} />)
            )}
        </>
    )
}
export default Posts
