const React = require("react")

class Index extends React.Component {
    render() {
      const  { flight }  = this.props;
      return(
        <div>
          <h1> Welcome to Flight Page! </h1>
          <nav>
            <a href="/flight/new">Create Your Flight Plan</a>
          </nav>
          <ul>
          {
          flight.map((flight, i) => {
            return (
              <li key={i}>{`${flight.airline} ${flight.flightNo} ${flight.departs}`}</li>
            )
          })
          }
        </ul>
        </div>
      )
    }
  }

  module.exports = Index