const getResponse = true

function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    if (getResponse) {
      resolve('true')
    } else {
      reject('false')
    }
  })
}