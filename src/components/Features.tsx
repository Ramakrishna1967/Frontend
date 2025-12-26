import { motion } from 'framer-motion'
import { Zap, Database, Bug } from 'lucide-react'
import './Features.css'

const features = [
    {
        icon: Zap,
        title: 'Real-Time Streaming',
        description: 'Watch the code being written token-by-token via WebSockets. No waiting, just watching the AI think.',
    },
    {
        icon: Database,
        title: 'Context Aware',
        description: 'Deep understanding of your entire codebase via Vector Database integration. It knows your patterns.',
    },
    {
        icon: Bug,
        title: 'Self-Correcting',
        description: 'The Reviewer agent actively finds and fixes bugs before deployment. Quality built in, not bolted on.',
    },
]

const Features = () => {
    return (
        <section className="features" id="features">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>
                        Built for <span className="gradient-text">Production</span>
                    </h2>
                    <p>
                        Enterprise-grade features that make the difference between a demo and a product.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            className="feature-card glass"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            whileHover={{ y: -8 }}
                        >
                            <div className="feature-icon">
                                <feature.icon size={24} />
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
