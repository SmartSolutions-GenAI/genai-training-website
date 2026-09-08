const modules = [
  {
    title: 'Python foundations for AI work',
    body: 'A fast, focused refresher — functions, virtual environments, working with APIs and JSON — enough to be dangerous in the modules that follow.',
    tags: ['python', 'venv', 'apis'],
  },
  {
    title: 'How LLMs actually work',
    body: 'Tokens, context windows, temperature, and what a model is really doing when it "generates" — the mental model everything else builds on.',
    tags: ['llms', 'tokens'],
  },
  {
    title: 'Prompting as an engineering skill',
    body: 'Structured prompting, few-shot examples, and output parsing — treating prompts as code you test and version, not guesswork.',
    tags: ['prompting'],
  },
  {
    title: 'Embeddings & semantic search',
    body: 'Turn documents into vectors and build a search tool that understands meaning, not just keywords.',
    tags: ['embeddings', 'vector-db'],
  },
  {
    title: 'Retrieval-Augmented Generation (RAG)',
    body: 'Connect an LLM to your own data so it answers from your documents instead of guessing — the pattern behind most real GenAI products.',
    tags: ['rag', 'langchain'],
  },
  {
    title: 'Agents & tool use',
    body: 'Give a model the ability to call functions, hit APIs, and take multi-step actions on its own.',
    tags: ['agents', 'tool-calling'],
  },
  {
    title: 'Capstone project',
    body: 'Build and present a complete GenAI application end to end, with guidance from your instructor.',
    tags: ['capstone'],
  },
]

export default function Curriculum() {
  return (
    <section id="curriculum">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Curriculum</p>
            <h2>Seven modules, one working project at the end of each.</h2>
          </div>
        </div>
        <div>
          {modules.map((m, i) => (
            <div className="module" key={m.title}>
              <div className="module-num">{String(i + 1).padStart(2, '0')}</div>
              <div>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
                <div className="module-tags">
                  {m.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
