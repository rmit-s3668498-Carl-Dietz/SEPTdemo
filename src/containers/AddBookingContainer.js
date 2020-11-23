import React, {} from 'react'
import '../containers/App.css'

import UserType from '../config/userType'
import AddBookingDisplay from '../components/admin_components/AddBookingDisplay.js'
import { userData } from '../data/userData'
import { availabilityData } from '../data/availabilityData'

//Add booking to the backend
const createBooking = async (newName, newTime, newDate, newEmployee) => {
  if (/*newTime === '' || newDate === '' || newEmployee === ''*/true) {
    alert('functionality unavailable');
    return false
  }
   /*const newBooking = {
    serviceName: newName,
    customerId: null,
    employeeId: newEmployee,
    time: newTime,
    date: newDate,
  }

 
  axios
    .post(bookingApi.getUrl, newBooking)
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
  
  return true*/
}

//GUI for setting new booking
function AddBookingContainer({service, active}) {
  const [employees] = React.useState(userData.filter((d) => d.userType === UserType.Employee));
  const [availabilities] = React.useState([...availabilityData]);
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


  if (!active || service == null) {
    return null
  }
  return <AddBookingDisplay service={service} employees={employees} avails = {availabilities} createFunc={createBooking}/>
}

export default AddBookingContainer
