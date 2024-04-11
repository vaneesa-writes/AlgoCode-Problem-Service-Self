const NotFoundError = require("../error/notFoundError");
const { Problem } = require("../models");

class ProblemRepo {
  async createProblem(problemData) {
    try {
      problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        testcases: problemData.testcases ? problemData.testcases : [],
        difficulty: problemData.difficulty,
      });
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllProblem() {
    try {
      problems = await Problem.find({});
      if (!problems) throw new NotFoundError("Problems", "any");
      return problems;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getProblem(id) {
    try {
      problem = await Problem.findById(id);
      if (!problem) throw new NotFoundError("Problem", id);
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async deleteProblem(id) {
    try {
      deletedProblem = await Problem.findByIdAndDelete(id);
      if (!deletedProblem) throw new NotFoundError("Problem", id);
      return deletedProblem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ProblemRepo;