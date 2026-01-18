import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ProgressiveBackground } from '../hooks/useProgressiveImage.jsx';

const Venues = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [hoveredVenue, setHoveredVenue] = useState(null);

    // Curated venue data from 2024-2025 gigs
    const venueData = {
        copenhagen: {
            city: "Copenhagen",
            country: "Denmark",
            coords: { x: 50, y: 12 },
            venues: [
                { name: "Culture Box", gigs: 12, type: "club" },
                { name: "Karrusel Festival", gigs: 3, type: "festival" },
                { name: "Distortion Club", gigs: 4, type: "club" },
                { name: "Gravity", gigs: 8, type: "club" },
                { name: "Coma Club", gigs: 6, type: "club" },
                { name: "Escapism", gigs: 5, type: "club" },
                { name: "Den Anden Siden", gigs: 4, type: "club" },
                { name: "Werkstatt", gigs: 8, type: "club" },
                { name: "Danza", gigs: 5, type: "club" },
                { name: "Mesteren & Lærlingen", gigs: 4, type: "bar" },
                { name: "Noma", gigs: 3, type: "restaurant" },
            ]
        },
        barcelona: {
            city: "Barcelona",
            country: "Spain",
            coords: { x: 44, y: 22 },
            venues: [
                { name: "Curtis", gigs: 2, type: "club" }
            ]
        },
        berlin: {
            city: "Berlin",
            country: "Germany",
            coords: { x: 51, y: 14 },
            venues: [
                { name: "Wilde Renate", gigs: 3, type: "club" }
            ]
        },
        malaga: {
            city: "Málaga",
            country: "Spain",
            coords: { x: 42, y: 25 },
            venues: [
                { name: "Sala Marte", gigs: 2, type: "club" }
            ]
        },
        marbella: {
            city: "Marbella",
            country: "Spain",
            coords: { x: 41, y: 26 },
            venues: [
                { name: "Private Yacht", gigs: 1, type: "yacht" }
            ]
        },
        danang: {
            city: "Da Nang",
            country: "Vietnam",
            coords: { x: 80, y: 38 },
            venues: [
                { name: "SAGA", gigs: 2, type: "club" },
                { name: "Maia Beach Bar", gigs: 1, type: "bar" },
                { name: "Blends", gigs: 1, type: "bar" }
            ]
        },
        melbourne: {
            city: "Melbourne",
            country: "Australia",
            coords: { x: 88, y: 58 },
            venues: [
                { name: "Section 8", gigs: 1, type: "bar" }
            ]
        }
    };

    // Featured venues (top played) - more prominent selection
    const featuredVenues = [
        "Culture Box", "Karrusel Festival", "Distortion Club", "Gravity",
        "Coma Club", "Escapism", "Den Anden Siden", "Werkstatt",
        "Danza", "Noma", "Wilde Renate", "Curtis", "SAGA", "Section 8"
    ];

    return (
        <section
            ref={sectionRef}
            id="venues"
            className="relative py-24 md:py-32 px-6 overflow-hidden min-h-[100vh]"
            style={{
                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 60px), 0 100%)',
                marginBottom: '-60px',
                zIndex: 2,
                position: 'relative',
            }}
        >
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <ProgressiveBackground
                    placeholder="/kira/placeholders/villared-tiny.jpg"
                    src="/kira/villared.jpg"
                    className="absolute inset-0 bg-cover bg-center"
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(135deg, rgba(174, 64, 56, 0.75) 0%, rgba(192, 94, 86, 0.7) 50%, rgba(182, 70, 59, 0.75) 100%)'
                    }}
                />
                {/* Animated grid pattern */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px'
                    }}
                />
            </div>

            <div className="max-w-6xl mx-auto relative z-10 w-full">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="section-heading mb-4">
                        World Tour
                    </h2>
                    <p className="body-text max-w-2xl mx-auto opacity-90">
                        Copenhagen is home, but the dancefloor is global. From Karrusel Festival to Berlin's Wilde Renate and Melbourne's Section 8, the sound translates everywhere authenticity matters.
                    </p>
                </motion.div>

                {/* Featured Venues - Now above map and more prominent */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-12"
                >
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                        {featuredVenues.map((venue, index) => (
                            <motion.span
                                key={venue}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.3 + index * 0.05,
                                    scale: { duration: 0 },
                                    backgroundColor: { duration: 0 },
                                    borderColor: { duration: 0 }
                                }}
                                whileHover={{
                                    scale: 1.08,
                                    backgroundColor: 'rgba(255,255,255,0.2)',
                                    borderColor: 'rgba(255,255,255,0.7)'
                                }}
                                className="px-5 md:px-6 py-2.5 md:py-3 border-2 border-white/40 text-sm md:text-base tracking-[0.12em] lowercase cursor-default bg-white/5"
                                style={{ backdropFilter: 'blur(8px)' }}
                            >
                                {venue}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* Interactive Map */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="relative mx-auto"
                    style={{ maxWidth: '900px' }}
                >
                    {/* Map Container */}
                    <div
                        className="relative w-full rounded-2xl overflow-hidden"
                        style={{
                            aspectRatio: '16/10',
                            background: 'linear-gradient(180deg, rgba(15,15,25,0.95) 0%, rgba(25,20,35,0.98) 100%)',
                            boxShadow: '0 25px 80px rgba(0,0,0,0.5)',
                            border: '1px solid rgba(255,255,255,0.08)'
                        }}
                    >
                        {/* Dot grid background */}
                        <div
                            className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                                backgroundSize: '24px 24px'
                            }}
                        />

                        {/* World Map SVG */}
                        <svg
                            viewBox="0 0 100 70"
                            className="w-full h-full relative z-10"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <defs>
                                <filter id="glow">
                                    <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>

                            {/* Simplified World Map - Europe, Africa, Asia, Australia only */}
                            <g fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.15">
                                {/* Europe */}
                                <path d="M42,10 L48,8 L52,10 L54,14 L52,18 L48,20 L44,18 L42,14 Z" />
                                <path d="M38,16 L42,14 L44,18 L42,22 L38,20 Z" /> {/* UK/Ireland area */}
                                <path d="M40,22 L44,20 L48,22 L46,28 L42,26 L40,24 Z" /> {/* Spain/France */}
                                <path d="M48,20 L54,18 L56,22 L54,26 L50,24 L48,22 Z" /> {/* Central Europe */}

                                {/* Africa */}
                                <path d="M42,28 L50,26 L56,30 L58,38 L54,46 L48,48 L42,46 L40,40 L42,34 Z" />

                                {/* Asia */}
                                <path d="M54,8 L62,6 L72,8 L80,12 L84,18 L82,24 L76,26 L70,24 L64,22 L58,18 L56,12 Z" /> {/* Russia/North Asia */}
                                <path d="M56,22 L64,20 L70,24 L72,30 L68,34 L62,32 L58,28 L56,24 Z" /> {/* Middle East/Central */}
                                <path d="M68,28 L76,26 L82,30 L84,38 L80,42 L74,40 L70,36 L68,32 Z" /> {/* India/South Asia */}
                                <path d="M76,34 L84,32 L88,38 L86,46 L80,48 L76,44 L74,38 Z" /> {/* Southeast Asia */}

                                {/* Australia */}
                                <path d="M82,52 L90,50 L96,54 L94,62 L88,66 L82,64 L80,58 Z" />
                            </g>

                            {/* Connection lines with animation - curved flight paths */}
                            {isInView && (
                                <>
                                    {/* Copenhagen to Berlin */}
                                    <motion.path
                                        d={`M50,12 L51,14`}
                                        fill="none"
                                        stroke="rgba(232, 90, 79, 0.5)"
                                        strokeWidth="0.3"
                                        strokeDasharray="0.8,0.8"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 0.8, delay: 0.5 }}
                                    />
                                    {/* Copenhagen to Barcelona */}
                                    <motion.path
                                        d={`M50,12 Q46,17 44,22`}
                                        fill="none"
                                        stroke="rgba(232, 90, 79, 0.5)"
                                        strokeWidth="0.3"
                                        strokeDasharray="0.8,0.8"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 1.2, delay: 0.7 }}
                                    />
                                    {/* Copenhagen to Malaga/Marbella */}
                                    <motion.path
                                        d={`M50,12 Q45,18 42,25`}
                                        fill="none"
                                        stroke="rgba(232, 90, 79, 0.5)"
                                        strokeWidth="0.3"
                                        strokeDasharray="0.8,0.8"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 1.3, delay: 0.8 }}
                                    />
                                    {/* Copenhagen to Da Nang - long arc */}
                                    <motion.path
                                        d={`M50,12 Q65,20 80,38`}
                                        fill="none"
                                        stroke="rgba(232, 90, 79, 0.4)"
                                        strokeWidth="0.3"
                                        strokeDasharray="1,0.8"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 2, delay: 0.9 }}
                                    />
                                    {/* Copenhagen to Melbourne - longest arc */}
                                    <motion.path
                                        d={`M50,12 Q70,35 88,58`}
                                        fill="none"
                                        stroke="rgba(232, 90, 79, 0.35)"
                                        strokeWidth="0.3"
                                        strokeDasharray="1.2,0.8"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 2.5, delay: 1.1 }}
                                    />
                                </>
                            )}

                            {/* City markers */}
                            {Object.entries(venueData).map(([key, city], index) => {
                                // Custom label offsets for each city
                                const labelOffsets = {
                                    copenhagen: { x: 0, y: -2.5 },
                                    berlin: { x: 3.5, y: 0.5 },
                                    barcelona: { x: -4, y: 0 },
                                    malaga: { x: -4, y: 0.5 },
                                    marbella: { x: -4, y: 2 },
                                    danang: { x: 0, y: 4 },
                                    melbourne: { x: 0, y: 4 }
                                };
                                const offset = labelOffsets[key] || { x: 0, y: -2.5 };

                                return (
                                    <g
                                        key={key}
                                        onMouseEnter={() => setHoveredVenue(key)}
                                        onMouseLeave={() => setHoveredVenue(null)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {/* Outer pulse ring */}
                                        <motion.circle
                                            cx={city.coords.x}
                                            cy={city.coords.y}
                                            r={key === 'copenhagen' ? 4 : 2.5}
                                            fill="none"
                                            stroke="rgba(232, 90, 79, 0.6)"
                                            strokeWidth="0.2"
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            animate={isInView ? {
                                                scale: [1, 2, 1],
                                                opacity: [0.6, 0, 0.6]
                                            } : {}}
                                            transition={{
                                                duration: 2.5,
                                                delay: index * 0.4,
                                                repeat: Infinity,
                                                ease: "easeOut"
                                            }}
                                        />
                                        {/* Inner glow */}
                                        <motion.circle
                                            cx={city.coords.x}
                                            cy={city.coords.y}
                                            r={key === 'copenhagen' ? 2.5 : 1.8}
                                            fill="rgba(232, 90, 79, 0.3)"
                                            initial={{ scale: 0 }}
                                            animate={isInView ? { scale: 1 } : {}}
                                            transition={{ delay: 0.3 + index * 0.2, type: "spring" }}
                                        />
                                        {/* Main dot */}
                                        <motion.circle
                                            cx={city.coords.x}
                                            cy={city.coords.y}
                                            r={key === 'copenhagen' ? 1.2 : 0.8}
                                            fill={hoveredVenue === key ? "#fff" : "#e85a4f"}
                                            filter="url(#glow)"
                                            initial={{ scale: 0 }}
                                            animate={isInView ? { scale: 1 } : {}}
                                            transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                                        />
                                        {/* City label */}
                                        <motion.text
                                            x={city.coords.x + offset.x}
                                            y={city.coords.y + offset.y}
                                            textAnchor={offset.x > 0 ? "start" : offset.x < 0 ? "end" : "middle"}
                                            fill="white"
                                            fontSize="2.2"
                                            fontWeight="400"
                                            letterSpacing="0.15"
                                            style={{ textShadow: '0 0 4px rgba(0,0,0,0.8)' }}
                                            initial={{ opacity: 0, y: 2 }}
                                            animate={isInView ? { opacity: hoveredVenue === key ? 1 : 0.9, y: 0 } : {}}
                                            transition={{ delay: 0.7 + index * 0.2 }}
                                        >
                                            {city.city.toUpperCase()}
                                        </motion.text>
                                    </g>
                                );
                            })}
                        </svg>

                        {/* Hover tooltip */}
                        {hoveredVenue && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm px-6 py-4 rounded-lg"
                                style={{ minWidth: '280px' }}
                            >
                                <div className="text-center">
                                    <h4 className="text-lg font-light tracking-wider mb-1">
                                        {venueData[hoveredVenue].city}, {venueData[hoveredVenue].country}
                                    </h4>
                                    <div className="text-sm opacity-70 mb-3">
                                        {venueData[hoveredVenue].venues.length} venue{venueData[hoveredVenue].venues.length > 1 ? 's' : ''} • {' '}
                                        {venueData[hoveredVenue].venues.reduce((sum, v) => sum + v.gigs, 0)} gigs
                                    </div>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {venueData[hoveredVenue].venues.slice(0, 5).map(venue => (
                                            <span
                                                key={venue.name}
                                                className="text-xs px-2 py-1 bg-white/10 rounded"
                                            >
                                                {venue.name}
                                            </span>
                                        ))}
                                        {venueData[hoveredVenue].venues.length > 5 && (
                                            <span className="text-xs px-2 py-1 opacity-60">
                                                +{venueData[hoveredVenue].venues.length - 5} more
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </motion.div>

                {/* Animated decorative elements */}
                <motion.div
                    className="absolute top-20 right-10 w-32 h-32 border border-white/10 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute bottom-40 left-10 w-20 h-20 border border-white/10 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
            </div>
        </section>
    );
};

export default Venues;
