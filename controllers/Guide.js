const { GuideDto } = require("../services");
const { putGuideValidator } = require("../validators/Guide");
const { guideTypes } = require("../utils/types");

const guideDto = new GuideDto();

class GuideController {
  static async get(ctx) {
    const user_id = ctx.state.id;
    ctx.body = await guideDto.getGuides({ user_id });
  }

  static async post(ctx) {
    const { id } = ctx.state;
    ctx.body = await guideDto.create({ user_id: id });
  }

  static async put(ctx) {
    try {
      const data = await putGuideValidator.validateAsync(ctx.request.body);
      const { id } = ctx.params;
      const user_id = ctx.state.id;
      const guide = await guideDto.getGuide({ id: parseInt(id), user_id });
      if (guide) {
        for (const key in data) {
          guide[key] = data[key];
        }
        guide.save();
        ctx.body = guide;
      } else ctx.throw(404, "攻略不存在");
    } catch (err) {
      console.log(err);
      ctx.throw(400, err);
    }
  }

  static async getOne(ctx) {
    const { id } = ctx.params;
    const guide = await guideDto.getGuideById(parseInt(id));
    if (guide) {
      ctx.body = guide;
    } else ctx.throw(404, "没有数据");
  }

  static async getTypes(ctx) {
    ctx.body = guideTypes;
  }

  static async delete(ctx) {
    const user_id = ctx.state.id;
    const { id } = ctx.params;
    await guideDto.remove({ id, user_id });
    ctx.body = { message: "删除成功" };
  }
}

module.exports = GuideController;
