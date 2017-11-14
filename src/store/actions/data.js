import axios from 'axios'

export const getBanners = async ({ commit }) => {
  axios.get('http://localhost:3000/static/JSON/banner.json').then(response => {
    if (response.data.status === '0') {
      commit('UPDATE_BANNER_IMG', response.data.result)
    } else {
      throw new Error('出错')
    }
  })
}
// 首页获取推荐歌单列表
export const getMusicList = async ({ commit }) => {
  axios.get('http://localhost:3000/static/JSON/hotMusic.json').then(response => {
    if (response.data.status === '0') {
      // console.log(response.data)
      commit('UPDATE_HOT_RECOMMEND_LIST', response.data.musicList)
    } else {
      throw new Error('请求失败！')
    }
  })
}
// 首页获取新碟上架歌曲列表
export const getNewCard = async ({commit}) => {
  axios.get('http://localhost:3000/static/JSON/hotMusic.json').then(response => {
    if (response.data.status === '0') {
      console.log(response.data)
      commit('UPDATE_NEW_CARD_LIST', response.data.newCardList)
    }
  })
}
