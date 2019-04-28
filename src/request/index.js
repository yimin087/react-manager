import { jsonpAjax } from './axios'
import { URL } from './apiurl'

export const ApiWeather = async params => {
  let data = null
  await jsonpAjax(URL.weather, params).then(res => {
    data = res
  })
  return data
}
