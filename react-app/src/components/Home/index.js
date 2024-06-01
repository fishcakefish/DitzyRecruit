import { useState, useEffect } from 'react'
import './Home.css'

export default function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [nextImageIndex, setNextImageIndex] = useState(1); // Start with the second image
    const [opacity, setOpacity] = useState(1); // Start fully opaque
    const images = [
        '/spongebob.jpg',
        '/patrick.jpg',
        '/squidward.jpg',
        '/sandy.jpg',
        '/plankton.jpg',
        '/puff.jpg',
        '/krabs.jpg',
        '/karen.jpg',
        '/larry.jpg'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setOpacity(0);  // Start by fading out the current image
        }, 3000);  // Image changes every 3 seconds

        const transitionEnd = setInterval(() => {
            setCurrentImageIndex(nextImageIndex);
            setNextImageIndex(prevIndex => (prevIndex + 1) % images.length);
            setOpacity(1); // Fade in the new image
        }, 3150); // Delay a bit longer than the fade out time

        return () => {
            clearInterval(interval);
            clearInterval(transitionEnd);
        };
    }, [nextImageIndex, images.length]);


    return (
        <div className='container'>
            <div className='container-hook-text'>
                UNLOCK YOUR POTENTIAL
            </div>
            <div className='container-hook-pictures'>
                <img
                    src={images[currentImageIndex]}
                    alt={`Slide ${currentImageIndex + 1}`}
                    className="fade"
                    style={{ opacity }}
                />
                <img
                    src={images[nextImageIndex]}
                    alt={`Slide ${nextImageIndex + 1}`}
                    className="fade"
                    style={{ opacity: 1 - opacity }}
                />
            </div>
        </div>
    );
}
