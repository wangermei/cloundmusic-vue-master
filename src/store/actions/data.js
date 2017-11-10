import axios from 'axios'

export const getBanners = async ({ commit }) => {
  console.log(1)
  axios.get('http://localhost:3000/static/JSON/banner.json').then(response => {
    console.log(response.data.result)
    if (response.data.status === '0') {
      console.log(2)
      commit('UPDATE_BANNER_IMG', response.data.result)
    } else {
      throw new Error('出错')
    }
  })
}
