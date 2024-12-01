"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        const yOffset = window.pageYOffset;
        setScrollY(yOffset);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const opacity = Math.max(1 - scrollY / 300, 0.5);

    return (
        <header className="sticky top-0 z-40 bg-gray-900">
            <div className="container mx-auto flex items-center justify-between py-8 text-white transition-all duration-500 xl:py-12">
                {/* Logo */}
                <Link href="/">
                    <h1
                        className="text-4xl font-semibold transition-opacity duration-500"
                        style={{ opacity }}
                    >
                        Sanya <span className="text-accent">.</span>
                    </h1>
                </Link>

                {/* Desktop Nav */}
                <div
                    className="hidden items-center gap-8 transition-opacity duration-500 xl:flex"
                    style={{ opacity }}
                >
                    <Nav />
                    <Link href="/contact">
                        <Button>Hire me</Button>
                    </Link>
                </div>

                {/* Mobile Nav */}
                <div
                    className="transition-opacity duration-500 xl:hidden"
                    style={{ opacity }}
                >
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

export default Header;