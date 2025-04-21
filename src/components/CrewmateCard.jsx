import { Link } from 'react-router-dom'

export default function CrewmateCard({ crewmate }) {
  if (!crewmate) return null;

  return (
    <div className="card">
      <div className="card-content">
        <h2>{crewmate.name || 'Unnamed Crewmate'}</h2>
        <div className="crewmate-details">
          {crewmate.speed && <p className="detail">Speed: {crewmate.speed}</p>}
          {crewmate.color && <p className="detail">Color: {crewmate.color}</p>}
          {crewmate.description && (
            <p className="description">{crewmate.description}</p>
          )}
        </div>
        <div className="card-actions">
          <Link to={`/detail/${crewmate.id}`} className="btn">View Details</Link>
        </div>
      </div>
    </div>
  )
}