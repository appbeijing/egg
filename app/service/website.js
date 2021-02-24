
const Service = require('egg').Service;
class WebSite extends Service {
  async city() {
    /**
     * 通过抓取接口返回数据
     * curl的方法可以获取远程的数据
     */
    const api = this.config.url +'/appCommonBase/pc/web/cityInfo';
    let response = await this.ctx.curl(api);
    // console.log(response.data); // 返回的是Buffer
    let data = JSON.parse(response.data); // 把Buffer类型转换成对象
    console.log(data);
    return data;
  }

  async list(){
    const api ='https://www.imooc.com/search/hotwords';
    let response = await this.ctx.curl(api);
    // console.log(response.data); // 返回的是Buffer
    let data = JSON.parse(response.data); // 把Buffer类型转换成对象
    console.log(data);
    return data;
  }
}

module.exports = WebSite
