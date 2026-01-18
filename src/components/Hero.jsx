import { motion } from 'framer-motion';
import { ProgressiveBackground } from '../hooks/useProgressiveImage.jsx';

const Hero = () => {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{
                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 60px), 0 100%)',
                marginBottom: '-60px',
                zIndex: 6,
                position: 'relative',
            }}
        >
            {/* Background image with coral overlay */}
            <div className="absolute inset-0 z-0">
                <ProgressiveBackground
                    placeholder="/kira/placeholders/hero-tiny.jpg"
                    src="/kira/hero.jpg"
                    className="absolute inset-0 bg-cover bg-bottom"
                />
                {/* Coral/pink color overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(180deg, rgba(186, 65, 56, 0.55) 0%, rgba(186, 65, 56, 0.6) 50%, rgba(174, 64, 56, 0.65) 100%)'
                    }}
                />
            </div>

            {/* Content - centered */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                {/* Logo image */}
                <motion.img
                    src="/Kirakingkong__White.png"
                    alt="KIRAKINGKONG"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="w-full max-w-2xl mx-auto mb-8"
                    style={{
                        filter: 'drop-shadow(2px 2px 8px rgba(0,0,0,0.5))',
                    }}
                />

                {/* Decorative line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="w-full max-w-md mx-auto h-[2px] bg-white/80 mb-8"
                />

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-xl md:text-2xl font-light tracking-[0.15em] text-white lowercase"
                    style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.6), 0 0 30px rgba(0,0,0,0.3)' }}
                >
                    old school detroit meets european dancefloor
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-lg md:text-xl font-light tracking-[0.1em] text-white/90 lowercase mt-3"
                    style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5), 0 0 20px rgba(0,0,0,0.3)' }}
                >
                    house / funk / acid / disco
                </motion.p>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"
                />
            </motion.div>
        </section>
    );
};

export default Hero;
