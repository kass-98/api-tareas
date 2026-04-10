import mongoose from "mongoose";

const tareaSchema = new mongoose.Schema({
  title: { type: String, required: true},
  description: {type: String},
  complete: {type: Boolean, required: false}
});

const task = mongoose.model('Tarea', tareaSchema);

export default task;