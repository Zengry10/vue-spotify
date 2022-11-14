import { instance } from './index'

export function search(query: string, type: string, year: number, limit = 10){

    return instance.get('/search', {
      params: {
        query,
        type,
        year,
        limit,
      }
    })
    .then(res => {
      return res.data
    })
  
  }