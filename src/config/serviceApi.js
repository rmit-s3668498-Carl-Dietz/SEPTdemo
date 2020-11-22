const BASE_URL = 'src\data\servicesData.js'

export default {
  getUrl: BASE_URL,
  getAllServices: BASE_URL,
  getService: (id) => `${BASE_URL}/${id}`,
}
