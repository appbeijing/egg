const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    let data = await this.service.website.city();
    await this.ctx.render('index.html', {
      list:data.value
    });
  }
}

module.exports = HomeController;