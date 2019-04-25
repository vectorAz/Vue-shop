import axios from 'axios'
export default function Ajax(url, data = {}, method = 'GET') {
  return new Promise((resolve) => {
    let prmoise
    if (method === 'GET') {
      prmoise = axios.get(url, {
        params: data
      })
    } else {
      prmoise = axios.get(url, data)
    }
    prmoise.then(
      res => {
        resolve(res.data)
      },
      err => {
        alert('请求异常' + err.message)
      }
    )
  })
}