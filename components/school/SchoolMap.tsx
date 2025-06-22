const SchoolMap = ({ location }: any) => {
  const { lat, lng } = location
  return (
    <iframe
      width="100%"
      height="350"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      src={`https://www.google.com/maps?q=${lat},${lng}&output=embed`}
    />
  )
}


export default SchoolMap