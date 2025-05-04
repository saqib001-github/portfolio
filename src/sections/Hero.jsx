import React, { useRef } from 'react'
import { words } from '../constants'
import Button from '../components/Button'
import HeroExperience from '../components/HeroModels/HeroExperience'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedCounter from '../components/AnimatedCounter'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    const heroRef = useRef(null)
    const textContainerRef = useRef(null)
    
    useGSAP(() => {
        // First disable all ScrollTriggers during initial load
        ScrollTrigger.saveStyles(".hero-text, .hero-description, #button, .hero-3d-layout");
        
        // Master timeline for initial animations
        const tl = gsap.timeline({
            defaults: { ease: 'power3.out' }
        })
        
        // Background animation
        gsap.fromTo('.hero-bg', 
            { scale: 1.2, opacity: 0 },
            { 
                scale: 1, 
                opacity: 1, 
                duration: 1.5,
                ease: 'sine.inOut'
            }
        )
        
        // Text animation - initial load only
        tl.fromTo('.hero-text h1', 
            { 
                y: 80,
                opacity: 0,
                skewY: 5
            },
            { 
                y: 0,
                opacity: 1,
                skewY: 0,
                stagger: 0.15,
                duration: 1.2
            },
            "+=0.2"
        )
        
        // Word slider animation
        tl.fromTo('.slide .wrapper span', 
            { 
                y: 50,
                opacity: 0,
                rotationX: 45
            },
            { 
                y: 0,
                opacity: 1,
                rotationX: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: 'back.out(1.7)'
            },
            "-=0.8"
        )
        
        // Button animation
        tl.fromTo('#button', 
            { 
                y: 30,
                opacity: 0,
                scale: 0.95
            },
            { 
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: 'elastic.out(1, 0.5)'
            },
            "-=0.5"
        )
        
        // Description text animation
        tl.fromTo('.hero-description', 
            { 
                x: -20,
                opacity: 0,
                filter: 'blur(2px)'
            },
            { 
                x: 0,
                opacity: 1,
                filter: 'blur(0px)',
                duration: 0.8
            },
            "-=0.7"
        )
        
        // 3D model animation
        tl.fromTo('.hero-3d-layout', 
            { 
                opacity: 0,
                scale: 0.9,
                rotationY: 15
            },
            { 
                opacity: 1,
                scale: 1,
                rotationY: 0,
                duration: 1.5,
                ease: 'power3.out'
            },
            "-=1"
        )

        // After initial animations complete, set up scroll effects
        tl.call(() => {
            // ScrollTrigger animations - only affect elements after they've animated in
            gsap.to('.hero-text h1', {
                y: -50,
                opacity: 0.7, // Changed from 0.5 for better visibility
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                    markers: false, // Set to true for debugging if needed
                    onUpdate: (self) => {
                        // Ensure opacity doesn't go below 0.7 when scrolling down
                        if (self.direction === 1 && self.progress > 0.5) {
                            gsap.to('.hero-text h1', { opacity: 0.7 - (self.progress - 0.5) * 0.7 })
                        }
                    },
                    onLeaveBack: () => {
                        // Reset to full opacity when scrolling back to top
                        gsap.to('.hero-text h1', { opacity: 1, duration: 0.5 })
                    }
                }
            })
            
            gsap.to('.hero-3d-layout', {
                y: 100,
                rotationY: 5,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1
                }
            })

            // Add this to prevent content from disappearing when scrolling back up
            ScrollTrigger.create({
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                onEnterBack: () => {
                    gsap.to('.hero-text h1', { 
                        y: 0, 
                        opacity: 1,
                        duration: 0.5 
                    })
                }
            })
        })

    }, { scope: heroRef })

    return (
        <section id='hero' className='relative overflow-hidden' ref={heroRef}>
            <div className='hero-bg absolute top-0 left-0 z-10 w-full h-full'>
                <img 
                    src="/images/bg.png" 
                    alt="background" 
                    className='object-cover'
                />
            </div>
            
            <div className='hero-layout relative z-20'>
                <header 
                    className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'
                    ref={textContainerRef}
                >
                    <div className='flex flex-col gap-7'>
                        <div className='hero-text'>
                            <h1>Shaping
                                <span className='slide inline-block overflow-hidden h-[1.2em] align-bottom'>
                                    <span className='wrapper inline-block'>
                                        {words.map(word => (
                                            <span 
                                                key={word.text} 
                                                className='flex items-center md:gap-3 gap-1 pb-2'
                                            >
                                                <img 
                                                    src={word.imgPath} 
                                                    alt={word.text} 
                                                    className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50' 
                                                />
                                                <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1>into Real Projects</h1>
                            <h1>that Deliver Results</h1>
                        </div>
                        
                        <p className='hero-description text-white-50 md:text-xl relative z-10 pointer-events-none'>
                            Hi, I'm Mohd Saqib, a developer based in Meerut with a passion for code.
                        </p>
                        
                        <Button 
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="button"
                            text="See my Work"
                        />
                    </div>
                </header>
                
                <figure>
                    <div className='hero-3d-layout'>
                        <HeroExperience/>
                    </div>
                </figure>
            </div>
            
            <AnimatedCounter />
        </section>
    )
}

export default Hero