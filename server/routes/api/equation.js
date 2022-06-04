const router = require("express").Router();
const mongoose = require("mongoose");
const {
  OkResponse,
  BadRequestResponse,
  InternalServerErrorResponse,
} = require("express-http-response");

router.post("/solve", (req, res, next) => {
  try {
    let root1, root2;
    let a = req.body.x2;
    let b = req.body.x;
    let c = req.body.constant;
    let discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
      root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      next(
        new OkResponse(
          `The roots of quadratic equation are ${root1} and ${root2}`
        )
      );
    } else if (discriminant == 0) {
      root1 = root2 = -b / (2 * a);

      next(
        new OkResponse(
          `The roots of quadratic equation are ${root1} and ${root2}`
        )
      );
    } else {
      let realPart = (-b / (2 * a)).toFixed(2);
      let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
      next(
        new OkResponse(
          `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
        )
      );
    }
  } catch (err) {
    next(new BadRequestResponse("Something unknown happend!"));
  }
});

router.get("/", (req, res, next) => {
  next(new OkResponse("api hit"));
});

module.exports = router;
