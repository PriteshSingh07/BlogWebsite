import { useState, useEffect } from "react"
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import appwriteService from './appwrite/config'
import {login, logout} from './store/authSlice'

// Loader
import Landing from './pages/Landing.jsx'

import {setPosts} from './store/postSlice'
// import { useSelector } from "react-redux"


import {Header, Footer} from './components/index'
import { Outlet } from "react-router-dom"


function App() {
  // console.log('App url: ', import.meta.env.VITE_APP_APPWRITE_URL);

  const [loading, setLoading] = useState(true)
  const [introFinished, setIntroFinished] = useState(false);
  const dispatch = useDispatch()

  // checking posts 
  // const postCheck = useSelector((state) => state.posts.posts)

  
  useEffect(() => {   

    // get current user 
    authService.getCurrentUser()
    .then((userData) => {
    // console.log(userData);
    if(userData){
      dispatch(login({userData}))
    }
    else{
      dispatch(logout())
    }
    return appwriteService.getPosts();
    })
    .then((posts)=>{
      if(posts) {
        dispatch(setPosts(posts.documents))
      }
    })
    .finally(() => setLoading(false))
  }, [])

  // console.log('App');
  // console.log('Checking posts in App:', postCheck);
  
  
  

  // return(
  //   <>
  //   <h1 className='text-green-400 text-center'>A blog app with appwrite</h1>
  //   </>
  // )

  return (introFinished && !loading) ? (
    <div className="min-h-screen flex justify-center bg-gray-400">
        <div className="max-w-4xl">
              <Header/>
              <main>
                {/* TODO: */}
                <Outlet/>
              </main>
              <Footer/>
        </div>
    </div>
  ) : <Landing onFinish={() => setIntroFinished(true)} />

  // <h1 className="text-white">Loading...</h1>
  


}

export default App