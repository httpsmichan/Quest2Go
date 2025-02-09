import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useRouter } from 'next/router'; 

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push('/admin');  // Redirect to /admin instead of /home
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Head>
        <title>Login - Quest2Go</title>
        <meta name="description" content="Login to Quest2Go and access unpublished research in Davao City." />
      </Head>

      {/* Login Container */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full mx-4 md:mx-0 flex flex-col md:flex-row">
        {/* Left Side: Login Form */}
        <div className="p-8 md:w-1/2">
          <div className="flex items-center space-x-3 mb-6">
            {/* Mobile Logo - Only shows on mobile */}
            <Link href="/" className="md:hidden">
              <Image
                src="/Logo/q2glogo.png"
                alt="Quest2Go Logo"
                width={40}
                height={40}
                className="w-8 h-8 cursor-pointer"
              />
            </Link>
            <h2 className="text-2xl font-bold text-gray-900">Login</h2>
          </div>
          <form className="space-y-6" onSubmit={handleLogin}>
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 pr-10"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Login
              </button>
            </div>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link href="/signup" className="text-indigo-600 hover:text-indigo-500">
                Sign up
              </Link>
            </p>
          </div>
        </div>

        {/* Logo Section */}
        <div className="hidden md:flex bg-indigo-600 p-8 items-center justify-center md:w-1/2">
          <Link href="/" className="text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="text-center">
                <h1 className="text-4xl font-bold">
                  <span className="text-white">Quest</span>
                  <span className="text-gray-200">2Go</span>
                </h1>
                <p className="mt-4 text-gray-200 text-lg" style={{ fontFamily: 'Quicksand' }}>
                  Connect • Discover • Share
                </p>
                <p className="mt-2 text-gray-300 text-sm">
                  Your Gateway to Discovering Valuable Unpublished Research
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
