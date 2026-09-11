import React, {useState, useEffect} from 'react'
import appwriteSevice from '../appwrite/config'
import {Container, PostCard} from '../components'
import { useSelector } from 'react-redux';
// import appwriteService from '../appwrite/config'

function AllPosts() {

    // const [posts, setPosts] = useState([])
    const posts = useSelector(state => state.posts.posts)
    
    // useEffect(()=> {      
    //     //  we are overwriting the query as passing it as an empty object so when the key 'status' === active then only it will fetch the post data   
    //     appwriteSevice.getPosts([])
    // .then((posts) => {
    //     if(posts){
    //         setPosts(posts.documents)
    //     }
    // })
    // }, [])



    console.log('AllPosts');
    // console.log('Post in all posts: ',posts);

    // console.log('posts-total',posts.length);
    // featuredImage test    
    // appwriteService.getPosts().then((post)=>{
    //     console.log(post.documents);
    // }); 
    
    
    
    
    return (posts.length !== 0) ?  (
        <>
        <div className='w-full border-2 border-purple-700 rounded-3xl bg-gray-300'>
            <h1 className='uppercase font-bold text-red-400 text-center'>All Posts</h1>   
        </div>
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap py-8'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>                        
                        <PostCard
                            $id={post.$id} 
                            featuredImage={post.featuredImage}
                            title={post.title}
                        />
                    </div>
                ))}
                </div>
            </Container>
        </div>
        </>
    ) : (
        <>
        <div className='w-full border-2 border-purple-700 rounded-3xl bg-gray-300'>
            <h1 className='uppercase font-bold text-red-400 text-center'>All Posts</h1>   
        </div>
        <div className='w-full py-8 mt-4 text-center'>
            <Container>
                <div className='flex flex-wrap'>
                    <div className='p-2 w-full'>
                        <h1 className='text-2xl text-blue-300 font-bold hover:text-gray-500'>
                            No Posts Yet
                        </h1>
                    </div>
                </div>
            </Container>
        </div>
        </>
    )
}


export default AllPosts
