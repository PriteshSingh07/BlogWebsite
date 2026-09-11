import React from 'react'
import { PostForm, Container } from '../components'

function AddPost() {
    return (
        <>
        <div className='w-full border-2 border-purple-700 rounded-3xl bg-gray-300'>
            <h1 className='uppercase font-bold text-red-400 text-center'>
                Add Post    
            </h1>   
        </div>
        <div className='py-8 flex flex-wrap'>
            <Container>
                <PostForm/>
            </Container>
        </div>
        </>
    )
}

export default AddPost
