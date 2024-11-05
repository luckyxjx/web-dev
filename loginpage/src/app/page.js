"use client";

import { signInWithPopup, auth, provider } from '../firebase/firebase'; // adjust path as needed
import Image from 'next/image';
import Link from 'next/link';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const Login = () => {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed in: ", user);
      // Redirect
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Side */}
      <div className="flex flex-col justify-left items-left text-left lg:w-1/2.5 py-10 pl-5 lg:pl-20">
        {/* Logo */}
        <div className="mb-12">
          <Image src='/Images/claylogo.png' alt="logo" width={70} height={70} />
        </div>

        <div className="lg:w-2/3 w-2/3 mt-10">
          <h2 className="font-bold text-4xl text-black">Welcome to Clay!</h2>
          <p className="font-light text-xs leading-4">
            Sign up to start building personalized outreach campaigns in minutes
          </p>

          <div className="flex flex-col mt-4">
            <button
              type="button"
              className="flex items-center justify-center google-signup-btn border border-gray-300 rounded-md py-2 px-4 mt-4 hover:bg-gray-200 transition duration-200"
              onClick={handleGoogleSignIn}
            >
              <Image src='/Images/login.png' alt="Google Icon" width={20} height={20} />
              <span className="ml-2 text-black font-semibold text-sm">Sign up with Google</span>
            </button>

            {/* Divider */}
            <Divider>
              <Typography color="initial" sx={{ fontSize: "12px", fontWeight: "100", mt: 3, mb: 3 }}>
                OR
              </Typography>
            </Divider>

            {/* Input Fields */}
            <div className="relative mb-4">
              <span className="absolute left-3 top-2.5 text-gray-400">
                <i className="fa-regular fa-user"></i>
              </span>
              <input
                type="text"
                className="border border-gray-300 rounded-md pl-10 p-2 w-full"
                placeholder="Full Name"
                aria-label="Full Name"
              />
            </div>

            <div className="mb-4 relative">
              <span className="absolute left-3 top-2.5 text-gray-400">
                <i className="fa-regular fa-envelope"></i>
              </span>
              <input
                type="email"
                className="border border-gray-300 rounded-md pl-10 p-2 w-full"
                placeholder="Email"
                aria-label="Email"
              />
            </div>

            <button className="bg-blue-600 text-white py-2 rounded-md w-full">
              Continue
            </button>
            <p className="mt-3 text-xs">
              Already have an account?{' '}
              <Link href="/" className="text-blue-500 underline">
                Login
              </Link>
            </p>
          </div>
        </div>

        <footer className="mt-20 lg:mt-auto w-2/3 lg:w-2/3 ">
          <Typography sx={{ fontSize: "12px", fontWeight: "100" }}>
            By signing up for a Clay account, you agree to our{' '}
            <span className="font-bold">Privacy Policy</span> and{' '}
            <span className="font-bold">Terms of Service</span>.
          </Typography>
        </footer>
      </div>

      {/* Right Side */}
      <div className="lg:w-1/2.99 hidden lg:block"
        style={{
          height:"100vh",
          display:"flex",
          justifyContent:"end",
          backgroundColor:'#fff7d2'
      }}
      >
        <Image
          src='/Images/mockup.png'
          alt="backgroundImage"
          width={850}
          height={650}
          style={{
            marginLeft:"110px"
          }}
        />
      </div>
    </div>
  );
};

export default Login;
