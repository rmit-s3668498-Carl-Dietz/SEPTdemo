import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import {useParams} from 'react-router-dom'

import { servicesData } from '../data/servicesData'
import { bookingsData } from '../data/bookingsData'

import ServiceDetail from '../components/ServiceDetail'
import BookingApi from '../config/bookingApi'

//Retrieves data for detailed display of a single service
function ServiceDetailContainer() {
  const {targetId} = useParams()
  const [service, setService] = useState(servicesData.find(({ id }) => id == targetId));
  const [bookings, setBookings] = useState(bookingsData)

  useEffect(() => {
    /*const callApis = async () => {
      try {
      
        const {data: serviceData} = await Axios.get(ServiceApi.getService(id))
        const {data: bookingData} = await Axios.get(BookingApi.getAllBookings)
        
        setService(serviceData)
        const filteredBookings = bookingData.filter((booking) => booking.customerId === null)
        setBookings(filteredBookings)
      } catch ({message}) {
        console.error('[ServiceDetailContainer]', message)
        alert(message)
      }
    }
    callApis()*/
  }, [])

  console.log(targetId);
  return <ServiceDetail availableBookings={bookings} service={service} />
}

export default ServiceDetailContainer
