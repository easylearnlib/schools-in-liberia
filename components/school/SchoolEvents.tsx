const SchoolEvents = ({ events }: any) => {
  if (!events || events.length === 0) {
    return (
      <div className="section-box">
        <h2 className="section-title">Events</h2>
        <p>No upcoming events.</p>
      </div>
    )
  }

  return (
    <div className="section-box" id="Events">
      <h2 className="section-title">Events</h2>
      <ul>
        {events.map((event: any, index: number) => (
          <li key={index} style={{ marginBottom: '0.5rem' }}>
            <strong>{event.title}</strong><br />
            <span>{new Date(event.date).toLocaleDateString()} - {event.description}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SchoolEvents
