import axios from 'axios';

const apiURL = 'http://localhost:8081/api/persons';

class UserService {

    getUsers() {
        return axios.get(apiURL);
    }

}

export default new UserService();