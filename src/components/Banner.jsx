function Banner({ inProgressCount, resolvedCount }) {
  return (
    <section className="banner">
      <div>
        <h1>Support Dashboard</h1>
        <p>
          Track customer issues, manage active tasks, and resolve tickets efficiently.
        </p>
      </div>

      <div className="banner-stats">
        <div className="stat-card">
          <h3>In Progress</h3>
          <p>{inProgressCount}</p>
        </div>
        <div className="stat-card">
          <h3>Resolved</h3>
          <p>{resolvedCount}</p>
        </div>
      </div>
    </section>
  )
}

export default Banner