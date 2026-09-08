export default function ClassModes() {
  return (
    <section id="modes">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Choose your format</p>
            <h2>Same syllabus, same instructor — pick how you attend.</h2>
          </div>
        </div>
        <div className="modes">
          <div className="mode-card online">
            <div className="mode-label">● ONLINE</div>
            <h3>Live, from anywhere</h3>
            <p>Real-time sessions over video, not pre-recorded — ask questions as you go.</p>
            <ul>
              <li><b>Schedule</b> — Weekday evenings, 2 sessions/week</li>
              <li><b>Duration</b> — 8 weeks</li>
              <li><b>Recordings</b> — Provided for every session</li>
              <li><b>Requires</b> — Laptop + stable internet</li>
            </ul>
          </div>
          <div className="mode-card offline">
            <div className="mode-label">● OFFLINE</div>
            <h3>In-person, Hyderabad</h3>
            <p>Classroom sessions with hands-on lab time and direct instructor support.</p>
            <ul>
              <li><b>Schedule</b> — Weekend batches, 2 sessions/week</li>
              <li><b>Duration</b> — 6 weeks</li>
              <li><b>Lab access</b> — On-site systems provided</li>
              <li><b>Requires</b> — Attendance at our Hyderabad center</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
