// File: src/pages/Detail.jsx
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../supabaseClient'

export default function CrewmateDetail() {
  const { id } = useParams()
  const [crewmate, setCrewmate] = useState(null)

  useEffect(() => {
    fetchCrewmate()
  }, [])

  async function fetchCrewmate() {
    const { data } = await supabase.from('crewmates').select('*').eq('id', id).single()
    setCrewmate(data)
  }

  return crewmate ? (
    <div className="container detail-page">
      <h1 className="detail-name">{crewmate.name}</h1>
      <div className="detail-info">
        <p><strong>Role:</strong> {crewmate.role}</p>
        <p><strong>Created At:</strong> {new Date(crewmate.created_at).toLocaleString()}</p>
      </div>
      <Link className="btn" to={`/update/${crewmate.id}`}>Edit Crewmate</Link>
    </div>
  ) : <p>Loading crewmate info...</p>
}
