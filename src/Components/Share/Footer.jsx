"use client"
import { Envelope, LogoFacebook, LogoGithub, LogoLinkedin } from "@gravity-ui/icons";
import Link from "next/link";
import { BiLogoTwitter, BiPhone } from "react-icons/bi";
import { FaLocationPin } from "react-icons/fa6";


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-blue-50 dark:bg-zinc-950 border-t border-gray-100 dark:border-zinc-800 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Section */}
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-black tracking-tighter text-blue-600">
                            Medi<span className="text-gray-900 dark:text-white">Queue</span>
                        </Link>
                        <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                            Connecting students with expert tutors worldwide. Simple, fast, and reliable learning management.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <a href="#" className="p-2 rounded-full bg-gray-50 dark:bg-zinc-900 text-gray-400 hover:text-blue-600 transition-colors">
                                <BiLogoTwitter />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-gray-50 dark:bg-zinc-900 text-gray-400 hover:text-blue-600 transition-colors">
                                <LogoLinkedin />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-gray-50 dark:bg-zinc-900 text-gray-400 hover:text-blue-600 transition-colors">
                                <LogoGithub />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-gray-50 dark:bg-zinc-900 text-gray-400 hover:text-blue-600 transition-colors">
                                <LogoFacebook />
                            </a>
                        </div>
                    </div>

                    {/* Learning Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">Learning Services</h4>
                        <ul className="space-y-4">
                            <li><Link href="/tutors" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Find a Tutor</Link></li>
                            <li><Link href="/add-tutor" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Become a Tutor</Link></li>
                            <li><Link href="/my-bookings" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Lesson Bookings</Link></li>
                            <li><Link href="/categories" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Subject Categories</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">Support</h4>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-gray-500 hover:text-blue-600 transition-colors">About Us</Link></li>
                            <li><Link href="/faq" className="text-gray-500 hover:text-blue-600 transition-colors">FAQs</Link></li>
                            <li><Link href="/privacy" className="text-gray-500 hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-gray-500 hover:text-blue-600 transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-500">
                                <FaLocationPin className="mt-1 flex-shrink-0" />
                                <span>Dhaka, Bangladesh.</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-500">
                                <BiPhone className="flex-shrink-0" />
                                <span>+880 1234 567890</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-500">
                                <Envelope className="flex-shrink-0" />
                                <span>support@mediqueue.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-100 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>© {currentYear} MediQueue. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms</Link>
                        <Link href="/cookies" className="hover:text-gray-900 dark:hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;