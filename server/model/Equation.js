const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const EquationSchema = Schema({
    a:{type: Number, required:true},
    b:{type: Number, required:true},
    c:{type: Number, required:true}
})

module.exports = mongoose.model("Equation", EquationSchema);
