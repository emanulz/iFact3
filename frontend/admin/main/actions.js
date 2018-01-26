import axios from 'axios'

export function fecthProfile() {
  console.log('FETCH')
  return function(dispatch) {
    axios.get('/profile/').then(function(response) {
      dispatch({type: 'FETCH_PROFILE_FULFILLED', payload: {user: response.data[0].fields, profile: response.data[1].fields}})
    }).catch(function(error) {
      dispatch({type: 'FETCH_PROFILE_REJECTED', payload: error})
    })
  }
}
