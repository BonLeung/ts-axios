import axios from "../../src";

axios({
  method: 'get',
  url: '/error/get1'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

axios({
  method: 'get',
  url: '/error/get'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})


setTimeout(() => {
  axios({
    method: 'get',
    url: '/error/get'
  }).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
}, 5000)

axios({
  method: 'get',
  url: '/error/timeout',
  timeout: 2000
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
