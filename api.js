import axios from 'axios'

export function call(userName) {
    console.log(userName)
    return axios
      .get(`https://api.github.com/search/users?q=${userName}`)
      .then((response) => {
        console.log(response)

        return response
        })
      .catch(function (error) {
        console.log(error);
      })
    }
