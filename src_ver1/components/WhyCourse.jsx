const points = [
  {
    num: '01',
    title: 'Built around real projects',
    body: 'Every module ends with something working — a chatbot, a document Q&A tool, an agent — not just slides.',
  },
  {
    num: '02',
    title: 'Taught by practitioners',
    body: 'Sessions are run by engineers who build GenAI systems in production, not just researchers.',
  },
  {
    num: '03',
    title: 'Two ways to attend',
    body: 'Join live from anywhere, or sit in the Hyderabad classroom — same syllabus, same instructor.',
  },
]

export default function WhyCourse() {
  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Why this course</p>
            <h2>Practical training, not a lecture series.</h2>
          </div>
        </div>
        <div className="grid-3">
          {points.map((p) => (
            <div key={p.num}>
              <div className="fact-num">{p.num}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
