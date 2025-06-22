const SchoolHero = ({ name, imageUrl }: any) => (
  <div className="hero" style={{ backgroundImage: `url(${imageUrl})` }}>
    <div className="hero-overlay">
      <h1>{name}</h1>
    </div>
  </div>
)


export default SchoolHero