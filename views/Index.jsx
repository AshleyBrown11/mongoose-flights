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
              <li key={i}>{`${flight.airline} ${flight.flightNo} ${flight.departs}`}
              <nav>
                <a href={`/flight/${flight._id}`}>Details</a><br/>
                <a href={`/flight/${flight._id}/edit`}>Edit Flight</a>
                </nav>
                </li>
              // <li key={i}>
              //   <p>Airline:{flight.airline}</p>
              //   <p>FlightNo:{flight.flightNo}</p> 
              //   <p>Departure: {flight.departs}</p>
              //   < a href={`/flight/${flight._id}`}>Details</a>
              //   </li>
            )
          })
          }
        </ul>
        </div>
      )
    }
  }

  module.exports = Index