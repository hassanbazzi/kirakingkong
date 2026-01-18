import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

const Discography = () => {
    // Placeholder tracks since we don't have exact URLs from the original site
    const tracks = [
        { id: 1, title: 'Live at Culturebox', genre: 'Bass / Dub', duration: '1:30:00' },
        { id: 2, title: 'Werkstatt Session', genre: 'Deep House', duration: '58:00' },
        { id: 3, title: 'Berlin Underground', genre: 'Psychedelic', duration: '2:15:00' },
    ];

    return (
        <section id="music" className="py-24 md:py-40 bg-black text-white px-6">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-7xl font-bold uppercase mb-16 text-right tracking-tight text-neutral-200"
                >
                    Selected Sets
                </motion.h2>

                <div className="grid gap-4">
                    {tracks.map((track, index) => (
                        <motion.div
                            key={track.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group border-t border-neutral-800 py-8 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-900 transition-colors px-4 cursor-pointer"
                        >
                            <div className="flex items-center gap-6 w-full md:w-auto">
                                <span className="text-neutral-600 text-sm font-mono">0{index + 1}</span>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold uppercase mb-1">{track.title}</h3>
                                    <p className="text-purple-400 text-sm tracking-wider uppercase">{track.genre}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 mt-4 md:mt-0 w-full md:w-auto justify-between md:justify-end">
                                <span className="text-neutral-500 font-mono text-sm">{track.duration}</span>
                                <div className="p-3 border border-white rounded-full group-hover:bg-white group-hover:text-black transition-all">
                                    <PlayCircle size={24} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="#" className="inline-block border-b border-purple-500 pb-1 text-purple-400 hover:text-white hover:border-white transition-colors uppercase tracking-widest text-sm">
                        Listen on SoundCloud
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Discography;
