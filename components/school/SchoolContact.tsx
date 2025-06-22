const SchoolContact = ({ contact }: any) => {
  const { district, county, address = 'Sinkor', phone= '+231', email='', website='' } = contact

  return (
    <div className="section-box">
      <h2 className="section-title">Contact Information</h2>
      <p><strong>County:</strong> {county}</p>
      <p><strong>District:</strong> {district}</p>
      <p><strong>Address:</strong> {address}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
      {website && (
        <p><strong>Website:</strong> <a href={website} target="_blank" rel="noopener noreferrer">{website}</a></p>
      )}
    </div>
  )
}

export default SchoolContact
