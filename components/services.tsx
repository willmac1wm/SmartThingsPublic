export function Services() {
  return (
    <section id="services">
      <h2>What I do</h2>
      <div className="grid">
        <article className="card">
          <h3 style={{ marginTop: 0 }}>ATC Technology & Training Consulting</h3>
          <ul>
            <li>Evaluate ATC tech stacks and workflows; prioritize modernization</li>
            <li>Design simulation scenarios (TSS / AT Coach / SGET) & assessment rubrics</li>
            <li>"Back to basics" refreshers: phraseology, PTAC discipline, emergency drills</li>
            <li>Stakeholder facilitation (Ops/QA/Union) with plain-English artifacts</li>
          </ul>
          <p>
            <a className="btn" href="#contact">
              Start a consult
            </a>
          </p>
        </article>

        <article className="card">
          <h3 style={{ marginTop: 0 }}>UAS / Drone Integration & Small Projects</h3>
          <ul>
            <li>COA coordination and local airspace integration (UAS / C-UAS)</li>
            <li>Mapping & progress imagery (orthos), roof/solar inspections</li>
            <li>Post-storm assessment & documentation (visual; thermal optional)</li>
            <li>Compliance: Part 107 ops, checklists, and client COIs</li>
          </ul>
          <p>
            <a className="btn" href="#contact">
              Request UAS scope
            </a>
          </p>
        </article>
      </div>
    </section>
  )
}
