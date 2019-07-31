import axios from "../../src";

// axios({
//   method: 'get',
//   url: '/extend/get'
// })

// axios.get('/extend/get')

// axios.options('/extend/options')

// axios.delete('/extend/delete')

// axios.head('/extend/head')

// axios.post('/extend/post', {
//   msg: 'post'
// })

// axios.put('/extend/put', {
//   msg: 'put'
// })

// axios.patch('/extend/patch', {
//   msg: 'patch'
// })


axios('/extend/post', {
  method: 'post',
  data: {
    msg: 'hello'
  }
})

interface ResponseData<T = any> {
  code: number
  message: string
  result: T
}

interface User {
  name: string
  age: number
}

function getUser<T>() {
  return axios<ResponseData<T>>('/extend/user')
    .then(res => res.data)
    .catch(err => console.log(err))
}

async function test() {
  const user = await getUser<User>()
  if (user) {
    console.log(user.result.name)
  }
}

test()

