import { motion } from 'framer-motion';
import { useState } from 'react';
import { ProgressiveBackground } from '../hooks/useProgressiveImage.jsx';
import { Play, MapPin, Calendar } from 'lucide-react';

const HighlightedSets = () => {
    const [activeSet, setActiveSet] = useState(0);

    const sets = [
        {
            title: 'Culturebox - Black Box',
            venue: 'Culturebox, Copenhagen',
            date: 'September 2025',
            genre: 'House',
            duration: '2h 02m',
            description: 'A deep journey through house music recorded at Copenhagen\'s legendary Culturebox. Two hours of vibrant energy from the Black Box room, capturing the essence of Danish electronic culture.',
            soundcloudUrl: 'https://soundcloud.com/kirakingkong/black-box-culturebox-september-2025',
            embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/kirakingkong/black-box-culturebox-september-2025&color=%23e85a4f&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true',
        },
        {
            title: 'Live at SAGA',
            venue: 'SAGA, Da Nang',
            date: 'November 2025',
            genre: 'Techno',
            duration: '49m 48s',
            description: 'Guest DJ appearance at SAGA in Vietnam. Raw, hypnotic techno recorded live in Da Nang, representing the Danish sound on the Southeast Asian underground scene.',
            soundcloudUrl: 'https://soundcloud.com/saga-saga-28856819/live-at-saga-kikakingkong-denmark-resident-dj-saga-14-novr-2025-da-nang-viet-nam',
            embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/saga-saga-28856819/live-at-saga-kikakingkong-denmark-resident-dj-saga-14-novr-2025-da-nang-viet-nam&color=%23e85a4f&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true',
        },
        {
            title: 'Hotel Villa',
            venue: 'Hotel Villa, Copenhagen',
            date: 'October 2025',
            genre: 'Deep House',
            duration: '1h 51m',
            description: 'An intimate deep house session. Light-hearted and feel-good ravin\' that flows into deeper, floating territories. Perfect for those moments when you need to drift away.',
            soundcloudUrl: 'https://soundcloud.com/kirakingkong/get-a-lil-drink-of-some-sort',
            embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/kirakingkong/get-a-lil-drink-of-some-sort&color=%23e85a4f&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true',
        }
    ];

    return (
        <section
            id="sets"
            className="relative py-24 md:py-32 px-6 overflow-hidden"
            style={{
                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 60px), 0 100%)',
                marginBottom: '-60px',
                zIndex: 2,
                position: 'relative',
                minHeight: '100vh',
            }}
        >
            {/* Background with dark gradient */}
            <div className="absolute inset-0 z-0">
                <ProgressiveBackground
                    placeholder="/kira/placeholders/cheers-tiny.jpg"
                    src="/kira/cheers.jpg"
                    className="absolute inset-0 bg-cover bg-center"
                />
                {/* Dark gradient overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.92) 0%, rgba(40, 30, 30, 0.88) 50%, rgba(26, 26, 26, 0.92) 100%)'
                    }}
                />
            </div>

            <div className="max-w-5xl mx-auto relative z-10 w-full">
                <motion.h2
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="section-heading mb-4"
                >
                    highlighted sets
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="body-text max-w-2xl mb-12"
                >
                    Live recordings from dancefloors around the world. From Copenhagen institutions to underground venues in Asia.
                </motion.p>

                {/* Set Selector */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap gap-3 mb-10"
                >
                    {sets.map((set, index) => (
                        <button
                            key={set.title}
                            onClick={() => setActiveSet(index)}
                            className={`px-5 py-3 border-2 text-sm tracking-[0.1em] lowercase transition-all duration-300 ${
                                activeSet === index
                                    ? 'border-[#e85a4f] bg-[#e85a4f]/20 text-white'
                                    : 'border-white/30 text-white/60 hover:border-white/50 hover:text-white/80'
                            }`}
                            style={{ backdropFilter: 'blur(8px)' }}
                        >
                            {set.title}
                        </button>
                    ))}
                </motion.div>

                {/* Active Set Display */}
                <motion.div
                    key={activeSet}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid md:grid-cols-2 gap-8 md:gap-12"
                >
                    {/* Set Info */}
                    <div className="order-2 md:order-1">
                        <h3 className="text-3xl md:text-4xl font-light tracking-[0.08em] lowercase mb-3"
                            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
                            {sets[activeSet].title}
                        </h3>

                        {/* Meta info */}
                        <div className="flex flex-wrap gap-4 mb-6 text-sm text-white/70">
                            <span className="flex items-center gap-2">
                                <MapPin size={14} className="text-[#e85a4f]" />
                                {sets[activeSet].venue}
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar size={14} className="text-[#e85a4f]" />
                                {sets[activeSet].date}
                            </span>
                        </div>

                        {/* Genre & Duration badges */}
                        <div className="flex gap-3 mb-6">
                            <span className="px-3 py-1 bg-[#e85a4f]/20 border border-[#e85a4f]/40 text-[#e85a4f] text-xs tracking-[0.15em] uppercase">
                                {sets[activeSet].genre}
                            </span>
                            <span className="px-3 py-1 bg-white/5 border border-white/20 text-white/60 text-xs tracking-[0.1em]">
                                {sets[activeSet].duration}
                            </span>
                        </div>

                        <p className="body-text mb-8 leading-relaxed">
                            {sets[activeSet].description}
                        </p>

                        {/* Listen on SoundCloud link */}
                        <a
                            href={sets[activeSet].soundcloudUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-6 py-3 bg-[#e85a4f] hover:bg-[#c44b42] text-white text-sm tracking-[0.12em] lowercase transition-all duration-300"
                        >
                            <Play size={16} fill="currentColor" />
                            listen on soundcloud
                        </a>
                    </div>

                    {/* SoundCloud Embed */}
                    <div className="order-1 md:order-2">
                        <div
                            className="rounded-lg overflow-hidden"
                            style={{
                                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                            }}
                        >
                            <iframe
                                width="100%"
                                height="300"
                                scrolling="no"
                                frameBorder="no"
                                allow="autoplay"
                                src={sets[activeSet].embedUrl}
                                title={`${sets[activeSet].title} on SoundCloud`}
                            />
                        </div>
                    </div>
                </motion.div>

                {/* All Sets Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 pt-8 border-t border-white/10"
                >
                    <p className="text-sm text-white/50 tracking-[0.15em] lowercase mb-4">
                        more sets available on
                    </p>
                    <a
                        href="https://soundcloud.com/kirakingkong"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-[#e85a4f] transition-colors text-sm tracking-[0.1em] lowercase"
                    >
                        soundcloud.com/kirakingkong →
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default HighlightedSets;
