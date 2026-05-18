"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Button } from "@heroui/react";
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Hero = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const slides = [
        {
            title: "Unlock Your Potential with Expert Tutors",
            description: "Connect with certified educators on MediQueue. From Mathematics to Creative Arts, find the perfect mentor to guide your journey.",
            buttonText: "Find a Tutor",
            link: "/tutors",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Seamless Booking, Anytime, Anywhere",
            description: "Skip the manual scheduling hassle. Browse availability, book your preferred time slots, and manage your learning sessions with ease.",
            buttonText: "Book a Session",
            link: "/tutors",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Elevate Your Skills for the Future",
            description: "Join our growing community of learners. Get personalized 1-on-1 sessions designed to help you excel in your professional and academic life.",
            buttonText: "Join Now",
            link: "/register",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    if (!mounted) return null;

    return (
        <section className="w-full h-[500px] lg:h-[650px] overflow-hidden">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect={'fade'}
                speed={1000}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="mySwiper w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="relative w-full h-full bg-cover bg-center transition-transform duration-[5000ms] hover:scale-105"
                            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${slide.image})` }}
                        >
                            <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
                                <h2 className="text-4xl lg:text-7xl font-extrabold mb-6 tracking-tight text-white animate-fade-up">
                                    {slide.title}
                                </h2>
                                <p className="text-lg lg:text-2xl mb-10 max-w-3xl text-gray-200 leading-relaxed mx-auto">
                                    {slide.description}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button
                                        as={Link}
                                        href={slide.link}
                                        color="primary"
                                        size="lg"
                                        className="font-bold px-10 rounded-full h-14 text-lg shadow-xl"
                                    >
                                        {slide.buttonText}
                                    </Button>
                                    <Button
                                        as={Link}
                                        href="/how-it-works"
                                        variant="bordered"
                                        size="lg"
                                        className="font-bold px-10 rounded-full h-14 text-lg text-white border-white hover:bg-white hover:text-black transition-colors"
                                    >
                                        How it Works
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
};

export default Hero;