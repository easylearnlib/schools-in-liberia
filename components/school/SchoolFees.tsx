const SchoolFees = (props: {
  fees: {
    [grade: string]: number; // e.g., { "Grade 1": 250, "Grade 2": 260 }
  }
} ) => (



  <div>
    <h2>Tuition Fees</h2>
    <table>
      <thead>
        <tr>
          <th>Grade</th>
          <th>Tuition (USD)</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(props.fees).map(([grade, amount]) => (
          <tr key={grade}>
            <td>{grade}</td>
            <td>{amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)


export default SchoolFees