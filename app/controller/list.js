const Controller = require('egg').Controller;

class ListController extends Controller {
  async list() {
    let data = await this.service.website.list();
    await this.ctx.render('list.html', {
      list:data.data
    });
  }
}

module.exports = ListController;