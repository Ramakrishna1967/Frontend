import { motion } from 'framer-motion'
import { Brain, Compass, Search, Code2, Shield } from 'lucide-react'
import './AgentFlow.css'

const agents = [
    {
        id: 'supervisor',
        name: 'Supervisor',
        role: 'The Orchestrator',
        icon: Brain,
        color: '#6366f1',
    },
    {
        id: 'planner',
        name: 'Planner',
        role: 'The Strategist',
        icon: Compass,
        color: '#8b5cf6',
    },
    {
        id: 'researcher',
        name: 'Researcher',
        role: 'The Context Gatherer',
        icon: Search,
        color: '#a855f7',
    },
    {
        id: 'coder',
        name: 'Coder',
        role: 'The Builder',
        icon: Code2,
        color: '#c084fc',
    },
    {
        id: 'reviewer',
        name: 'Reviewer',
        role: 'The Quality Control',
        icon: Shield,
        color: '#e879f9',
    },
]

const AgentFlow = () => {
    return (
        <section className="agent-flow" id="how-it-works">
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
                        The <span className="gradient-text">Brain</span> Behind the Build
                    </h2>
                    <p>
                        5 specialized AI agents work together in a coordinated workflow,
                        each with a unique role in the software development lifecycle.
                    </p>
                </motion.div>

                {/* Agent Flow Container */}
                <div className="flow-container">
                    {/* Flow Lines (SVG) */}
                    <svg className="flow-lines" viewBox="0 0 1000 200">
                        <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
                                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
                                <stop offset="100%" stopColor="#e879f9" stopOpacity="0" />
                            </linearGradient>
                        </defs>

                        {/* Connecting Lines */}
                        <motion.path
                            d="M 100 100 Q 250 50, 300 100 Q 350 150, 500 100 Q 650 50, 700 100 Q 750 150, 900 100"
                            fill="none"
                            stroke="url(#lineGradient)"
                            strokeWidth="2"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />

                        {/* Animated Signal */}
                        <motion.circle
                            r="6"
                            fill="#6366f1"
                            filter="url(#glow)"
                            initial={{ offsetDistance: '0%' }}
                            animate={{ offsetDistance: '100%' }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            style={{
                                offsetPath: 'path("M 100 100 Q 250 50, 300 100 Q 350 150, 500 100 Q 650 50, 700 100 Q 750 150, 900 100")',
                            }}
                        />

                        <defs>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                    </svg>

                    {/* Agent Cards */}
                    <div className="agents-grid">
                        {agents.map((agent, index) => (
                            <motion.div
                                key={agent.id}
                                className="agent-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                style={{ '--agent-color': agent.color } as React.CSSProperties}
                            >
                                <div className="agent-icon">
                                    <agent.icon size={28} />
                                </div>
                                <h3>{agent.name}</h3>
                                <p>{agent.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AgentFlow
