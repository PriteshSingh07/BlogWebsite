import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'
import conf from '../conf/conf'

// editor use 
// <Editor
// initialValue='default value'
// init={
//     {branding: false,
//      height: 500,
//      menubar: true,
//      plugins:[
//         'advlist autolink lists link image charmap print preview anchor',
//         'searchreplace visualblocks code fullscreen',
//         'insertdatetime media table paste code help wordcount'
//      ],
//      toolbar:
//         'undo redo | formatselect | bold italic backcolor | \ alignleft aligncenter alignright alignjustify | \ bullist numlist outdent indent | removeformat | help'   
//     }
// }
// />

{/* For RTE cofiguration api key is also needed */}

function RTE({name, control, label, defaultValue=''}) {
    // console.log(conf.tinyMceApi);
    
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1'>{label}</label>}


            <Controller
            name={name || 'content'}
            control={control}
            render={({field: {onChange}})=>(
                <Editor
                apiKey={conf.tinyMceApi}
                initialValue='' // default val
                init={
                    {branding: false,
                        height: 500,
                        menubar: true,
                        placeholder: 'Type your content here..',
                        plugins:[
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar:
                        'undo redo | blocks | image | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
                        content_style: 'body {font-family:Helvetica, Arial, sans-serif; font-size:14px}' 
                    }
                }

                // init={{
                //     height: 300,
                //     menubar: false,
                //     placeholder: 'Type your awesome content here...',
                //     plugins: [
                //         'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                //         'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                //         'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                //     ],
                //     toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
                // }}  
                onEditorChange={onChange}   
                />
            )}
            />
        </div>
    )
}

export default RTE
