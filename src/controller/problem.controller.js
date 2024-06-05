const NotImplementedError = require("../error/notImplementedError");
const {ProblemRepo} = require("../repository");
const {ProblemService} = require("../service");
const {StatusCodes} = require("http-status-codes");

const problemService = new ProblemService(new ProblemRepo());

function pingProblemController(req, res) {
    res.status(200).json({message: "Problem Controller is alive!!!"});
}

async function addProblem(req, res, next) {
    try {
        const addedProblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Successfully added the problem",
            error: {},
            data: addedProblem,
        });
    } catch (error) {
        next(error);
    }
}

async function getAllProblems(req, res, next) {
    try {
        const problems = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully fetched the problems",
            error: {},
            data: problems,
        });
    } catch (error) {
        next(error);
    }
}

async function getProblem(req, res, next) {
    try {
        // console.log(req.params.id);
        const problem = await problemService.getProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully fetched the problem",
            error: {},
            data: problem,
        });
    } catch (error) {
        next(error);
    }
}

function updateProblem() {
    throw new NotImplementedError("Update Problem");
}

async function deleteProblem(req, res, next) {
    try {
        const problem = await problemService.deleteProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully deleted the problem",
            error: {},
            data: problem,
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    pingProblemController,
    addProblem,
    getAllProblems,
    getProblem,
    updateProblem,
    deleteProblem,
};
