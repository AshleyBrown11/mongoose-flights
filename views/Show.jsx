const React =require('react')

class Show extends React.Component {
    render () {
        const flight =this.props.flight
        return (
            <div>
                <h1>Show Flight Information</h1>{`
                FlightNo: ${flight.flightNo} 
                Airline: ${flight.airline} 
                Departure: ${flight.departs} 
                Airport: ${flight.airport}`}
                <a href={`/flight/${flight._id}/edit`}>Edit Flight</a>
                <a href="/flight">Back to Main</a>
                <br />
                <h1>Destinations</h1>
                {flight.destinations.map((flight, i) => {
                   return( 
                    <li key={i}>{`${flight.arrival}`} {`${flight.airport}`} 
                    </li>
                    
                   ) 
                })}
                <form action={`/flight/${flight._id}?_method=PUT`} method='POST'>
                    Arrival Date: <input type='datetime-local' name="arrival"/>
                    Airport Name: <select name="airport">
                        <option value = "AUS">AUS</option>
                        <option value = "DAL">DAL </option>
                        <option value = "LAX">LAX </option>
                        <option value = "SAN">SAN</option>
                        <option value = "SEA">SEA</option>
                    </select>
                    <input type='submit' value='Submit' />
                </form>
                {/* <form action="{/flight/${this.props.flight._id}?_method=PUT} method="">
                </form>              /}
                {/ {/flight/${flight._id}} */}
                <a href='/flight'>Back To Index Page</a>
            </div>
        )
    }
}
          

module.exports = Show