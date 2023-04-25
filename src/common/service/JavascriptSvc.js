import ServiceExec from "@/common/utils/ServiceExec";

class JavascriptSvc extends ServiceExec{

  getJavascriptList(params={}){
    return this.get('/data/sample.json', params).then(response => {return response.data})
  }
}

export default new JavascriptSvc()