const React = require("react")

class New extends React.Component {
  render() {
    const date = new Date();
    const futureDate = date.getDate() + 365;
    date.setDate(futureDate);
    const defaultValue = date.toLocaleDateString('en-CA');
    return (
      <div>
        <h1>New Flight Page</h1>
        

        <form action="/flight" method="POST">
          Airline: <input type="text"  name="airline" /> <br />
          FlightNo: <input type="number" name="flightNo" min={10} max={9999} /> <br />
          Departs: < input type="datetime-locale" name="departs" default={defaultValue} /> <br />
        <input type="submit" value="Submit New Flight" />
        </form>
        <nav>
          <a href="/flight">Back</a>
        </nav>
      </div>
    )
  }
}

module.exports = New