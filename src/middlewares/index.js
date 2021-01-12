import Joi from "@hapi/joi";

export default (req, res, next) => {
  const schema = Joi.object({
    task: Joi.string().min(4).trim().empty().required().messages({
      "string.base": "Task should be string",
      "string.empty": "Task input can't be empty",
      "any.required": "Task is required",
    }),
    isCompleted: Joi.boolean()
  });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });
  return next();
};
