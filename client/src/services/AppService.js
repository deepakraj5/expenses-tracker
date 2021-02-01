import axios from 'axios'

const baseUrl = 'http://localhost:3001'

class AppService {

    signup (data) {
        return axios.post(baseUrl + '/signup', { data })
    }

    signin (email, password) {
        return axios.post(baseUrl + '/signin', { email, password })
    }
}

export default new AppService()