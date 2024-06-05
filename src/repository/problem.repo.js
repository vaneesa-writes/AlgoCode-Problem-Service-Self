const NotFoundError = require("../error/notFoundError");
const logger = require("../config/logger.config");
const {Problem} = require("../models");
const {getRelativePathToProjectRoot} = require("../utils/filePathFinder");

class ProblemRepo {
    async createProblem(problemData) {
        try {
            return await Problem.create({
                title: problemData.title,
                description: problemData.description,
                testCases: problemData.testCases
                    ? problemData.testCases
                    : {input: "", output: ""},
                difficulty: problemData.difficulty,
            });
        } catch (error) {
            logger.error(`${getRelativePathToProjectRoot(__filename)} : Problem with ${id} not found in the db`)
            throw error;
        }
    }

    async getAllProblems() {
        const problems = await Problem.find({});
        if (!problems) {
            logger.error(`${getRelativePathToProjectRoot(__filename)} : Problems not found in the db`)
            throw new NotFoundError("Problems", "any");
        }
        return problems;
    }

    async getProblem(id) {
        const problem = await Problem.findById(id);
        if (!problem) {
            logger.error(`${getRelativePathToProjectRoot(__filename)} : Problem with ${id} not found in the db`)
            throw new NotFoundError("Problem", id);
        }
        return problem;
    }

    async deleteProblem(id) {
        const deletedProblem = await Problem.findByIdAndDelete(id);
        if (!deletedProblem) {
            logger.error(`${getRelativePathToProjectRoot(__filename)} : Problem with ${id} not found in the db`)
            throw new NotFoundError("Problem", id);
        }
        return deletedProblem;
    }
}

module.exports = ProblemRepo;
