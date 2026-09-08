const topics = [
  {
    label: 'RAG',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="8" width="7" height="8" rx="1.5" />
        <rect x="14" y="8" width="7" height="8" rx="1.5" />
        <path d="M10 12h4" />
      </svg>
    ),
  },
  {
    label: 'AI Agents',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="8" width="14" height="11" rx="2" />
        <circle cx="9.5" cy="13.5" r="1.2" />
        <circle cx="14.5" cy="13.5" r="1.2" />
        <path d="M12 8V4M9 4h6" />
      </svg>
    ),
  },
  {
    label: 'Fine-Tuning',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a9 9 0 100 18 9 9 0 000-18z" />
        <path d="M12 3v18M12 8a4 4 0 010 8" />
      </svg>
    ),
  },
  {
    label: 'LLMOps',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 17a4 4 0 010-8 5 5 0 019.6-1.5A4 4 0 0117 17H7z" />
        <circle cx="12" cy="13" r="1.6" />
        <path d="M12 11.4V10M12 16v-1.4M10.5 13H9M15 13h-1.5" />
      </svg>
    ),
  },
  {
    label: 'Deployment',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 15a4 4 0 010-8 5 5 0 019.6-1.5A4 4 0 0117 15" />
        <path d="M12 12v7M9 16l3-3 3 3" />
      </svg>
    ),
  },
]

export default function TopicsStrip() {
  return (
    <div className="wrap">
      <div className="topics">
        {topics.map((t) => (
          <div className="topic" key={t.label}>
            {t.icon}
            <span>{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
