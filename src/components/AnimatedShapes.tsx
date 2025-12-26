import { motion } from 'framer-motion'
import './AnimatedShapes.css'

const AnimatedShapes = () => {
    return (
        <div className="animated-shapes">
            {/* Floating 3D Cube */}
            <motion.div
                className="shape cube-container"
                animate={{
                    y: [-20, 20, -20],
                    rotateY: [0, 360],
                    rotateX: [0, 360]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <div className="cube">
                    <div className="face front" />
                    <div className="face back" />
                    <div className="face right" />
                    <div className="face left" />
                    <div className="face top" />
                    <div className="face bottom" />
                </div>
            </motion.div>

            {/* Second Cube - Smaller */}
            <motion.div
                className="shape cube-container cube-2"
                animate={{
                    y: [15, -15, 15],
                    rotateY: [360, 0],
                    rotateZ: [0, 180, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
                <div className="cube small">
                    <div className="face front" />
                    <div className="face back" />
                    <div className="face right" />
                    <div className="face left" />
                    <div className="face top" />
                    <div className="face bottom" />
                </div>
            </motion.div>

            {/* Third Cube */}
            <motion.div
                className="shape cube-container cube-3"
                animate={{
                    y: [-10, 25, -10],
                    rotateX: [0, 360],
                    rotateZ: [0, -180, 0]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
                <div className="cube tiny">
                    <div className="face front" />
                    <div className="face back" />
                    <div className="face right" />
                    <div className="face left" />
                    <div className="face top" />
                    <div className="face bottom" />
                </div>
            </motion.div>

            {/* Floating Rings */}
            <motion.div
                className="shape ring ring-1"
                animate={{ rotateX: [0, 360], rotateY: [0, 180] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
                className="shape ring ring-2"
                animate={{ rotateX: [360, 0], rotateZ: [0, 360] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
                className="shape ring ring-3"
                animate={{ rotateY: [0, 360], rotateZ: [180, 0, 180] }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            />

            {/* Floating Spheres */}
            <motion.div
                className="shape sphere sphere-1"
                animate={{ y: [-30, 30, -30], x: [-10, 10, -10] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="shape sphere sphere-2"
                animate={{ y: [20, -20, 20], x: [15, -15, 15] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="shape sphere sphere-3"
                animate={{ y: [-15, 25, -15], scale: [1, 1.1, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="shape sphere sphere-4"
                animate={{ y: [10, -30, 10], x: [-20, 20, -20] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="shape sphere sphere-5"
                animate={{ y: [-25, 15, -25], scale: [0.9, 1.15, 0.9] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating Diamonds */}
            <motion.div
                className="shape diamond diamond-1"
                animate={{ y: [-20, 20, -20], rotateZ: [0, 180, 360] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="shape diamond diamond-2"
                animate={{ y: [15, -25, 15], rotateZ: [360, 180, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="shape diamond diamond-3"
                animate={{ y: [-10, 30, -10], rotateZ: [0, -180, -360] }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating Triangles */}
            <motion.div
                className="shape triangle triangle-1"
                animate={{ y: [-15, 20, -15], rotateZ: [0, 120, 240, 360] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
                className="shape triangle triangle-2"
                animate={{ y: [20, -15, 20], rotateZ: [360, 240, 120, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Glowing Orbs */}
            <motion.div
                className="shape orb orb-1"
                animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="shape orb orb-2"
                animate={{ opacity: [0.5, 0.8, 0.5], scale: [1.1, 0.9, 1.1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="shape orb orb-3"
                animate={{ opacity: [0.4, 0.6, 0.4], scale: [0.95, 1.1, 0.95] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating Lines */}
            <motion.div
                className="shape line line-1"
                animate={{ y: [-10, 10, -10], rotateZ: [0, 5, -5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="shape line line-2"
                animate={{ y: [15, -15, 15], rotateZ: [0, -5, 5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Dots Grid */}
            <div className="dots-grid">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="dot"
                        animate={{ opacity: [0.2, 0.6, 0.2], scale: [0.8, 1.2, 0.8] }}
                        transition={{
                            duration: 3 + (i % 3),
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default AnimatedShapes
