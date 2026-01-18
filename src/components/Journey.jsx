import { motion } from 'framer-motion';
import { ProgressiveBackground } from '../hooks/useProgressiveImage.jsx';

const Journey = () => {
    return (
        <section
            id="journey"
            className="relative py-24 md:py-32 px-6 overflow-hidden min-h-[80vh] flex items-center"
            style={{
                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 60px), 0 100%)',
                marginBottom: '-60px',
                zIndex: 4,
                position: 'relative',
            }}
        >
            {/* Background with image and coral/pink gradient */}
            <div className="absolute inset-0 z-0">
                {/* Background image - DJ performance shot */}
                <ProgressiveBackground
                    placeholder="/kira/placeholders/loverave-tiny.jpg"
                    src="/kira/loverave.JPG"
                    className="absolute inset-0 bg-cover bg-center"
                />
                {/* Coral gradient overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(180deg, rgba(192, 94, 86, 0.65) 0%, rgba(202, 80, 69, 0.6) 40%, rgba(186, 75, 66, 0.65) 100%)'
                    }}
                />
                {/* Abstract dark organic shapes */}
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 800 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='650' cy='200' rx='280' ry='220' fill='%23222' opacity='0.5'/%3E%3Cellipse cx='200' cy='500' rx='320' ry='180' fill='%23333' opacity='0.4'/%3E%3Cellipse cx='500' cy='100' rx='150' ry='120' fill='%23444' opacity='0.3'/%3E%3C/svg%3E")`,
                        backgroundSize: 'cover'
                    }}
                />
            </div>

            <div className="max-w-4xl mx-auto relative z-10 w-full">
                <motion.h2
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="section-heading text-right"
                >
                    journey<br />
                    <span className="text-[0.6em]">&</span> style
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="body-text max-w-2xl ml-auto text-right"
                >
                    <p className="mb-6">
                        The sound is funk-driven house at its most infectious: acid lines, disco warmth, and bass-heavy grooves built for bodies in motion. Sexy, high-energy, and unapologetically dance-forward. Think old school Detroit sensibility meets contemporary European club culture.
                    </p>
                    <p>
                        The roots run deep through hip hop, trance, dub, and bass, but today the mission is singular: keep the floor moving from the first beat to the last. From Karrusel Festival to Culture Box, from Coma Club to Wilde Renate, the approach stays the same. Read the room, trust the crates, deliver.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Journey;
