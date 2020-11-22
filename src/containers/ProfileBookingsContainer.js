import React, {useEffect} from 'react'
import axios from 'axios'

import ProfileBookings from '../components/booking_components/ProfileBookings'
import AuthService from '../services/auth.service'
import '../containers/App.css'
import {userData} from '../data/userData'
import {bookingsData} from "../data/bookingsData";

//Retrieves and displays current user profile data
const ProfileBookingsContainer = ({change}) => {

  //User profile for bookings data
  const [profile, setProfile] = React.useState({});
  const [bookings, setBookings] = React.useState(bookingsData);

  useEffect(() => {
    loadProfile();
    //loadBookings();
  }, [])

  //API call to retrieve user data
  const loadProfile = async () => {
    /*
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
    }*/
    setProfile(userData.find(({ id }) => id == 1));
  }

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
    bookingsData.filter(b => {
      return b.id != booking.id;
    });
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