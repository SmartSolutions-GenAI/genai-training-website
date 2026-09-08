const tracks = [
  {
    num: '01',
    title: 'RAG',
    body: 'Connect an LLM to your own documents and data so it answers from real sources instead of guessing.',
  },
  {
    num: '02',
    title: 'AI Agents',
    body: 'Give a model the ability to call functions, use tools, and take multi-step actions on its own.',
  },
  {
    num: '03',
    title: 'Fine-Tuning',
    body: 'Adapt a model to your own use case and data instead of relying only on prompting.',
  },
  {
    num: '04',
    title: 'LLMOps',
    body: 'Monitor, evaluate, and manage AI systems responsibly once they are running.',
  },
  {
    num: '05',
    title: 'Deployment',
    body: 'Ship what you build — take a working prototype to a live, usable application.',
  },
]

export default function Curriculum() {
  return (
    <section id="curriculum">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Curriculum</p>
          <h2>23 modules across five tracks, 100 hours total.</h2>
          <p style={{ marginTop: 14 }}>
            Every track builds toward the final capstone project, where you design
            and ship a complete GenAI application end to end.
          </p>
        </div>
        <div className="track-grid">
          {tracks.map((t) => (
            <div className="track-card" key={t.num}>
              <div className="fact-num">{t.num}</div>
              <h3>{t.title}</h3>
              <p>{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
