export function Education() {
  return (
    <section>
      <h2>Education & Certifications (drone-focused)</h2>
      <div className="grid">
        <div className="card">
          <b>Sonoran Desert Institute (SDI)</b>
          <br />
          <span className="muted">UAS-focused coursework (highlights)</span>
          <ul>
            <li>UAS Fundamentals & FAA Regulations</li>
            <li>Sensors & data workflows</li>
            <li>Flight testing & basic GIS applications</li>
          </ul>
        </div>
        <div className="card">
          <b>Atlantic Cape Community College (ACCC)</b>
          <br />
          <span className="muted">Drone & aviation coursework</span>
          <ul>
            <li>AVIT series: sUAS operations, maintenance & repair</li>
            <li>Remote sensing with UAS</li>
            <li>Intro to GIS (GIST101)</li>
          </ul>
        </div>
        <div className="card">
          <b>Certifications</b>
          <div className="row" style={{ marginTop: "6px" }}>
            <span className="pill">FAA Part 107</span>
            <span className="pill">Private Pilot</span>
            <span className="pill">CPC (FAA)</span>
          </div>
        </div>
      </div>
      <p className="note muted">Detailed course lists available upon request.</p>
    </section>
  )
}
