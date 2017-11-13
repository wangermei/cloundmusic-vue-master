/**
 * Created by Administrator on 2017/11/9 0009.
 */
export default {
  UPDATE_BANNER_IMG: (state, info) => {
    state.bannerImgUrl = info
  },
  UPDATE_HOT_RECOMMEND_LIST: (state, musicList) => {
    state.musicLists = musicList
  }
}
