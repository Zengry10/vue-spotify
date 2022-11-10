import { instance } from './index'

export function search(query: string, type: string, limit = 10){

    return instance.get('/search', {
      params: {
        q: query,
        type,
        limit,
      }
    })
    .then(res => {
      return res.data
    })
  
  }