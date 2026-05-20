"use client"
import Link from "next/link";
import { Button, FieldError, Form, Input, Label, TextField, InputGroup } from "@heroui/react";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

import { Eye, EyeSlash } from "@gravity-ui/icons";

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
                  {isVisible ? <Eye className="size-5" /> : <EyeSlash className="size-5" />}
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
          <button onClick={googleSingIn}
            type="button"
            className="w-full h-12 flex items-center justify-center gap-3 px-4 border border-gray-200 dark:border-zinc-800 rounded-xl bg-transparent hover:bg-gray-50 dark:hover:bg-zinc-800 text-gray-700 dark:text-zinc-200 font-bold transition-all"
          >
            <FaGoogle className="text-red-500 text-lg" />
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