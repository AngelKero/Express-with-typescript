import { service } from "./../services/users.service";

class UserController {
  static async all(_req, res, next) {
    try {
      const users = await service.find();
      res.json({
        totalUsers: users.length,
        users
      });
    } catch (error) {
      next(error);
    }
  }

  static async one(req, res, next) {
    try {
      const { id } = req.params;
      const user = await service.findOne(id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res, next) {
    try {
      const user = await service.create(req.body);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
