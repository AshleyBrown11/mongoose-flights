const React = require("react")

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Flight Page</h1>
        

        <form action="/flight" method="POST">
          Airline: <input type="text"  name="airline" /> <br />
          FlightNo: <input type="number" name="flightNo" /> <br />
          Departs: < input type="date" name="departs"  /> <br />
        <input type="submit" value="Create Flight" />
        </form>
        <nav>
          <a href="/flight">Back</a>
        </nav>
      </div>
    )
  }
}

module.exports = New