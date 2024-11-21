import React, { useEffect, useRef } from 'react';
import Glide from '@glidejs/glide';
import 'glidejs/dist/css/glide.core.min.css';
import Image from 'next/image';

const MyCarousel = () => {
    const glideRef = useRef(null);

    useEffect(() => {
        new Glide(glideRef.current, {
            // Opções de configuração do Glide.js
            type: 'slider',
            startAt: 0,
            perView: 1
        }).mount();
    }, []);

    return (
        <div ref={glideRef} classNameName="glide">
            <div className="glide" data-glide-autoplay="2000">
    <div className="glide__track" data-glide-el="track">
        <div className="glide__slides">
            <div className="glide__slide"><Image src="/logo.png" alt="Image 1" width={'300'} height={'300'} /></div>
            <div className="glide__slide"><Image src="/logo.png" alt="Image 2" width={'300'} height={'300'} /></div>
            <div className="glide__slide"><Image src="/logo.png" alt="Image 3" width={'300'} height={'300'} /></div>
        </div>
    </div>
    <div className="glide__arrows" data-glide-el="controls">
        <button className="glide__prev">prev</button>
        <button className="glide__next">next</button>
    </div>
</div>
        </div>
    );
};

export default MyCarousel;