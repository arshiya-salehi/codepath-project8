// File: src/pages/Home.jsx
import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'
import { Link } from 'react-router-dom'
import CrewmateCard from '../components/CrewmateCard'

export default function Home() {
  const [crewmates, setCrewmates] = useState([])

  useEffect(() => {
    fetchCrewmates()
  }, [])

  async function fetchCrewmates() {
    const { data } = await supabase
      .from('crewmates')
      .select('*')
      .order('created_at', { ascending: false })

    setCrewmates(data)
  }

  return (
    <div className="home">
      <header className="home-header">
        <h1>Crewmate Gallery</h1>
        <Link to="/create" className="btn">Add New Crewmate</Link>
      </header>
      <section className="gallery">
        {crewmates.length === 0 ? (
          <p>No crewmates created yet. Click "Add New Crewmate" to get started!</p>
        ) : (
          crewmates.map(cm => <CrewmateCard key={cm.id} crewmate={cm} />)
        )}
      </section>
    </div>
  )
}
