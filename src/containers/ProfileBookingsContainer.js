import React, {useEffect} from 'react'

import ProfileBookings from '../components/booking_components/ProfileBookings'
import '../containers/App.css'
import {bookingsData} from "../data/bookingsData";

//Retrieves and displays current user profile data
const ProfileBookingsContainer = ({change}) => {

  //User profile for bookings data
  const [bookings, setBookings] = React.useState([...bookingsData.filter(b => b.customerId === 1)]);

  useEffect(() => {
    //loadProfile();
    //loadBookings();
  }, [])

  //API call to retrieve user data
 /* const loadProfile = async () => {
    
    if (!AuthService.getCurrentUser()) {
      
      return null
    }
    try {
      const url = UserApi.getUser(AuthService.getCurrentUser().id)
      const res = await fetch(url)
      const data = await res.json()
      setProfile(data)
    } catch (err) {
      alert(err)
    }
  }*/

  const deleteBooking = (booking) => {
    /*
    //remove bookings
    axios.delete(BookingApi.getBooking(booking.id), 
    ).then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });*/

    let books = [...bookings];
    books.splice(bookings.indexOf(booking), 1);
    setBookings(books);
  }

  /*const loadBookings = async () => {
    if (!AuthService.getCurrentUser()) {
      
      return null
    }
    try {
      const url = BookingApi.getAllBookings;
      const res = await fetch(url)
      const data = await res.json()
      setBookings(data)
    } catch (err) {
      alert(err)
    }
  }*/

  return <ProfileBookings change = {change} bookingSet = {bookings} deleteFunc = {deleteBooking}/>
}

export default ProfileBookingsContainer
