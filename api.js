import axios from 'axios'

export const call = userName => {
    return axios
      .get(`https://api.github.com/users?q=${userName}page=3&per_page=10`)
      .then(resp => 
        resp.data
      )     
    }