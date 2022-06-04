const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const EquationSchema = mongoose.Schema({
    a:{type: Number, required:true},
    b:{type: Number, required:true},
    c:{type: Number, required:true},
    root1:{type: String},
    root2:{type: String},
    realPart:{type:String},
    imagPart:{type: String},
})

module.exports = mongoose.model("Equation", EquationSchema);
