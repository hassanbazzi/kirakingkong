import { motion } from 'framer-motion';
import { ProgressiveBackground } from '../hooks/useProgressiveImage.jsx';

const About = () => {
    return (
        <section
            id="about"
            className="relative py-24 md:py-32 px-6 overflow-hidden min-h-[80vh] flex items-center"
            style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 60px))',
                marginBottom: '-60px',
                zIndex: 5,
                position: 'relative',
            }}
        >
            {/* Background with image and coral gradient overlay */}
            <div className="absolute inset-0 z-0">
                {/* Background image - crowd/venue shot */}
                <ProgressiveBackground
                    placeholder="/kira/placeholders/cheers-tiny.jpg"
                    src="/kira/cheers.jpg"
                    className="absolute inset-0 bg-cover"
                    style={{ backgroundPosition: 'center calc(50% + 230px)' }}
                />
                {/* Coral gradient overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(135deg, rgba(176, 65, 56, 0.6) 0%, rgba(192, 94, 86, 0.55) 50%, rgba(202, 80, 69, 0.6) 100%)'
                    }}
                />
                {/* Abstract dark shapes */}
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 800 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='100' cy='150' rx='350' ry='250' fill='%23222' opacity='0.5'/%3E%3Cellipse cx='700' cy='450' rx='300' ry='200' fill='%23333' opacity='0.4'/%3E%3C/svg%3E")`,
                        backgroundSize: 'cover'
                    }}
                />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="section-heading"
                >
                    about
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="body-text max-w-2xl"
                >
                    <p className="mb-6">
                        Kirakingkong is a selector in the truest sense: an artist who doesn't just play records but weaves them into journeys. From Copenhagen's storied underground to stages in Berlin, Barcelona, Vietnam, and Australia, she's become one of Scandinavia's most sought-after voices in contemporary house music.
                    </p>
                    <p>
                        Her sets are exercises in tension and release. Deep, hypnotic grooves that build through acid-tinged peaks before landing somewhere unexpected. A fixture of Denmark's electronic underground, she brings sharp curation and relentless energy to every dancefloor.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
