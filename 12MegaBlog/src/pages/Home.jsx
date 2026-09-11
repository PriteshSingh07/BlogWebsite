import React, {useState, useEffect} from 'react'
import appwriteService from '../appwrite/config'
import {Container, PostCard} from '../components'
import { useSelector } from 'react-redux'
function Home() {

    // const [posts, setPosts] = useState([]) // no need since postsData is already an array[object]
    const authStatus = useSelector(state => state.auth.status)
    const postsData = useSelector((state) => state.posts.posts)

    
    // setPosts(postsData)
    
    // console.log(useSelector(state => {
    //     return (
    //         {authState : state.auth.status, userDATA : state.auth.userData}
    //     )
    // })) 
    

    // fetching posts
    // useEffect(() => {
    //     // appwriteService.getPosts().then((posts)=>{
    //     //     if(posts){
    //     //         setPosts(posts.documents)
    //     //     }
    //     // })
    //     if(postsData){
    //         console.log('entered');
            
    //         setPosts(postsData)
    //     }
    // },[])



    // console.log(posts.length);
    console.log('Home');
    // console.log('AuthStatus: ', authStatus);
    // console.log('Post in home: ',postsData);
    
    
    
    if(postsData){

    if(authStatus !== true){
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1 className='text-2xl font-bold hover:text-gray-500'>
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    if(postsData.length === 0){
        return (
            <>
            <div className='w-full border-2 border-purple-700 rounded-3xl bg-gray-300'>
                <h1 className='uppercase font-bold text-red-400 text-center'>
                    Home
                </h1>   
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





    return (
        <>
        <div className='w-full border-2 border-purple-700 rounded-3xl bg-gray-300'>
                <h1 className='uppercase font-bold text-red-400 text-center'>
                    Home
                </h1>   
        </div>
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {postsData.map((post)=>(
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard
                                $id={post.$id}
                                title={post.title}
                                featuredImage={post.featuredImage}
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
        </>
    )
    }
}

export default Home
