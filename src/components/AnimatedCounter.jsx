import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import CountUp from "react-countup";
import { counterItems } from "../constants/index.js";

// Register plugins
gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
    const counterRef = useRef(null);
    const counterItemsRef = useRef([]);

    useGSAP(() => {
        // Save initial styles to prevent flash on load
        ScrollTrigger.saveStyles(".counter-item, .counter-number, .counter-label");

        // Animation for the entire counter section
        gsap.from(counterRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: counterRef.current,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });

        // Animation for each counter item
        counterItemsRef.current.forEach((item) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });

            // Container animation
            tl.from(item, {
                y: 30,
                opacity: 0,
                scale: 0.95,
                duration: 0.6,
                ease: "back.out(1.2)"
            });

            // Number animation
            tl.from(item.querySelector(".counter-number"), {
                y: 20,
                opacity: 0,
                duration: 0.5,
                ease: "power2.out"
            }, "-=0.3");

            // Label animation
            tl.from(item.querySelector(".counter-label"), {
                y: 15,
                opacity: 0,
                duration: 0.4,
                ease: "power2.out"
            }, "-=0.4");
        });

    }, { scope: counterRef });

    // Function to add items to ref array
    const addToRefs = (el) => {
        if (el && !counterItemsRef.current.includes(el)) {
            counterItemsRef.current.push(el);
        }
    };

    return (
        <div id='counter' className='padding-x-lg xl:mt-0 mt-32' ref={counterRef}>
            <div className='mx-auto grid-4-cols'>
                {counterItems.map((item) => (
                    <div 
                        key={item.label} 
                        ref={addToRefs}
                        className="counter-item bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
                    >
                        <div className="counter-number text-white text-5xl font-bold mb-2">
                            <CountUp 
                                suffix={item.suffix} 
                                end={item.value} 
                                duration={2.5}
                                delay={0.5}
                                enableScrollSpy
                                scrollSpyDelay={500}
                                scrollSpyOnce
                            />
                        </div>
                        <div className="counter-label text-white-50 text-lg">
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnimatedCounter;