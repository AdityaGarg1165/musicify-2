import Link from 'next/link'

import {motion} from 'framer-motion'
// import Script from 'next/script'
import { FaTshirt } from 'react-icons/fa'
import { MdOutlineDeliveryDining } from 'react-icons/md'
import { AiFillDollarCircle } from 'react-icons/ai'
// import styles from '../styles/Home.module.css'
import { app } from './firebase'
import { collection, getFirestore, limit, query } from 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useEffect } from 'react'
import Head from 'next/head'
// import { Link } from 'react-router-dom'
export default function Home({ updateTop, time }) {
  const db = getFirestore(app)
  const recentcollection = collection(db, 'hpducts')
  const limited = query(recentcollection, limit(3))
  const [data] = useCollectionData(limited)

  useEffect(()=>{
    window.location.href = "https://accounts.spotify.com/authorize?client_id=2d619d57084f437aa49f91cf7197f671&response_type=code&redirect_uri=http://localhost:3000/dashboard&scope=ugc-image-upload%20user-read-playback-state%20user-modify-playback-state%20user-read-currently-playing%20streaming%20app-remote-control%20user-read-email%20user-read-private%20playlist-read-collaborative%20playlist-modify-public%20playlist-read-private%20playlist-modify-private%20user-library-modify%20user-library-read%20user-top-read%20user-read-playback-position%20user-read-recently-played%20user-follow-read%20user-follow-modify"


   
    },[])
      
      
      return (
    <div style={{background:"#121212"}} className='w-screen h-screen'>
     
    </div>
  )
}
