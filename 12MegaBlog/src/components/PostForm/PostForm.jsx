import React, {useCallback} from 'react'
import {useForm} from 'react-hook-form'
import {Button, Input, Select, RTE} from '../index'
import appwriteservice from '../../appwrite/config'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'


function PostForm({post}) {

    // console.log(post);
    
    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues: {
            title: post?.title || '',
            content: post?.content || '',
            slug: post?.slug || '',
            status: post?.status || 'active',
        }
    })

    const navigate = useNavigate()
    const userData = useSelector(state => state.auth.userData)

    // console.log('UserDATA: ',userData);
    // console.log(userData.userData.$id);
    
    
    // console.log("POST::", post);


    const submit = async (data) => {
        
        
        if(post){
            const file = data.image[0] ? await appwriteservice.uploadFile(data.image[0]) : null

            console.log('file',file);
            
            
            if(file){
                const res = appwriteservice.deleteFile(post.featuredImage)
                console.log('Update Res: ', res);
                
            }
            
            const dbPost = await appwriteservice.updatePost(post.$id, {
                ...data,
                featuredImage: file ?  file.$id : undefined
            })
            if(dbPost){
                navigate(`/post/${dbPost.$id}`)
            }
        } else{
            // to check can we do data.image[0] ? await appwriteservice.uploadFile(data.image[0]) : null <- {over here ?}
            const file = await appwriteservice.uploadFile(data.image[0])

            console.log('File uploaded: ', file);
            console.log('userData::', userData);
            console.log('data: ',data);
            
            
            if(file){
                const fileId = file.$id
                data.featuredImage = fileId
                // console.log(data);
                // console.log('user id:',userData.userData.$id);
                const dbPost = await appwriteservice.createPost({
                    ...data,
                    userId : userData.userData.$id,
                })
                
                // console.log('Db post: ', dbPost)
                
                
                
                if(dbPost){
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }
    }

    const slugTransform = useCallback((value) => {
        // console.log(typeof value);
        if(value && typeof value === 'string'){
            return value
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z\d\s]+/g, '')
            .replace(/\s/g, '-')
        }
            // const slug = value.toLowerCase().replace(/ /g, '-')
            // setValue('slug', slug)
            // return slug

        return ''
    }, [])

    React.useEffect(()=> {
        const subscription = watch((value, {name})=>{
            if(name === 'title'){
                setValue('slug', slugTransform(value.title,{
                    shouldValidate:true,
                }))
            }
        })

        return () => {
            subscription.unsubscribe()
        }
    }, [watch, slugTransform, setValue])



    return (

        <form onSubmit={handleSubmit(submit)} className='flex flex-wrap'>
            <div className='w-2/3 px-2'>

                {/* Title */}
                <Input
                    label= 'Title: '
                    placeholder= 'Title'
                    className='mb-4'
                    {...register('title', {
                        required: true,
                    })}
                />

                {/* Slug */}
                <Input
                label='Slug: '
                placeholder='Slug'
                className='mb-4'
                {...register('slug', {
                    required:true
                })}
                onInput={(e)=>{                    
                    setValue('slug', slugTransform(e.currentTarget.value), {
                        shouldValidate: true,
                    })
                }}
                />

                {/* RTE */}
                <RTE label='Content: ' name='content' control={control} defaultValue={getValues('content')}/>
            </div>


            <div className='w-1/3 px-2'>
                {/* File Upload */}
                <Input
                    label='Featured Image: '
                    type='file'
                    className='mb-4'
                    accept='image/png, image/jpg, image/jpeg, image/gif'
                    {...register('image', {required: !post})}
                />
                <br/>
                {/* Select Dropdown */}
                <Select 
                    label='Status'
                    options={['active', 'inactive']}
                    className='mb-4'
                    {...register('status', {required : true})}
                />
            </div>


            {post && (
                <div className='w-full mb-4'>
                    <img 
                        src={appwriteservice.getFileView(post.featuredImage)} 
                        alt={post.title} 
                        className='rounded-lg' 
                    />
                </div>
            )}

            <br />
            <Button type='submit' bgColor={post ? 'bg-green-500' : undefined} className='w-full'>
                {post ? 'Update' : 'Submit'}
            </Button>
        </form>
    )
}

export default PostForm
