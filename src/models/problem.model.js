const mongoose = require("mongoose");

const problemSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title cannot be Empty"],
  },
  description: {
    type: String,
    required: [true, "Description cannot be empty"],
  },
  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"],
    required: [true, "Difficulty cannot be empty"],
  },
  testCases: {
    input: {
      type: [String],
      required: true,
    },
    output: {
      type: [String],
      required: true,
    }
  },
  editorail: String,
});

const Problem = mongoose.model("Problem", problemSchema);

module.exports = Problem;
