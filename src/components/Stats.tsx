import { motion } from 'framer-motion'
import { Check, Terminal, Globe, Lock, Cpu, Layers } from 'lucide-react'
import './Stats.css'

const stats = [
    { value: '5', label: 'AI Agents', icon: Cpu },
    { value: '100%', label: 'Autonomous', icon: Terminal },
    { value: 'Real-Time', label: 'Streaming', icon: Globe },
    { value: 'Secure', label: 'Sandboxed', icon: Lock },
]

const benefits = [
    'Multi-agent orchestration with LangGraph',
    'Real-time WebSocket code streaming',
    'Vector database for context awareness',
    'Self-reviewing code with Reviewer agent',
    'Docker sandbox for safe execution',
    'Redis for persistent state management',
]

const Stats = () => {
    return (
        <section className="stats" id="stats">
            <div className="container">
                {/* Stats Grid */}
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="stat-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="stat-icon">
                                <stat.icon size={24} />
                            </div>
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Benefits Section */}
                <motion.div
                    className="benefits-section"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="benefits-content">
                        <div className="benefits-text">
                            <h2>
                                Built with <span className="gradient-text">Production</span> in Mind
                            </h2>
                            <p>
                                Every component is designed for real-world deployment.
                                No demos, no prototypes—just production-ready AI engineering.
                            </p>
                        </div>

                        <div className="benefits-list">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit}
                                    className="benefit-item"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.08 }}
                                >
                                    <div className="benefit-check">
                                        <Check size={16} />
                                    </div>
                                    <span>{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* 3D Visual */}
                    <div className="benefits-visual">
                        <motion.div
                            className="tech-stack-visual"
                            animate={{ rotateY: [0, 360] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <Layers size={120} strokeWidth={0.5} />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Stats
