import React, { useRef, useState, Suspense } from 'react';
import { useGSAP } from '@gsap/react';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';
import { toast } from 'react-hot-toast';
import { Canvas } from '@react-three/fiber';
import TitleHeader from '../components/TitleHeader.jsx';
import { Computer } from '../components/models/Computer-optimized.jsx';
import { OrbitControls } from '@react-three/drei';


const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);

    useGSAP(() => {
        gsap.fromTo(".contact-animate",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.9,
                stagger: 0.2,
                ease: "power2.inout",
                scrollTrigger: {
                    trigger: "#contact",
                    start: "top 80%",
                }
            }
        );
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate email format
        const emailValue = formRef.current.email.value;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|org|net|edu|io|co\.in|co\.uk)$/i;
        if (!emailRegex.test(emailValue)) {
            toast.error("Please enter a valid email address (e.g. name@gmail.com, name@outlook.com)");
            return;
        }

        // Validate message character count (minimum 15 characters)
        const messageValue = formRef.current.message.value;
        if (messageValue.trim().length < 20) {
            toast.error("Please write a message with at least 15 characters.");
            return;
        }

        setLoading(true);

        emailjs
            .sendForm(
                'service_o9n9iok',
                'template_iqlrwtd',
                formRef.current,
                { publicKey: 'RXb39Sfep8erbSCW_' }
            )
            .then(
                () => {
                    setLoading(false);
                    toast.success("Message sent successfully!");
                    if (formRef.current) formRef.current.reset();
                },
                (error) => {
                    setLoading(false);
                    console.error('EmailJS Error:', error);
                    toast.error(`Error: ${error?.text || error?.message || "Something went wrong"}`);
                }
            );
    };

    return (
        <section id="contact" className="relative w-full py-20 bg-black text-white">
            <div className="max-w-7xl mx-auto px-5 lg:px-10 flex flex-col gap-10">
                {/* Header */}
                <div className="contact-animate">
                    <TitleHeader
                        sub="💼 Contact Information"
                        title="Get In Touch With Me"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    {/* Left Box: Form */}
                    <div className="col-span-1 lg:col-span-2 bg-[#1C1C21] rounded-2xl p-6 md:p-8 contact-animate">
                        <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-sm font-semibold">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="bg-[#2A2B38] rounded-md p-3 text-white focus:outline-none focus:ring-1 focus:ring-white transition-all text-sm"
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-sm font-semibold">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="bg-[#2A2B38] rounded-md p-3 text-white focus:outline-none focus:ring-1 focus:ring-white transition-all text-sm"
                                    placeholder="Your email address"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-sm font-semibold">Message</label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    required
                                    className="bg-[#2A2B38] rounded-md p-3 text-white focus:outline-none focus:ring-1 focus:ring-white transition-all resize-none text-sm"
                                    placeholder="Your message"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-white text-black font-semibold rounded-md py-3 mt-4 hover:bg-gray-200 transition-colors flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'SENDING...' : 'SEND MESSAGE'}
                            </button>
                        </form>
                    </div>

                    {/* Right Box: 3D Canvas */}
                    <div className="col-span-1 lg:col-span-3 bg-[#D48D4B] rounded-2xl overflow-hidden relative contact-animate h-[350px] md:h-[500px] lg:h-auto lg:min-h-[500px]">
                        <Canvas shadows camera={{ position: [0, 3, 7], fov: 45 }}>
                            <ambientLight intensity={0.5} color="#fff436" />
                            <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd8b3" />
                            <directionalLight
                                position={[5, 9, 1]}
                                castShadow
                                intensity={2.5}
                                color="#ffd9b3"
                                shadow-mapSize={[1024, 1024]}
                            >
                                <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10, 0.1, 50]} />
                            </directionalLight>

                            <OrbitControls
                                enableZoom={false}
                                enablePan={false}
                                minPolarAngle={Math.PI / 5}
                                maxPolarAngle={Math.PI / 2}
                            />

                            <Suspense fallback={null}>
                                <group scale={0.03} position={[0, -1.5, -2]}>
                                    <Computer />
                                </group>
                            </Suspense>

                            <mesh receiveShadow position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                                <planeGeometry args={[30, 30]} />
                                <meshStandardMaterial color="#a46b2d" />
                            </mesh>
                        </Canvas>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
