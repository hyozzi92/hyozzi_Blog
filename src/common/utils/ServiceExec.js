import axios from "axios";
import ConstCode from "@/common/constants/ConstCode";

class ServiceExec{
  constructor() {
    let ServiceExec = axios.create()
    ServiceExec.interceptors.request.use(this.handleRequest)
    ServiceExec.interceptors.response.use(this.handleSuccess, this.handleError)


    this.ServiceExec = ServiceExec
  }
get(path,params={}){
  return this.ServiceExec.get(path,{params})
}

patch(path, payload){
  return this.ServiceExec.request({
    method: 'PATCH',
    url: path,
    responseType:'json',
    data: payload
  })
}

  multiPost(path, payload) {
    return this.ServiceExec.request({
      headers: { 'Content-Type': 'multipart/form-data' },
      method: 'POST',
      url: path,
      responseType: 'json',
      data: payload
    })
  }
}

export default ServiceExec