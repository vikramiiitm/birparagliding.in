import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import VineetImg from '../../../public/testimonialsImgs/vineet.jpg';
import ApurvaImg from '../../../public/testimonialsImgs/Apurva.jpg';
import VikramImg from '../../../public/testimonialsImgs/Vikram.jpg';

const testimonials = [
    {
        img: VineetImg,
        name: 'Vineet',
        review: 'This was my first paragliding experience, and I was both nervous and excited. As soon as I started gliding through the winds, it felt like I was flying and time slowed down. A big thank you to Sky Candy for ensuring my safety throughout the entire journey.',
    },
    {
        img: ApurvaImg,
        name: 'Apurva',
        review: `Had an incredible experience with pilot Sunny! His exceptional handling skills and extensive experience truly made it an awesome adventure. Paragliding had always been a dream of mine, and finally taking the plunge with him was beyond words. The sensation of flying was surreal! Every aspect of the experience was simply outstanding.`,
    },
    {
        img: VikramImg,
        name: 'Vikram',
        review: `Best flying experience. Gliders were helpful and made sure we have the best time flying. Sky Candy is the best in Bir.`,
    },
    {
        img: VikramImg,
        name: 'Vikram',
        review: `Best flying experience. Gliders were helpful and made sure we have the best time flying. Sky Candy is the best in Bir.`,
    },
    {
        img: VikramImg,
        name: 'Vikram',
        review: `Best flying experience. Gliders were helpful and made sure we have the best time flying. Sky Candy is the best in Bir.`,
    },
];

function EmblaCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        if (emblaApi) {
            const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
            emblaApi.on('select', onSelect);
            onSelect(); // Initialize index on mount
        }
    }, [emblaApi]);

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    return (
        <div className="relative  max-w-[90rem] mx-auto overflow-hidden h-[70vh] flex items-center">
            <div className="embla" ref={emblaRef}>
                <div className="flex gap-4">
                    {testimonials.map((testimonial, index) => (
                        <div
                            className={`embla__slide transition-transform duration-300 ${index === selectedIndex+1 ? 'scale-105' : ''
                                }`}
                            key={index}
                        >
                            <Card className="h-[50vh] w-[30vw] p-4 bg-gradient-to-b from-[#E8AF30] to-[#ebc145a4] rounded">
                                <CardContent className="flex flex-col items-center justify-center gap-2 p-4">
                                    <div className="flex flex-col items-center justify-center">
                                        <Image
                                            src={testimonial.img}
                                            width={1000}
                                            height={1000}
                                            alt={testimonial.name}
                                            className="w-32 h-32 rounded-full object-cover object-center"
                                        />
                                        <p className="text-md font-bold">{testimonial.name}</p>
                                    </div>
                                    <p className="text-sm italic">
                                        <q>{testimonial.review}</q>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white shadow-md rounded-full"
                onClick={scrollPrev}
            >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white shadow-md rounded-full"
                onClick={scrollNext}
            >
                <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
        </div>
    );
}

export default EmblaCarousel;
