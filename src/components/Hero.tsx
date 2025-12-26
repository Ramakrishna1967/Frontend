import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                {/* Badge */}
                <motion.div
                    className="hero-badge"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <span className="badge-dot" />
                    Autonomous AI Engineering
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    className="hero-headline"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Your First{' '}
                    <span className="gradient-text">Autonomous</span>
                    <br />
                    AI Employee
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    className="hero-subheadline"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Stop chatting with AI. Start managing it.
                    <br />
                    Construct plans, researches, and builds code autonomously.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <a
                        href="https://construct-ide.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-cta"
                    >
                        <span>Launch App</span>
                        <ArrowRight size={18} />
                    </a>
                </motion.div>

                {/* Laptop Frame with Video */}
                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div className="laptop-frame">
                        <div className="laptop-screen">
                            {/* Browser Chrome */}
                            <div className="browser-chrome">
                                <div className="browser-dots">
                                    <span className="dot red" />
                                    <span className="dot yellow" />
                                    <span className="dot green" />
                                </div>
                                <div className="browser-url">
                                    <span>construct-ide.vercel.app</span>
                                </div>
                            </div>

                            {/* Demo Video */}
                            <div className="video-wrapper">
                                <video
                                    className="hero-video"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                >
                                    <source src="https://videos.pexels.com/video-files/5483077/5483077-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                        <div className="laptop-base" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
