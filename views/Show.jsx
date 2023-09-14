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
                
            </div>
        )
    }
}

module.exports = Show