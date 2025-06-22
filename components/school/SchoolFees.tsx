const SchoolFees = (props: {
  fees: {
    [grade: string]: number; // e.g., { "Grade 1": 250, "Grade 2": 260 }
  }
} ) => (



  <div className="section-box"  id="Fees">
    <h2>Tuition Fees</h2>
    <table>
      <thead>
        <tr>
          <th>Grade</th>
          <th>Tuition (USD)</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  </div>
)


export default SchoolFees