export default function ClassModes() {
  return (
    <section id="modes" className="alt">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Choose your format</p>
          <h2>Same syllabus, same instructor — pick how you attend.</h2>
        </div>
        <div className="modes">
          <div className="mode-card online">
            <div className="mode-label">● ONLINE</div>
            <h3>Live, from anywhere</h3>
            <p>Real-time weekend sessions over video — ask questions as you go, not a recorded course.</p>
            <ul>
              <li><b>Schedule</b> — Live weekend batch</li>
              <li><b>Duration</b> — 100 hours / 23 modules</li>
              <li><b>Recordings</b> — Provided for every session</li>
              <li><b>Requires</b> — Laptop + stable internet</li>
            </ul>
          </div>
          <div className="mode-card offline">
            <div className="mode-label">● OFFLINE</div>
            <h3>In-person, Hyderabad</h3>
            <p>Classroom sessions with hands-on lab time at our Neredmet X Road center.</p>
            <ul>
              <li><b>Schedule</b> — Live weekend batch</li>
              <li><b>Duration</b> — 100 hours / 23 modules</li>
              <li><b>Location</b> — Neredmet X Road, Hyderabad</li>
              <li><b>Requires</b> — Attendance at our center</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
