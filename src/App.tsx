import { motion } from 'framer-motion'
import Hero from './components/Hero'
import AgentFlow from './components/AgentFlow'
import Features from './components/Features'
import Stats from './components/Stats'
import CTA from './components/CTA'
import Footer from './components/Footer'
import AnimatedShapes from './components/AnimatedShapes'

function App() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* 3D Animated Shapes Background */}
            <AnimatedShapes />

            {/* Background Glow Effect */}
            <div
                style={{
                    position: 'fixed',
                    top: '-50%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.06) 0%, transparent 50%)',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />

            <main style={{ position: 'relative', zIndex: 1 }}>
                <Hero />
                <AgentFlow />
                <Stats />
                <Features />
                <CTA />
                <Footer />
            </main>
        </motion.div>
    )
}

export default App
