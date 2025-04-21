import { useState } from 'react'

export default function CrewmateForm({ initialData = {}, onSubmit, onDelete }) {
  const [name, setName] = useState(initialData.name || '')
  const [speed, setSpeed] = useState(initialData.speed || '')
  const [color, setColor] = useState(initialData.color || '')
  const [description, setDescription] = useState(initialData.description || '')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) {
      setError('Name is required')
      return
    }
    if (speed && (isNaN(speed) || speed < 0)) {
      setError('Speed must be a positive number')
      return
    }
    setError('')
    onSubmit({ 
      name: name.trim(), 
      speed: speed ? parseInt(speed) : null,
      color: color.trim() || null,
      description: description.trim() || null
    })
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      {error && <div className="error-message">{error}</div>}
      
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter crewmate name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="speed">Speed:</label>
        <input
          id="speed"
          type="number"
          value={speed}
          onChange={e => setSpeed(e.target.value)}
          placeholder="Enter speed (optional)"
          min="0"
        />
      </div>

      <div className="form-group">
        <label htmlFor="color">Color:</label>
        <input
          id="color"
          type="text"
          value={color}
          onChange={e => setColor(e.target.value)}
          placeholder="Enter color (optional)"
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Enter description (optional)"
          rows="4"
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn primary">Save</button>
        {onDelete && (
          <button type="button" className="btn danger" onClick={onDelete}>
            Delete
          </button>
        )}
      </div>
    </form>
  )
}
