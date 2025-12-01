import React, { use } from 'react'
import { useRef } from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {useGSAP} from '@gsap/react'
gsap.registerPlugin(ScrollTrigger);




const ShowCaseSection = () => { 
    const sectionref = useRef(null);
const project1ref = useRef(null);
const project2ref = useRef(null);
const project3ref = useRef(null);


useGSAP(() => {
    gsap.fromTo(sectionref.current,
         {opacity:0}, 
         {opacity:1, duration:1,})
},[])
    return (
        <section id='work' ref={sectionref} className='app-showcase'>
            <div className='w-full'>
                <div className='showcaselayout'>
                    {/* left-side */}
                    <div className='frist-project-wrapper' ref={project1ref}>
                        <div className='image-wrapper'>
                            <img src="/images/project1.png" alt="showcase1" />
                            <div className='text-content'>
                                <h2>Project TTitle</h2>
                                <p className='text-white-50 md:text-xl' >
                                    A brief description of the project highlighting key features and technologies used.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* right-side */}
                    <div className='project-list-wrapper overflow-hidden'>
                        <div className='project' ref={project2ref}>
                            <div className='image-wrapper bg-[#ffefdb]'>
                                <img src="/images/project2.png" alt="showcase2" />
                            </div>
                            <h2>Project Title 2</h2>
                        </div>

                        <div className='project' ref={project3ref}>
                            <div className='image-wrapper bg-[#ffe7db]'>
                                <img src="/images/project3.png" alt="showcase3" />
                            </div>
                            <h2>Project Title 3</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowCaseSection