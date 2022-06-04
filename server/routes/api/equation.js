const router = require("express").Router();
const mongoose = require("mongoose");
const Equation = require("./../../model/Equation");
const {
  OkResponse,
  BadRequestResponse,
  InternalServerErrorResponse,
} = require("express-http-response");

router.post("/solve", (req, res, next) => {
  try {
    let root1, root2, realPart, imagPart;
    let a = req.body.x2;
    let b = req.body.x;
    let c = req.body.constant;
    let discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
      root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    } else if (discriminant == 0) {
      root1 = root2 = -b / (2 * a);
    } else {
      realPart = (-b / (2 * a)).toFixed(2);
      imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2) +"i";
    }
    let expression = new Equation();
    expression.a = a;
    expression.b = b;
    expression.c = c;
    expression.root1 = root1;
    expression.root2 = root2;
    if (realPart != "undefined" && imagPart != "undefined") {
      expression.realPart = realPart;
      expression.imagPart = imagPart;
    } else {
    }
    expression.save().then((result) => {
      if (!result) {
        next(new InternalServerErrorResponse("Error saving expression", 500.0));
      } else {
        next(new OkResponse(result));
      }
    });
  } catch (err) {
    next(new BadRequestResponse("Something unknown happend!"));
  }
});

router.get("/", (req, res, next) => {
  next(new OkResponse("api hit"));
});

module.exports = router;
