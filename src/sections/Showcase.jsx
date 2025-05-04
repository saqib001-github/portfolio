import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    const headingRef = useRef(null);
    
    useGSAP(() => {
        // Section fade in
        gsap.fromTo(sectionRef.current,
            { opacity: 0, y: 20 },
            { 
                opacity: 1, 
                y: 0,
                duration: 1.5,
                ease: "power2.out"
            }
        );

        // Heading animation
        gsap.fromTo(headingRef.current,
            { 
                opacity: 0,
                y: 30,
                skewY: 3
            },
            {
                opacity: 1,
                y: 0,
                skewY: 0,
                duration: 1,
                delay: 0.3,
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 80%"
                }
            }
        );

        // Project animations
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
        
        projects.forEach((card, index) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom-=100",
                    toggleActions: "play none none none"
                }
            });
            
            // Card container animation
            tl.fromTo(card,
                {
                    y: 80,
                    opacity: 0,
                    rotationX: 10,
                    transformOrigin: "center top"
                },
                {
                    y: 0,
                    opacity: 1,
                    rotationX: 0,
                    duration: 1,
                    delay: 0.15 * index,
                    ease: "back.out(1.2)"
                }
            );
            
            // Image animation
            tl.fromTo(card.querySelector('.image-wrapper'),
                {
                    scale: 1.1,
                    opacity: 0,
                    filter: "brightness(120%)"
                },
                {
                    scale: 1,
                    opacity: 1,
                    filter: "brightness(100%)",
                    duration: 1.2,
                    ease: "power2.out"
                },
                "-=0.8"
            );
            
            // Text content animation (for project1)
            if (index === 0) {
                tl.fromTo(card.querySelector('.text-content'),
                    {
                        y: 30,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.1
                    },
                    "-=0.6"
                );
            } else {
                // For other projects
                tl.fromTo(card.querySelector('h2'),
                    {
                        y: 20,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6
                    },
                    "-=0.5"
                );
            }
        });

        // Add continuous subtle animation to project cards on hover
        projects.forEach(card => {
            if (!card) return;
            
            card.addEventListener('mouseenter', () => {
                gsap.to(card.querySelector('.image-wrapper img'), {
                    scale: 1.03,
                    duration: 0.5,
                    ease: "power2.out"
                });
            });
            
            card.addEventListener('mouseleave', () => {
                gsap.to(card.querySelector('.image-wrapper img'), {
                    scale: 1,
                    duration: 0.5,
                    ease: "power2.out"
                });
            });
        });

    }, { scope: sectionRef });

    return (
        <section id='work' className='app-showcase py-20' ref={sectionRef}>
            <div className='w-full px-5 md:px-20'>
                <h2 className='text-4xl md:text-5xl font-bold mb-16' ref={headingRef}>
                    Featured Projects
                </h2>
                
                <div className='showcaselayout'>
                    {/* Left - Main Project */}
                    <div 
                        className='first-project-wrapper group' 
                        ref={project1Ref}
                    >
                        <div className='image-wrapper overflow-hidden rounded-xl'>
                            <img 
                                src="/images/project1.png" 
                                alt="Ryde" 
                                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                            />
                        </div>
                        <div className='text-content mt-6'>
                            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                                On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde
                            </h2>
                            <p className='text-white-50 md:text-xl'>
                                An app built with React Native, Expo, & TailwindCSS for a fast, user-friendly experience.  
                            </p>
                        </div>
                    </div>
                    
                    {/* Right - Project List */}
                    <div className='project-list-wrapper overflow-hidden space-y-10'>
                        <div 
                            className='project group' 
                            ref={project2Ref}
                        >
                            <div className='image-wrapper bg-[#ffefdb] overflow-hidden rounded-xl'>
                                <img 
                                    src="/images/project2.png" 
                                    alt="Library Management Platform" 
                                    className='w-full h-full object-contain transition-transform duration-500 group-hover:scale-105'
                                />
                            </div>
                            <h2 className='text-2xl md:text-3xl font-bold mt-4'>
                                Library Management Platform
                            </h2>
                        </div>
                        
                        <div 
                            className='project group' 
                            ref={project3Ref}
                        >
                            <div className='image-wrapper bg-[#ffefdb] overflow-hidden rounded-xl'>
                                <img 
                                    src="/images/project3.png" 
                                    alt="YC Directory" 
                                    className='w-full h-full object-contain transition-transform duration-500 group-hover:scale-105'
                                />
                            </div>
                            <h2 className='text-2xl md:text-3xl font-bold mt-4'>
                                YC Directory - A Startup Showcase App
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Showcase;