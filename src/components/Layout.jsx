import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

const Layout = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        const unsubscribe = scrollY.on('change', (latest) => {
            setIsScrolled(latest > 100);
        });
        return () => unsubscribe();
    }, [scrollY]);

    return (
        <div className="bg-[#1a1a1a] text-white min-h-screen selection:bg-[#e85a4f] selection:text-white overflow-x-hidden">
            {/* Grain overlay */}
            <div className="grain-overlay" />

            {/* Navigation */}
            <motion.nav
                className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                    padding: isScrolled ? '12px 24px' : '24px',
                    backgroundColor: isScrolled ? 'rgba(186, 75, 66, 0.45)' : 'transparent',
                    backdropFilter: isScrolled ? 'blur(20px)' : 'none',
                    boxShadow: isScrolled ? '0 2px 20px rgba(0, 0, 0, 0.15)' : 'none',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
            >
                <motion.div
                    className="flex items-center"
                    style={{
                        gap: isScrolled ? '32px' : '0px',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                >
                    {/* Logo - moves to center when scrolled */}
                    <motion.a
                        href="#"
                        className="absolute md:relative"
                        style={{
                            left: isScrolled ? 'auto' : '24px',
                            position: isScrolled ? 'relative' : 'absolute',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                    >
                        <img
                            src="/Kirakingkong__White.png"
                            alt="Kirakingkong"
                            style={{
                                height: isScrolled ? '20px' : '24px',
                                width: 'auto',
                                filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.5))',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                        />
                    </motion.a>

                    {/* Nav links */}
                    <div
                        className="hidden md:flex text-sm font-light tracking-[0.15em] lowercase"
                        style={{
                            gap: isScrolled ? '24px' : '32px',
                            position: isScrolled ? 'relative' : 'absolute',
                            right: isScrolled ? 'auto' : '24px',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                    >
                        <a href="#about" className="hover:text-[#e85a4f] transition-colors">about</a>
                        <a href="#journey" className="hover:text-[#e85a4f] transition-colors">journey</a>
                        <a href="#music" className="hover:text-[#e85a4f] transition-colors">music</a>
                        <a href="#sets" className="hover:text-[#e85a4f] transition-colors">sets</a>
                        <a href="#venues" className="hover:text-[#e85a4f] transition-colors">venues</a>
                        <a href="#connect" className="hover:text-[#e85a4f] transition-colors">connect</a>
                    </div>
                </motion.div>
            </motion.nav>

            <main>
                {children}
            </main>

            <footer className="py-8 text-center text-neutral-500 text-xs tracking-[0.2em] lowercase">
                &copy; {new Date().getFullYear()} Kirakingkong
            </footer>
        </div>
    );
};

export default Layout;
