import React from 'react'

import '../containers/App.css'
const {default: ServiceCard} = require('../components/ServiceCard')


//Displays Service cards
function Services(props) {
  //Props passed down by ServiceListContainer
  var services = props.services.map((service) => {
    return (
      //Render an item in booking list for each booking fetched
      <ServiceCard key={service.id} service={service} />
    )
  })

  //Function to handle service search
  const doSearch = (event) => {
    props.searchFunc(event.target.value)
  }

  return (
    <div className="container">
      <h1>Services</h1>

      {/*TODO: implement calendars to filter service view*/}
      <div className="sector-heading">
        {/* Search Bar  */}
        <form>
          <input
            role="searchbox"
            onChange={(event) => {
              doSearch(event)
            }}
            placeholder="Search"
          />
        </form>

        <div className="dummy" />
        
      </div>

      <div className="services-gallery" role="main">
        {services}
      </div>
    </div>
  )
}
export default Services
