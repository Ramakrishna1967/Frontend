import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import './CTA.css'

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="container">
                <motion.div
                    className="cta-card"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Background Gradient */}
                    <div className="cta-bg" />

                    <div className="cta-content">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Ready to Meet Your AI Employee?
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Experience the future of autonomous software engineering.
                            No credit card required.
                        </motion.p>

                        <motion.div
                            className="cta-buttons"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <a
                                href="https://construct-ide.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-button primary"
                            >
                                <span>Launch Construct</span>
                                <ArrowRight size={18} />
                            </a>

                            <a
                                href="https://github.com/Ramakrishna1967/Construct"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-button secondary"
                            >
                                View on GitHub
                            </a>
                        </motion.div>
                    </div>

                    {/* Floating Elements */}
                    <motion.div
                        className="floating-element el-1"
                        animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="floating-element el-2"
                        animate={{ y: [10, -10, 10], rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="floating-element el-3"
                        animate={{ y: [-15, 15, -15] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>
            </div>
        </section>
    )
}

export default CTA
