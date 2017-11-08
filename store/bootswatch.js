import axios from 'axios'
const API_BOOTSWATCH = 'https://bootswatch.com/api/4.json'
const DEF_BOOTSWATCH_CSS = 'https://bootswatch.com/4/cerulean/bootstrap.min.css'

export const state = () => ({
  themes: [],
  selectedTheme: '',
  cssHref: DEF_BOOTSWATCH_CSS
})

export const mutations = {
  setThemes (state, themes) {
    state.themes = themes
  },
  selectTheme (state, selectedTheme) {
    state.selectedTheme = selectedTheme
    for (let theme of state.themes) {
      if (theme.name === selectedTheme) {
        state.cssHref = theme.cssMin
        break
      }
    }
  }
}

export const actions = {
  setThemes ({ commit }) {
    axios.get(API_BOOTSWATCH)
      .then(response => {
        commit('setThemes', response.data.themes)
      })
  }
}
