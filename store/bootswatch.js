import axios from 'axios'
const API_BOOTSWATCH = 'https://bootswatch.com/api/3.json'
const DEF_BOOTSWATCH_CSS = 'https://maxcdn.bootstrapcdn.com/bootswatch/latest/cerulean/bootstrap.min.css'

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
        state.cssHref = theme.cssCdn
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
