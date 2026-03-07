// function Banner({ inProgressCount, resolvedCount }) {
//   return (
//     <section className="banner">
//       <div>
//         <h1>Support Dashboard</h1>
//         <p>
//           Track customer issues, manage active tasks, and resolve tickets efficiently.
//         </p>
//       </div>

//       <div className="banner-stats">
//         <div className="stat-card">
//           <h3>In Progress</h3>
//           <p>{inProgressCount}</p>
//         </div>
//         <div className="stat-card">
//           <h3>Resolved</h3>
//           <p>{resolvedCount}</p>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Banner

import vector1 from '../assets/vector1.png'
import vector2 from '../assets/vector2.png'

function Banner({ inProgressCount, resolvedCount }) {
  return (
    <section className="banner">
      <div className="banner-cards">
        <div
          className="banner-card"
          style={{
            backgroundImage: `
              linear-gradient(135deg, rgba(66, 42, 213, 0.96), rgba(122, 82, 255, 0.9)),
              url(${vector1})
            `
          }}
        >
          <p className="card-title">In-Progress</p>
          <h2 className="card-count">{inProgressCount}</h2>
        </div>

        <div
          className="banner-card"
          style={{
            backgroundImage: `
              linear-gradient(135deg, rgba(2, 165, 59, 0.96), rgba(0, 137, 120, 0.9)),
              url(${vector2})
            `
          }}
        >
          <p className="card-title">Resolved</p>
          <h2 className="card-count">{resolvedCount}</h2>
        </div>
      </div>
    </section>
  )
}

export default Banner