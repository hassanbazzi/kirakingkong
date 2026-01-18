import { motion } from 'framer-motion';
import { useState } from 'react';
import { ProgressiveBackground } from '../hooks/useProgressiveImage.jsx';

const Music = () => {
    const [activeTrack, setActiveTrack] = useState(0);

    const tracks = [
        {
            title: 'Blue Necklace',
            subtitle: 'Generational Trauma',
            description: 'A meditation on inherited pain. Lyrics and voice are my own, reflecting on what I carry within me, and the trauma we witness echoing through the world. When those fleeing their homes, enduring bombings, and losing loved ones become parents, their trauma won\'t end. It will echo through their children, and their children\'s children.',
            artworkCredit: 'Artwork by @katrinecreations',
            artworkNote: 'The ocean meets the flowing colors of a sunset. Blue and orange as opposites that meet and complement each other, symbolizing family ties: deeply connected and, at times, disconnected.',
            spotifyId: '2sYxiL7pVQgg8GqhXUWFeP', // Replace with actual track ID
        },
        {
            title: 'Ritual Rider',
            subtitle: 'Sacred Motion',
            description: 'It starts with a recording from a temple in Bali, with wind and chaos. Music is my ritual. My sacred place. Listening on the go has always been something special. Sometimes I go for a ride just for that. No end destination. Alone. I feel. I am.',
            artworkCredit: 'Artwork by @curlioumaa',
            artworkNote: 'The earth with all its matter and frequencies. The flowery smoke as an invisible fog over us, a lonely companion that others cannot see, but which is still beautiful because it helps form our worldview.',
            spotifyId: '2sYxiL7pVQgg8GqhXUWFeP', // Replace with actual track ID
        }
    ];

    return (
        <section
            id="music"
            className="relative py-24 md:py-32 px-6 overflow-hidden"
            style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 60px))',
                marginBottom: '-60px',
                zIndex: 3,
                position: 'relative',
                minHeight: '100vh',
            }}
        >
            {/* Background with coral gradient */}
            <div className="absolute inset-0 z-0">
                {/* Background image */}
                <ProgressiveBackground
                    placeholder="/kira/placeholders/performing-tiny.jpg"
                    src="/kira/performing.jpg"
                    className="absolute inset-0 bg-cover bg-center"
                />
                {/* Coral gradient overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(135deg, rgba(176, 65, 56, 0.75) 0%, rgba(192, 94, 86, 0.7) 50%, rgba(174, 64, 56, 0.75) 100%)'
                    }}
                />
                {/* Abstract dark shapes */}
                <div
                    className="absolute inset-0 opacity-25"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 800 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='200' cy='100' rx='300' ry='200' fill='%23222' opacity='0.5'/%3E%3Cellipse cx='600' cy='400' rx='280' ry='180' fill='%23333' opacity='0.4'/%3E%3C/svg%3E")`,
                        backgroundSize: 'cover'
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
                    music
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="body-text max-w-2xl mb-12"
                >
                    Original productions exploring melancholy, ritual, and the frequencies that connect us all.
                </motion.p>

                {/* Track Selector */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex gap-4 mb-8"
                >
                    {tracks.map((track, index) => (
                        <button
                            key={track.title}
                            onClick={() => setActiveTrack(index)}
                            className={`px-6 py-3 border-2 text-sm tracking-[0.12em] lowercase transition-all duration-300 ${
                                activeTrack === index
                                    ? 'border-white bg-white/20 text-white'
                                    : 'border-white/40 text-white/70 hover:border-white/60 hover:text-white'
                            }`}
                            style={{ backdropFilter: 'blur(8px)' }}
                        >
                            {track.title}
                        </button>
                    ))}
                </motion.div>

                {/* Active Track Display */}
                <motion.div
                    key={activeTrack}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid md:grid-cols-2 gap-8 md:gap-12"
                >
                    {/* Track Info */}
                    <div className="order-2 md:order-1">
                        <h3 className="text-3xl md:text-4xl font-light tracking-[0.1em] lowercase mb-2"
                            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
                            {tracks[activeTrack].title}
                        </h3>
                        <p className="text-lg text-white/70 tracking-[0.15em] lowercase mb-6"
                            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                            {tracks[activeTrack].subtitle}
                        </p>

                        <p className="body-text mb-6 leading-relaxed">
                            {tracks[activeTrack].description}
                        </p>

                        {/* Artwork Credit */}
                        <div className="border-l-2 border-white/30 pl-4 mt-8">
                            <p className="text-sm text-white/60 tracking-[0.1em] lowercase mb-2">
                                {tracks[activeTrack].artworkCredit}
                            </p>
                            <p className="text-sm text-white/80 italic leading-relaxed"
                                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                                "{tracks[activeTrack].artworkNote}"
                            </p>
                        </div>
                    </div>

                    {/* Spotify Embed */}
                    <div className="order-1 md:order-2">
                        <iframe
                            style={{ borderRadius: '12px' }}
                            src={`https://open.spotify.com/embed/artist/${tracks[activeTrack].spotifyId}?utm_source=generator&theme=0`}
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allowFullScreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            title={`${tracks[activeTrack].title} on Spotify`}
                        />
                    </div>
                </motion.div>

                {/* Listen Everywhere */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 pt-8 border-t border-white/20"
                >
                    <p className="text-sm text-white/60 tracking-[0.15em] lowercase mb-4">
                        available on all platforms
                    </p>
                    <div className="flex gap-6">
                        <a
                            href="https://open.spotify.com/artist/2sYxiL7pVQgg8GqhXUWFeP"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 hover:text-white transition-colors text-sm tracking-[0.1em] lowercase"
                        >
                            spotify
                        </a>
                        <a
                            href="https://soundcloud.com/kirakingkong"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 hover:text-white transition-colors text-sm tracking-[0.1em] lowercase"
                        >
                            soundcloud
                        </a>
                        <a
                            href="https://music.apple.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 hover:text-white transition-colors text-sm tracking-[0.1em] lowercase"
                        >
                            apple music
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Music;
