export default {
  state: {
    mid: '',
    index: 0,
    songName: '',
    songSinger: '',
    playing: false,
    playList: JSON.parse(window.localStorage.getItem('addPlayList')) || []
  },
  mutations: {
    setPlayList(state, obj) {
      state.playList = obj.list
      state.index = obj.index

      if (obj.mid) {
        state.mid = obj.mid
      }
      state.playing = true
    },
    setCurPlayText(state, obj) {
      state.songName = obj.name
      state.songSinger = obj.singer
    },
    pause(state) {
      state.playing = false
    },
    play(state) {
      state.playing = true
    }
  },
  getters: {}
}