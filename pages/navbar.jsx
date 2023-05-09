import React from 'react'
import Script from 'next/script'
import {BsCart3} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'
import Link from 'next/link'
// import {Transition} from '@headlessui/react'
import { Transition } from "@headlessui/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect,useState,useRef } from 'react'
import Router from 'next/router'
const jwt = require('jsonwebtoken')
let refresh = []
export default function Navbar({update,cdat,subtotal}) {
  
  const [name,setName] = useState(null)

  const cartref = useRef()
  const [isOpen, setIsOpen] = useState(false);
  // useEffect(()=>{toggle()},[])
  // useEffect(()=>{toggle()},[])

  const toggle = () => {
    if(cartref.current.classList.contains('translate-x-full')){
      cartref.current.classList.remove('translate-x-full')
      cartref.current.classList.add('shadow-highlight')
      // cartref.current.classList.remove('hidden')
      update(Math.random().toString())
      
    }
    
    
    
  }
  const cross = () => {
    cartref.current.classList.add('translate-x-full')
    cartref.current.classList.remove('shadow-highlight')
    // cartref.current.classList.add('hidden')
    update(Math.random().toString())
  }
  const handleclick = () =>{
    if(!name){
      Router.push("/login")
    }
    else{
      localStorage.removeItem('name')
      setName(undefined)
    }
    
  }
  useEffect(()=>{
    try{
      
      const token = localStorage.getItem('name')
      const data = token
      const email = data
      setName(email.split('@')[0])
    }
    catch{
      
      // console.log(cdat)
    }
  },[])
  return (
    <div>
      <div ref={cartref} className="cart overflow-y-auto transition-transform translate-x-full transform h-screen bg-white fixed top-0 z-50 right-0 p-10 opacity-90">
        <h2 className='font-bold text-xl font-sans'>Shopping Cart</h2>
        <span className='absolute top-2 right-2'><AiFillCloseCircle onClick={cross} className='cursor-pointer' size={20}/></span>
        <ol className='mt-20 overflow-y-auto'>
          {cdat && cdat.map((item,i)=>(
            <>
              {i !== 0 ? 
            <li className='bg-gray-300 p-2 rounded-lg mt-3' key={i}>
              <span>{i}. {item}</span>
              </li>
              :
            <></>
            }
            </>
            ))}
            <div className='mt-20'>

            <h1 className='font-bold'>Subtotal:{subtotal}</h1>
            <Link href={'/checkout'}>
            <button className='bg-indigo-600 rounded-lg text-white w-28 h-8'>Checkout</button>
            </Link>
            <button className='bg-indigo-600 rounded-lg text-white w-28 h-8 ml-2' onClick={()=>{
              localStorage.removeItem('cart')
              update(Math.random().toString())
              localStorage.removeItem('price')
            }}>Clear cart</button>
            </div>
        </ol>
      </div>
    <nav className="bg-white nav shadow-3xl w-full fixed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href={"/"}>
                <img width={50} src="/logo.png" alt="" />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/">
                <a
                  className=" hover:bg-gray-300 text-black px-3 py-2 rounded-md text-sm font-medium"
                  >
                  Home
                </a>
                  </Link>
                <Link href={"/birthdaycakes"}>
                <a
                  className="text-black hover:bg-gray-300 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                  >
                  Birthday Cakes
                  
                </a>
                  </Link>
                <Link href={"/drycakes"}>
                <a
                  className="text-black hover:bg-gray-300 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                  >
                  Dry cakes
                </a>
                  </Link>
                <Link href={"/cookies"}>
                <a
                  className="text-black hover:bg-gray-300 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                  >
                  Cookies
                </a>
                  </Link>
                <Link href={"/about"}>
                <a
                  className="text-black hover:bg-gray-300 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                  >
                  About Us
                </a>
                  </Link>
                  <a>
                    {/* <Link href={"/"}> */}

                    <BsCart3 size={24} onClick={toggle} className='absolute top-4 mt-1 right-44 cursor-pointer' />
                  
                    {/* </Link> */}

                    <button onClick={handleclick} className='bg-indigo-500 text-white absolute top-4 h-8 w-16 rounded-md p-1 right-16'>{name ? 'Logout' : 'Login'}</button>
                    {/* <Link href={"/"}> */}

                  


                  {/* {username ?
                   <div className="flex ml-96 items-center space-x-4">
                      <h1 className="font-bold">Welcome {username}</h1>
                      <button onClick={()=>{
                        localStorage.removeItem("token")
                        window.location.href = "/"
                      }} className="bg-black text-white w-20 h-8 rounded-full">Logout</button>
                   </div> 
                   : 
                   <div></div>} */}
                   </a>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:white focus:ring-gray-200"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
                
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 flex flex-col pb-3 space-y-4 sm:px-3">
              <Link
                href="/"
                className="hover:bg-gray-300 text-black block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>

              <Link
                href="birthdaycakes"
                className="text-black hover:bg-gray-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
              >
                Birthday cakes
              </Link>

              <Link
                href="/drycakes"
                className="text-black hover:bg-gray-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
              >
                Dry cakes
              </Link>

              <Link
                href="/about"
                className="text-black hover:bg-gray-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
              >
                About Us
              </Link>
              <a className="text-black hover:bg-gray-300 h-8 hover:text-black block px-3 py-2 rounded-md text-base font-medium">

                <BsCart3 size={24} onClick={toggle} className='absolute bottom-4 mt-1 left-8 cursor-pointer' />

                {/* </Link> */}

                <button onClick={handleclick} className='bg-indigo-500 text-white absolute bottom-4 h-8 w-16 rounded-md p-1 mt-20 left-20 '>{name ? 'Logout' : 'Login'}</button>
              </a>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  </div>
  )
}
