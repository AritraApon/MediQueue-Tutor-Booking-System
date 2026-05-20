"use client"
import Link from "next/link";
import { Button, FieldError, Form, Input, Label, TextField, InputGroup } from "@heroui/react";
import { useState } from "react";
import { motion } from 'framer-motion';
import { authClient } from "@/lib/auth-client";
import { Eye, EyeClosed } from "lucide-react";
import { toast } from "react-toastify";





const LogInFrom = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault()
    const fromData = new FormData(e.target)
    const userData = Object.fromEntries(fromData.entries())
    // console.log(userData)

    const { data, error } = await authClient.signIn.email({
      /**
       * The user email
       */
      email: userData.email,
      /**
       * The user password
       */
      password: userData.password,
      /**
       * A URL to redirect to after the user verifies their email (optional)
       */
      callbackURL: "/",
      /**
       * remember the user session after the browser is closed.
       * @default true
       */
      rememberMe: false
    }, {
      //callbacks
    })

    if (data) {
      toast.success('Successfully log in')
    }
    if (error) {
      toast.error(error.message || "Something went wrong on the server");
    }
    console.log(data, error)


  }

  const googleSingIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    if (data) {
      redirect('/'),
        toast.success('Successfully SingUp')
    }
  }

  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center container mx-auto px-4">
      {/* Header Section */}
      <div className="text-center mb-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-gray-900 dark:text-white tracking-tight"
        >
          Welcome <span className="text-violet-600">Back!</span>
        </motion.h2>
        <p className="mt-3 text-gray-500 dark:text-gray-400 text-lg">
          Please enter your details to sign in
        </p>
      </div>

      <motion.div
        className="w-full max-w-[420px] mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Form onSubmit={onSubmit} className="border-none rounded-[2.5rem] bg-white dark:bg-zinc-900 shadow-2xl p-8 sm:p-10 flex flex-col gap-5" >

          {/* Email Field */}
          <TextField
            isRequired
            name="email"
            type="email"
            className="flex flex-col gap-1"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-sm font-bold text-gray-700 dark:text-zinc-300 ml-1">Email address</Label>
            <Input
              placeholder="Enter your email"
              className="h-12 bg-gray-50 dark:bg-zinc-800 border-none rounded-xl focus:ring-2 focus:ring-violet-500 transition-all"
            />
            <FieldError className="text-xs text-red-500 font-medium ml-1 mt-1" />
          </TextField>

          {/* Password Field */}
          <TextField
            className="w-full flex flex-col gap-1"
            name="password"
            validate={(value) => {
              if (value.length < 6) return "Password must be at least 6 characters";
              if (!/[A-Z]/.test(value)) return "Need at least one uppercase letter";
              if (!/[0-9]/.test(value)) return "Need at least one number";
              return null;
            }}
          >
            <div className="flex justify-between items-center px-1">
              <Label className="text-sm font-bold text-gray-700 dark:text-zinc-300">Password</Label>
              {/* Forget Password Link */}
              <Link href="/forgot-password" size="sm" className="text-xs font-bold text-violet-600 hover:text-violet-500 transition-colors">
                Forgot Password?
              </Link>
            </div>

            <InputGroup>
              <InputGroup.Input
                className="h-12 bg-gray-50 dark:bg-zinc-800 border-none rounded-xl focus:ring-2 focus:ring-violet-500 transition-all"
                type={isVisible ? "text" : "password"}
                placeholder="••••••••"
              />
              <InputGroup.Suffix className="pr-2 bg-gray-50 dark:bg-zinc-800 rounded-r-xl border-none">
                <Button
                  isIconOnly
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="light"
                  className="text-gray-400 hover:text-violet-600 transition-colors"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? <Eye className="size-5" /> : <EyeClosed className="size-5" />}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
            <FieldError className="text-xs text-red-500 font-medium ml-1 mt-1" />
          </TextField>

          {/* Login Button */}
          <div className="mt-2">
            <Button
              type="submit"
              className="w-full h-12 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl shadow-lg shadow-violet-200 dark:shadow-none transition-all active:scale-[0.98]"
            >
              Log In
            </Button>
          </div>

          {/* Divider */}
          <div className="relative my-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100 dark:border-zinc-800"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="px-3 bg-white dark:bg-zinc-900 text-gray-400 font-medium tracking-wider">
                Or continue with
              </span>
            </div>
          </div>

          {/* Google Login */}
          <button
            onClick={googleSignIn} 
            type="button"
            className="w-full h-12 flex items-center justify-center gap-3 px-4 border border-gray-200 dark:border-zinc-800 rounded-xl bg-transparent hover:bg-gray-50 dark:hover:bg-zinc-800 text-gray-700 dark:text-zinc-200 font-bold transition-all"
          >
            {/* Google Colorful SVG Icon */}
            <svg
              className="w-5 h-5 flex-shrink-0" // আকার Footer-এর আইকনের মতোই রাখা হয়েছে
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
              />
              <path
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
              />
              <path
                fill="#FBBC05"
                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
              />
              <path
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
              />
              <path fill="none" d="M0 0h48v48H0z" />
            </svg>

            <span>Sign in with Google</span>
          </button>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-500 dark:text-zinc-400 mt-2">
            Don’t have an account?{' '}
            <Link href={'/singup'} className="text-violet-600 font-black hover:underline underline-offset-4">
              Sing Up
            </Link>
          </p>

        </Form>
      </motion.div>
    </div>
  );
};

export default LogInFrom;