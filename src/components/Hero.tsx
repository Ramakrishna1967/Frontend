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


            </div>
        </section>
    )
}

export default Hero
