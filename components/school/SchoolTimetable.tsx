const SchoolTimetable = ({ academicCalendar }: any) => (
  <div className="section-box">
    <h2 className="section-title">Academic Calendar</h2>
    <ul>
      {academicCalendar.map((term: any, index: number) => (
        <li key={index}>
          <strong>{term.name}</strong>: {term.start} – {term.end}
        </li>
      ))}
    </ul>
  </div>
)


export default SchoolTimetable