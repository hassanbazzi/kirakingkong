const SectionDivider = ({ direction = 'right' }) => {
    // direction: 'right' = slopes down to right, 'left' = slopes up to right (down to left)
    const skewDeg = direction === 'right' ? '-3deg' : '3deg';

    return (
        <div
            className="relative h-20 md:h-28 -my-10 md:-my-14 z-20 pointer-events-none"
        >
            <div
                className="absolute inset-0 bg-[#1a1a1a]"
                style={{
                    transform: `skewY(${skewDeg})`,
                    transformOrigin: 'center',
                }}
            />
        </div>
    );
};

export default SectionDivider;
