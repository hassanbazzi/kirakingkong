import { motion } from 'framer-motion';
import { ProgressiveBackground } from '../hooks/useProgressiveImage.jsx';

const Contact = () => {
    return (
        <section
            id="connect"
            className="relative py-24 md:py-32 px-6 overflow-hidden min-h-[80vh] flex items-center"
            style={{
                zIndex: 1,
                position: 'relative',
            }}
        >
            {/* Background with image and coral gradient */}
            <div className="absolute inset-0 z-0">
                {/* Background image */}
                <ProgressiveBackground
                    placeholder="/kira/placeholders/smileblue-tiny.jpg"
                    src="/kira/smileblue.jpg"
                    className="absolute inset-0 bg-cover bg-center"
                />
                {/* Coral gradient overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(180deg, rgba(192, 94, 86, 0.8) 0%, rgba(186, 75, 66, 0.78) 50%, rgba(174, 64, 56, 0.82) 100%)'
                    }}
                />
                {/* Abstract dark shapes */}
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 800 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='150' cy='300' rx='300' ry='250' fill='%23222' opacity='0.5'/%3E%3Cellipse cx='650' cy='200' rx='250' ry='180' fill='%23333' opacity='0.4'/%3E%3C/svg%3E")`,
                        backgroundSize: 'cover'
                    }}
                />
            </div>

            <div className="max-w-4xl mx-auto relative z-10 text-center w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-heading"
                >
                    connect<br />with me<br />here
                </motion.h2>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-center items-center gap-8 md:gap-12 mt-12"
                >
                    {/* Instagram */}
                    <a
                        href="https://instagram.com/kirakingkong"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                        aria-label="Instagram"
                    >
                        <div className="w-14 h-14 md:w-16 md:h-16 border-2 border-white rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                            <svg className="w-7 h-7 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </div>
                    </a>

                    {/* Resident Advisor */}
                    <a
                        href="https://ra.co/dj/kirakingkong"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                        aria-label="Resident Advisor"
                    >
                        <div className="w-14 h-14 md:w-16 md:h-16 border-2 border-white rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                            <svg className="w-7 h-7 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                            </svg>
                        </div>
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:contact@kirakingkong.com"
                        className="group"
                        aria-label="Email"
                    >
                        <div className="w-14 h-14 md:w-16 md:h-16 border-2 border-white rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                            <span className="text-2xl md:text-3xl font-light">@</span>
                        </div>
                    </a>

                    {/* SoundCloud */}
                    <a
                        href="https://soundcloud.com/kirakingkong"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                        aria-label="SoundCloud"
                    >
                        <div className="w-14 h-14 md:w-16 md:h-16 border-2 border-white rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors px-2">
                            <svg className="w-full h-6 md:h-7" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m-.899.828c-.06 0-.091.037-.104.094L0 14.479l.165 1.308c0 .055.045.094.09.094s.089-.045.104-.104l.21-1.319-.21-1.334c0-.057-.059-.09-.09-.09m1.83-1.229c-.061 0-.12.045-.12.104l-.21 2.563.225 2.458c0 .06.045.12.12.12.06 0 .105-.061.12-.12l.24-2.458-.24-2.563c0-.06-.045-.104-.12-.104m.945-.089c-.075 0-.135.06-.15.135l-.193 2.64.21 2.544c.016.077.075.138.149.138.075 0 .135-.061.15-.138l.24-2.544-.24-2.64c0-.075-.06-.135-.135-.135l-.031-.001m.96-.451c-.09 0-.165.075-.179.165l-.18 3.091.195 2.621c.015.09.089.164.179.164s.149-.074.179-.164l.21-2.621-.21-3.091c-.015-.09-.074-.165-.179-.165h-.015m.975-.18c-.105 0-.18.09-.195.18l-.164 3.271.18 2.654c.015.105.09.18.18.18.104 0 .179-.075.193-.18l.195-2.654-.21-3.271c0-.104-.089-.18-.179-.18m1.005-.155c-.12 0-.21.089-.225.209l-.15 3.426.165 2.641c.015.12.105.21.225.21.119 0 .209-.09.224-.21l.18-2.641-.18-3.426c0-.12-.09-.21-.21-.21l-.029.001m.99-.241c-.135 0-.24.104-.255.24l-.135 3.645.15 2.625c.015.135.12.24.255.24.12 0 .24-.105.255-.24l.164-2.625-.164-3.645c0-.135-.12-.24-.255-.24m1.02-.045c-.15 0-.271.12-.285.27l-.12 3.69.135 2.609c.015.15.135.271.285.271.135 0 .255-.12.27-.27l.149-2.61-.149-3.69c0-.15-.135-.27-.27-.27m1.664.135c-.165 0-.3.135-.314.3l-.105 3.556.119 2.594c.016.165.15.3.315.3.149 0 .284-.135.299-.3l.135-2.594-.135-3.556c0-.165-.149-.3-.299-.3h-.015m.705-.165c-.165 0-.315.15-.315.33l-.09 3.696.105 2.58c0 .165.135.315.315.315.165 0 .315-.15.315-.315l.12-2.58-.12-3.696c0-.18-.15-.33-.315-.33h-.015m1.755.18c-.045-.18-.195-.3-.375-.3-.195 0-.344.12-.359.3l-.09 3.816.09 2.564c.015.18.164.314.359.314.18 0 .33-.135.359-.314l.104-2.564-.104-3.816h.016m.675.12c-.194 0-.359.15-.374.344l-.075 3.676.09 2.551c.016.195.165.359.375.359.194 0 .359-.149.359-.359l.104-2.551-.104-3.676c0-.195-.15-.344-.359-.344h-.016m1.71-.405c-.18 0-.33.149-.375.329l-.06 4.081.075 2.535c.016.18.165.33.375.33.195 0 .36-.15.375-.33l.089-2.535-.104-4.081c-.029-.18-.18-.329-.36-.329h-.015m.705-.074c-.195 0-.359.149-.389.359l-.045 4.155.06 2.521c.015.209.18.374.389.374.195 0 .36-.165.375-.374l.075-2.521-.09-4.155c0-.21-.18-.359-.375-.359m1.725.015c-.21 0-.39.164-.405.389l-.03 4.155.044 2.506c.016.224.195.404.405.404.21 0 .39-.18.405-.404l.06-2.506-.075-4.155c0-.225-.18-.389-.405-.389m.945.075c-.225 0-.42.194-.42.42l-.03 4.065.045 2.49c0 .225.18.42.42.42.224 0 .404-.195.42-.42l.06-2.49-.075-4.065c0-.226-.195-.42-.42-.42m1.426.704c-.975-.601-2.084-.96-3.292-.96-.42 0-.826.045-1.216.12-.21.045-.391.181-.391.405v7.501c0 .226.165.42.391.435h4.493c1.696 0 3.069-1.38 3.069-3.075 0-1.68-1.373-3.06-3.054-3.06v-.366z"/>
                            </svg>
                        </div>
                    </a>
                </motion.div>

                {/* Booking CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16"
                >
                    <a
                        href="mailto:contact@kirakingkong.com"
                        className="inline-block border-2 border-white px-8 py-4 text-sm tracking-[0.2em] lowercase hover:bg-white hover:text-[#c44b42] transition-colors"
                    >
                        booking inquiries
                    </a>
                </motion.div>

                {/* Press Kit Download */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="mt-8"
                >
                    <a
                        href="/press-kit.pdf"
                        download
                        className="text-sm tracking-[0.15em] lowercase text-white/70 hover:text-white transition-colors underline underline-offset-4"
                    >
                        download press kit
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
