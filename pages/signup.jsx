import { useState } from 'react';

import {addDoc, collection, doc, getFirestore, setDoc} from 'firebase/firestore'
import { LockClosedIcon } from '@heroicons/react/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {app} from './firebase'
import * as CryptoJS from 'crypto-js'
import {useCollectionData} from 'react-firebase-hooks/firestore'

export default function Example() {
  const db = getFirestore(app)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const userscollection = collection(db,"users")
  const [data] = useCollectionData(userscollection)
  function strength(i){
    let strength = 0;
    if(i.length > 4){
      strength++;
    }
    if(/[A-Z]/.test(i)){
      strength++;
    }
    if(/[0-9]/.test(i)){
      strength++;
    }
    if(/[A-Za-z0-8]/.test(i)){
      strength++;
    }
    return strength
  }
  const Onpassword = async (e)=>{
    await setPassword(e.target.value)
    let stren = strength(e.target.value)
    const line = document.querySelector('.line')
    console.log(stren)
    console.log(e.target.value)
    if(password){

      if(stren == 0){
        line.style.width = "12px"
        line.classList.remove("bg-green-500")
        line.classList.add("bg-red-500")
      }
      if(stren == 1){
        line.style.width = "80px"
        line.classList.remove("bg-green-500")
        line.classList.add("bg-red-500")
        
      }
      if(stren == 2){
        line.style.width = "180px"
        line.classList.remove("bg-green-500")
        line.classList.add("bg-yellow-500")
        
      }
      if(stren == 3){
        line.style.width = "215px"
        line.classList.remove("bg-yellow-500")
        line.classList.remove("bg-red-500")
        line.classList.add("bg-green-500")
        
      }
      if(stren == 4){
        line.style.width = "315px"
        line.classList.remove("bg-yellow-500")
        line.classList.remove("bg-red-500")
        line.classList.add("bg-green-500")
        
      }
    }
    else{
      line.style.width = "12px"
      line.classList.remove("bg-green-500")
      line.classList.add("bg-red-500")
    }

  }
  const login = async (e) => {
    e.preventDefault();
    
    const user = data.filter(x => x.email === email)
    try{

      if(user[0].email){
    
        toast.error("User Already Exists", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        
      }
      
  
        
      
    }
    catch{
      setDoc(doc(userscollection,email),{
        email:email,
        password:CryptoJS.AES.encrypt(password,'khotakhota').toString()
      })
      toast.success("Account created successfully", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      
    }
  }
  return (
    <>
      <ToastContainer
position="top-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
      <div className="min-h my-32 -full lb shadow-2xl flex items-center absolute ml-login justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up for an account</h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={login}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={Onpassword}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign up
              </button>
            </div>
            <div className="line w-4 h-2 rounded-md bg-red-500"></div>
          </form>
        </div>
      </div>
    </>
  )
}
