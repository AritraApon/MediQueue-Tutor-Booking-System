"use client"

import Image from 'next/image';

import { Button, Drawer } from "@heroui/react";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { authClient } from '@/lib/auth-client';
import { ChartBar, LogOut, Moon, Sun } from 'lucide-react';
import { toast } from 'react-toastify';



const Navbar = () => {
    const router = useRouter();
    const pathName = usePathname();
    const { theme, setTheme } = useTheme();


    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);


    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSingOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login");
                },
            },
        });
        router.refresh()
        toast.success('log out')
    }

    const {
        data: session,
        isPending,
        error,
        refetch
    } = authClient.useSession()

    const user = session?.user;
    console.log(user)

    const links = (
        <>
            <li className={`${pathName === '/' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 dark:text-gray-300'} font-semibold hover:text-blue-500 transition-all list-none`}>
                <Link href={'/'}>Home</Link>
            </li>
            <li className={`${pathName === '/tutors' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 dark:text-gray-300'} font-semibold hover:text-blue-500 transition-all list-none`}>
                <Link href={'/tutors'}>Tutors</Link>
            </li>
            <li className={`${pathName === '/add-tutor' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 dark:text-gray-300'} font-semibold hover:text-blue-500 transition-all list-none`}>
                <Link href={'/add-tutor'}>Add Tutors</Link>
            </li>
            <li className={`${pathName === '/my-tutor' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 dark:text-gray-300'} font-semibold hover:text-blue-500 transition-all list-none`}>
                <Link href={'/my-tutor'}>My Tutors</Link>
            </li>
            <li className={`${pathName === '/my-booking-sessions' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 dark:text-gray-300'} font-semibold hover:text-blue-500 transition-all list-none`}>
                <Link href={'/my-booking-sessions'}>My Sessions</Link>
            </li>
        </>
    );

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-black/80 backdrop-blur-md">
            <div className="container mx-auto  px-4 hidden lg:flex justify-between items-center h-16">

                {/* Logo & Mobile Menu */}
                <div className="flex items-center gap-2">

                    <Link href="/" className="flex items-center gap-2">

                        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                            MediQueue
                        </h1>
                    </Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden lg:block">
                    <ul className="flex items-center gap-6 list-none m-0 p-0">
                        {links}
                    </ul>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-2">

                    {/* loging  */}
                    {
                        user ? <div className='flex items-center gap-2'>
                            <div className='flex items-center gap-2'>
                                <div>
                                    <h1>Welcome! <span className='text-blue-500'>{user?.name}</span></h1>
                                </div>
                                <Link href={'/profile'} className='border-3 shadow border-blue-500 rounded-full shadow-blue-50'>
                                    <Image
                                        src={user?.image}
                                        alt='user image'
                                        width={40}
                                        height={40}
                                        className='rounded-full'
                                    />
                                </Link>


                            </div>
                            <Button onClick={handleSingOut}
                                variant="solid"
                                size="sm"
                                className="font-bold  border-2 bg-red-600  rounded-full p-4 text-white text-lg"
                            >
                                <LogOut />
                            </Button>

                        </div>
                            :

                            <div className='space-x-3'>
                                <Link href="/login">
                                    <Button
                                        variant="flat"
                                        size="sm"
                                        className="font-bold bg-blue-500 text-white rounded-full px-5"
                                    >
                                        Login
                                    </Button>
                                </Link>

                                <Link href={'/singup'}>
                                    <Button
                                        variant="solid"
                                        size="sm"
                                        className="font-bold  border-2 border-blue-500  rounded-full px-5"
                                    >
                                        Sign Up
                                    </Button>
                                </Link>
                            </div>
                    }

                    {mounted && (
                        <Button
                            isIconOnly
                            variant="flat"
                            size="sm"
                            radius="full"
                            onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className='border-2 rounded-full border-blue-400'
                        >
                            {theme === 'dark' ? <Sun /> : <Moon />}
                        </Button>
                    )}




                </div>
            </div>


            <div className='lg:hidden sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-black/80 backdrop-blur-md'>
                <div className='container mx-auto px-4 flex gap-3 items-center h-16'>


                    <div>
                        <Drawer>
                            {/* Corrected Trigger: Removing the HeroUI Button to avoid nested <button> tags */}
                            <Drawer.Trigger
                                className="p-2 hover:bg-default-100 rounded-lg transition-colors inline-flex items-center justify-center"
                                aria-label="Open Menu"
                                onPress={() => setIsOpen(true)}
                            >
                                <ChartBar />
                            </Drawer.Trigger>

                            <Drawer.Backdrop />
                            <Drawer.Content placement="left">
                                <Drawer.Dialog className="p-6">
                                    <Drawer.CloseTrigger className="absolute right-4 top-4" />

                                    <Drawer.Header>
                                        <Drawer.Heading className="text-xl font-bold text-primary">
                                            Navigation
                                        </Drawer.Heading>
                                    </Drawer.Header>

                                    <Drawer.Body className="mt-8">
                                        <nav className="flex flex-col gap-6">
                                            <ul className="flex flex-col gap-4 list-none p-0">
                                                {links}
                                            </ul>

                                            <div className="border-t pt-6 flex flex-col gap-4">
                                                <div className="flex items-center gap-4">
                                                    <p className="text-sm font-medium">Appearance:</p>
                                                    {mounted && (
                                                        <Button
                                                            isIconOnly
                                                            variant="flat"
                                                            size="sm"
                                                            radius="full"
                                                            onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                                        >
                                                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                                                        </Button>
                                                    )}
                                                </div>

                                                {/* Added 'as={Link}' for better Next.js performance */}
                                                {
                                                    user ? <div>
                                                        <Button onClick={handleSingOut}
                                                            variant="solid"
                                                            size="sm"
                                                            className="font-bold  border-2 border-red-500  rounded-full px-5 w-full"
                                                        >
                                                            Log out
                                                        </Button>
                                                    </div> :
                                                        <div>
                                                            <Link href="/login">
                                                                <Button
                                                                    color="primary"
                                                                    variant="solid"
                                                                    fullWidth
                                                                    className="font-bold w-full border-2 bg-blue-300"
                                                                >
                                                                    Login
                                                                </Button>
                                                            </Link>


                                                            <Link href="/singup" >
                                                                <Button
                                                                    variant="solid"
                                                                    size="sm"
                                                                    className="font-bold border-2 border-blue-500 rounded-full px-5 w-full"
                                                                >
                                                                    Sign Up
                                                                </Button>
                                                            </Link>
                                                        </div>
                                                }


                                            </div>
                                        </nav>
                                    </Drawer.Body>
                                </Drawer.Dialog>
                            </Drawer.Content>
                        </Drawer>
                    </div>


                    <div>
                        <div className="flex items-center gap-5 justify-between w-full px-4 py-2 lg:hidden">
                            {/* লোগো সেকশন */}
                            <Link href="/" className="flex items-center gap-2 group">
                                <h1 className="text-xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent transition-all group-hover:scale-105">
                                    MediQueue
                                </h1>
                            </Link>

                            {/* ইউজার প্রোফাইল বা লগইন বাটন */}
                            <div className="flex items-center">
                                {user ? (
                                    <Link
                                        href="/profile"
                                        className="ring-2 ring-blue-500 ring-offset-2 rounded-full overflow-hidden transition-transform active:scale-90"
                                    >
                                        <Image
                                            src={user?.image}
                                            alt="user image"
                                            width={20}
                                            height={20}
                                            className="rounded-full object-cover shadow-sm"
                                        />
                                    </Link>
                                ) : (
                                    <Link href="/login">
                                        <Button
                                            variant="flat"
                                            size="sm"
                                            className="font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-1 h-9 shadow-md shadow-blue-200 transition-all active:scale-95"
                                        >
                                            Login
                                        </Button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </nav >
    );
};

export default Navbar;