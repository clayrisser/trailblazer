import { Controller } from 'trails';

export default class DefaultController extends Controller {
  async info(req, res, next) {
    try {
      const payload = await this.app.services.DefaultService.getApplicationInfo();
      return res.success(payload);
    } catch (err) {
      return next(err);
    }
  }

  api(req, res, next) {
    try {
      return res.sucess('Hello Trailblazer!');
    } catch (err) {
      return next(err);
    }
  }

  v1(req, res, next) {
    try {
      return res.sucess('Hello Trailblazer v1!');
    } catch (err) {
      return next(err);
    }
  }
}
