import mongoose from "mongoose";

const machineSchema = new mongoose.Schema({
  // uniqueKey: {
  //   type: String,
  //   required: true,
  //   unique: true
  // },
  place: String,
  // type: String,
  // configuration: String,
  // size: String,
  // description: String
});

const Machine = mongoose.model('Machine', machineSchema);

export default Machine;
