export default function Instructor() {
  return (
    <section id="instructor">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Who's teaching</p>
            <h2>Led by someone who builds this for a living.</h2>
          </div>
        </div>
        <div className="instructor">
          <div className="avatar">A</div>
          <div>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: 20, marginBottom: 10 }}>
              Add your instructor's name here
            </h3>
            <p>
              Replace this paragraph with a short, specific bio — years of experience,
              companies or products worked on, and any GenAI systems shipped to production.
              Concrete details build more trust here than credentials alone.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
