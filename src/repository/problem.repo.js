const NotFoundError = require("../error/notFoundError");
const { Problem } = require("../models");

class ProblemRepo {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases
          ? problemData.testCases
          : { input: "", output: "" },
        difficulty: problemData.difficulty,
      });
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const problems = await Problem.find({});
      if (!problems) throw new NotFoundError("Problems", "any");
      return problems;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getProblem(id) {
    try {
      const problem = await Problem.findById(id);
      if (!problem) throw new NotFoundError("Problem", id);
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async deleteProblem(id) {
    try {
      const deletedProblem = await Problem.findByIdAndDelete(id);
      if (!deletedProblem) throw new NotFoundError("Problem", id);
      return deletedProblem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ProblemRepo;
