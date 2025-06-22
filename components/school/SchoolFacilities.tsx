const SchoolFacilities = ({ facilities }: any) => {
  return (
    <div className="section-box">
      <h2 className="section-title">Facilities</h2>
      <ul>
        {facilities.map((facility: any, index: number) => (
          <li key={index}>• {facility}</li>
        ))}
      </ul>
    </div>
  )
}

export default SchoolFacilities
