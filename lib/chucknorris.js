var fetch = require('node-fetch')

function getJoke(url){
  return fetch(url)
}

module.exports = {
  getJoke: getJoke
}
