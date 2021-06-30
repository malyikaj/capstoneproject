import axios from 'axios';

const apiURL = 'http://localhost:8081/api/persons';

class UserService {

    getUsers() {
        return axios.get(apiURL);
    }

    deleteUsersById(id){
        return axios.delete (apiURL + "/" + id);
    }

}

export default new UserService();