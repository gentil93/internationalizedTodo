let languages = require('./strings.json')

export const translator = (word, locale) => {
  if(locale == 'en-US' || locale == 'pt-BR') {
    locale = locale
  } else {
    locale = 'en-US'
  }
  return languages[locale][word]
}