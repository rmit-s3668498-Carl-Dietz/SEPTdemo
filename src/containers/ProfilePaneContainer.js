import React, {useEffect} from 'react'

import ProfilePane from '../components/ProfilePane'

import '../containers/App.css'
import { userData } from '../data/userData'

//Retrieves and displays current user profile data
const ProfilePaneContainer = ({close, change}) => {

  //User profile for display
  const [profile, setProfile] = React.useState({})

  useEffect(() => {
    loadProfile()
  }, [])

  //API call to retrieve user data
  const loadProfile = async () => {
    /*
    if (!AuthService.getCurrentUser()) {
      
      return null
    }
    try {
      
      const url = UserApi.getUser(AuthService.getCurrentUser().username)
      const res = await fetch(url)
      const data = await res.json()
      setProfile(data)
    } catch (err) {
      alert(err)
    }*/
    setProfile(userData.find(({ id }) => id === 1));
  }

  //Reads in changed values and PUTS them to the backend
  const updateProfile = async (newEmail, newFirstName, newLastName, newPhone, newAddress) => {
    /*
    const {username, userType, password, confirmPassword} = AuthService.getCurrentUser()
    const url = UserApi.getUser(AuthService.getCurrentUser().username)
    try {
      const payload = {
        username,
        userType,
        password,
        confirmPassword,
        firstName: newFirstName,
        lastName: newLastName,
        email: newEmail,
        mobileNum: newPhone,
        address: newAddress,
      }
      console.log('Updating profile with payload', payload)
      await Axios.put(url, payload)
      setProfile(payload)
    } catch ({response}) {
      console.error('Update profile response from backend:', response)
      alert("Error in PUT request: "+response)
    }*/

    profile.firstName = newFirstName;
    profile.lastName = newLastName;
    profile.email = newEmail;
    profile.mobileNum = newPhone;
    profile.address = newAddress;

  }

  return <ProfilePane close={close} change={change} profile={profile} reload={loadProfile} update={updateProfile} />

}

export default ProfilePaneContainer
