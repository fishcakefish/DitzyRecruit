import { useState, useEffect } from 'react'
import './Home.css'
import SpongebobPortrait from '../../assets/images/spongebob.jpg'
import PatrickPortrait from '../../assets/images/patrick.jpg'
import SquidwardPortrait from '../../assets/images/squidward.jpg'
import SandyPortrait from '../../assets/images/sandy.jpg'
import PlanktonPortrait from '../../assets/images/plankton.jpg'
import PuffPortrait from '../../assets/images/puff.jpg'
import KrabsPortrait from '../../assets/images/krabs.jpg'
import KarenPortrait from '../../assets/images/karen.jpg'
import LarryPortrait from '../../assets/images/larry.jpg'

export default function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [nextImageIndex, setNextImageIndex] = useState(1); // Start with the second image
    const [opacity, setOpacity] = useState(1); // Start fully opaque
    const images = [
        SpongebobPortrait,
        PatrickPortrait,
        SquidwardPortrait,
        SandyPortrait,
        PlanktonPortrait,
        PuffPortrait,
        KrabsPortrait,
        KarenPortrait,
        LarryPortrait
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
                <div className='container-hook-text-upper'>
                    <h1>UNLOCK</h1>
                </div>
                <div className='container-hook-text-lower'>
                    <h1>YOUR POTENTIAL</h1>
                </div>
            </div>
            <div className='container-hook-pictures'>
                <div className='container-hook-pictures-pictures'>
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
        </div>
    );
}
