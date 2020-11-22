import React, {useEffect} from 'react'
import '../containers/App.css'

import UserType from '../config/userType'
import AddBookingDisplay from '../components/admin_components/AddBookingDisplay.js'
import { userData } from '../data/userData'
import { bookingsData } from '../data/bookingsData'
import { availabilityData } from '../data/availabilityData'

//Add booking to the backend
const createBooking = async (newName, newTime, newDate, newEmployee) => {
  if (newTime === '' || newDate === '' || newEmployee === '') {
    alert('missing data')
    return false
  }
  const newBooking = {
    serviceName: newName,
    customerId: null,
    employeeId: newEmployee,
    time: newTime,
    date: newDate,
  }
  bookingsData.push(newBooking);
  /*
  axios
    .post(bookingApi.getUrl, newBooking)
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
  */
  return true
}

//GUI for setting new booking
function AddBookingContainer({service, active}) {
  const [employees, setEmployees] = React.useState([])
  const [availabilities, setAvailabilties] = React.useState([])
  //Retrieves employees and availabilities
  /*
  useEffect(() => {
    async function callAPI() {
      try {
        const {data} = await axios.get(userApi.getAllUsers)
        setEmployees(data.filter((d) => d.userType === UserType.Employee))
      } catch (err) {
        console.log(err.message)
      }
      try {
        const {data} = await axios.get(availabilityApi.getAllAvailabilities)
        setAvailabilties(data)
      } catch (err) {
        console.log(err.message)
      }
    }
    callAPI()
  }, [])*/

  setEmployees(userData.filter((d) => d.userType === UserType.Employee));
  setAvailabilties(availabilityData);

  if (!active || service == null) {
    return null
  }
  return <AddBookingDisplay service={service} employees={employees} avails = {availabilities} createFunc={createBooking}/>
}

export default AddBookingContainer
