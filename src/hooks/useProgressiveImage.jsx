import { useState, useEffect } from 'react';

/**
 * Hook for progressive image loading with blur-up effect
 * @param {string} lowQualitySrc - Path to tiny placeholder image
 * @param {string} highQualitySrc - Path to full quality image
 * @returns {{ src: string, isLoaded: boolean }}
 */
export const useProgressiveImage = (lowQualitySrc, highQualitySrc) => {
    const [src, setSrc] = useState(lowQualitySrc);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = highQualitySrc;
        
        img.onload = () => {
            setSrc(highQualitySrc);
            setIsLoaded(true);
        };

        return () => {
            img.onload = null;
        };
    }, [highQualitySrc]);

    return { src, isLoaded };
};

/**
 * Component for progressive background images with blur-up effect
 */
export const ProgressiveBackground = ({ 
    placeholder, 
    src, 
    className = '', 
    style = {},
    children 
}) => {
    const { src: currentSrc, isLoaded } = useProgressiveImage(placeholder, src);

    return (
        <div
            className={className}
            style={{
                ...style,
                backgroundImage: `url('${currentSrc}')`,
                filter: isLoaded ? 'none' : 'blur(20px)',
                transform: isLoaded ? 'scale(1)' : 'scale(1.1)',
                transition: 'filter 0.5s ease-out, transform 0.5s ease-out',
            }}
        >
            {children}
        </div>
    );
};
