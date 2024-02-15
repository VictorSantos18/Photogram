import React from 'react';
import './carroussel.css';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { CarrousselInfo } from '../../components/storys/Data';
import Avatar from './Avatar';

const Carousel: React.FC = () => {
    const handleSlide = (direction: 'left' | 'right'): void => {
        const slider = document.getElementsByClassName('carousel-body')[0] as HTMLDivElement;
        if (direction === "left")
            slider.scrollBy(-400, 0);
        else
            slider.scrollBy(400, 0);
    }

    return (
        <section className='check'>
            <div className='arrow-btn left-icon' onClick={() => handleSlide('left')}>
                <ChevronLeft />
            </div>
            <div className='arrow-btn right-icon' onClick={() => handleSlide('right')} >
                <ChevronRight />
            </div>
            <div className="carousel-body">
                {CarrousselInfo.map((item, index) => (
                    <Avatar key={index} image={item} />
                ))}
            </div>
        </section>
    );
}

export default Carousel;
