"use client"

import Image from 'next/image';
import { Bars, Moon, Sun } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


const Navbar = () => {
    const pathName = usePathname();
    const { theme, setTheme } = useTheme();

    // কোনো এক্সট্রা হুক লাগবে না, সাধারণ জাভাস্ক্রিপ্ট স্টেট
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    // ডার্ক মোড হাইড্রেশন এরর ফিক্স
    useEffect(() => {
        setMounted(true);
    }, []);

    const links = (
        <>
            <li className={`${pathName === '/' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 dark:text-gray-300'} font-semibold hover:text-blue-500 transition-all list-none`}>
                <Link href={'/'}>Home</Link>
            </li>
            <li className={`${pathName === '/tutors' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 dark:text-gray-300'} font-semibold hover:text-blue-500 transition-all list-none`}>
                <Link href={'/tutors'}>Tutors</Link>
            </li>
            <li className={`${pathName === '/add-tutor' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 dark:text-gray-300'} font-semibold hover:text-blue-500 transition-all list-none`}>
                <Link href={'/add-tutor'}>Add Tutor</Link>
            </li>
            <li className={`${pathName === '/my-tutor' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 dark:text-gray-300'} font-semibold hover:text-blue-500 transition-all list-none`}>
                <Link href={'/my-tutor'}>My Tutor</Link>
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
                        <Image src={'/logo.png'} alt='logo' width={35} height={35} />
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
                    {/* loging  */}

                    <Button
                        as={Link}
                        href="/login"
                        variant="flat"
                        size="sm"
                        className="font-bold bg-blue-500 text-white rounded-full px-5"
                    >
                        Login
                    </Button>

                    <Button
                        as={Link}
                        href="/register"
                        variant="solid"
                        size="sm"
                        className="font-bold  border-2 border-blue-500  rounded-full px-5"
                    >
                        Sign Up
                    </Button>

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
    <Bars />
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
            <Button
              as={Link}
              href="/login"
              color="primary"
              variant="solid"
              fullWidth
              className="font-bold w-full border-2 bg-blue-300"
            >
              Login
            </Button>

            <Button
              as={Link}
              href="/register"
              variant="solid"
              size="sm"
              className="font-bold border-2 border-blue-500 rounded-full px-5 w-full"
            >
              Sign Up
            </Button>
          </div>
        </nav>
      </Drawer.Body>
    </Drawer.Dialog>
  </Drawer.Content>
</Drawer>
                    </div>


                    <div>
                        <Link href="/" className="flex items-center gap-2">
                            <Image src={'/logo.png'} alt='logo' width={30} height={30} />
                            <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                                MediQueue
                            </h1>
                        </Link>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;