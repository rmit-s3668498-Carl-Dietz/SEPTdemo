import React, {} from 'react'
import '../containers/App.css'

import AddService from '../components/AddService.js'
import { servicesData } from '../data/servicesData'

const createService = (newName, newDesc, newImage) => {
  const newService = {
    name: newName,
    description: newDesc,
    img: newImage
  };
  /*
  axios.post(serviceApi.getUrl, newService)
  .then(response => console.log(response))
  .catch(error => console.log(error));
  */
  servicesData.push(newService);
};

//Adds a new service to backend
function AddServiceContainer() {
 
  return (
    <AddService create={createService}/>
  )
}

export default AddServiceContainer