import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../supabaseClient'

export default function CrewmateDetail() {
  const { id } = useParams()
  const [crewmate, setCrewmate] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCrewmate()
  }, [id])

  async function fetchCrewmate() {
    try {
      setLoading(true)
      setError('')
      const { data, error } = await supabase
        .from('crewmates')
        .select('*')
        .eq('id', id)
        .single()
      
      if (error) throw error
      setCrewmate(data)
    } catch (err) {
      setError(err.message || 'Failed to fetch crewmate details')
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString)
      if (isNaN(date.getTime())) {
        return 'Date not available'
      }
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    } catch (error) {
      return 'Date not available'
    }
  }

  if (loading) return <div className="container"><p className="loading">Loading crewmate info...</p></div>
  if (error) return <div className="container"><p className="error-message">{error}</p></div>
  if (!crewmate) return <div className="container"><p className="error-message">Crewmate not found</p></div>

  return (
    <div className="container detail-page">
      <div className="detail-header">
        <h1 className="detail-name">{crewmate.name}</h1>
        <Link to={`/update/${crewmate.id}`} className="btn primary">Edit Crewmate</Link>
      </div>
      
      <div className="detail-info">
        {crewmate.speed !== null && (
          <div className="detail-item">
            <span className="label">Speed:</span>
            <span className="value">{crewmate.speed}</span>
          </div>
        )}
        
        {crewmate.color && (
          <div className="detail-item">
            <span className="label">Color:</span>
            <span className="value">{crewmate.color}</span>
          </div>
        )}
        
        {crewmate.description && (
          <div className="detail-item">
            <span className="label">Description:</span>
            <p className="value description">{crewmate.description}</p>
          </div>
        )}
        
        <div className="detail-item">
          <span className="label">Created At:</span>
          <span className="value">{formatDate(crewmate.created_at)}</span>
        </div>
      </div>
    </div>
  )
}