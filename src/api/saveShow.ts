import { instance } from './index'

export function saveShow(id : string){

    return instance.get(`/artists/${id}`, {

    })
    .then(res => {
      return res.data
    })
  
  }