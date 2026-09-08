const stats = [
  { num: '100', label: 'Hours' },
  { num: '23', label: 'Modules' },
  { num: '50%', label: 'Hands-On' },
  { num: 'Final', label: 'Capstone' },
]

export default function StatsBar() {
  return (
    <div className="wrap">
      <div className="stats">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
