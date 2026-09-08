import { useEffect, useState } from 'react'

const CODE = `from openai import OpenAI

client = OpenAI()
reply = client.responses.create(
    model="gpt-4.1",
    input="Explain embeddings in one line"
)
print(reply.output_text)`

const OUTPUT = `Embeddings turn text into numbers that
capture meaning, so similar ideas end up
close together in vector space.`

export default function Hero() {
  const [typed, setTyped] = useState('')
  const [showOutput, setShowOutput] = useState(false)

  useEffect(() => {
    let i = 0
    const t = setInterval(() => {
      i++
      setTyped(CODE.slice(0, i))
      if (i >= CODE.length) {
        clearInterval(t)
        setTimeout(() => setShowOutput(true), 400)
      }
    }, 14)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="hero">
      <div className="wrap">
        <div>
          <p className="eyebrow">Cohort-based training · Hyderabad &amp; live online</p>
          <h1>Learn to build with Generative AI, in Python.</h1>
          <p className="lede">
            A hands-on course for developers who want to go from "I've used ChatGPT"
            to shipping real GenAI applications — prompting, embeddings, RAG, and agents,
            taught through code you write yourself.
          </p>
          <div className="hero-ctas">
            <a href="#enroll" className="btn btn-primary">Reserve a seat</a>
            <a href="#curriculum" className="btn btn-ghost">See the curriculum</a>
          </div>
          <p className="hero-note">No prior AI experience required · Basic Python helpful, not mandatory</p>
        </div>

        <div className="terminal">
          <div className="terminal-bar">
            <span></span><span></span><span></span>
          </div>
          <div className="terminal-body">
            <p className="line"><span className="prompt">$</span> python explain_embeddings.py</p>
            <p className="line">{typed}{typed.length < CODE.length && <span className="cursor" />}</p>
            {showOutput && (
              <p className="line out">{OUTPUT}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
