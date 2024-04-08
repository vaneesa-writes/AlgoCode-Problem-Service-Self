const NotImplementedError = require("../error/notImplementedError");
const NotImplemented = require("../error/notImplementedError");

function pingProblemController(req, res, next) {
  res.status(200).json({ message: "Problem Controller is alive!!!" });
}

function addProblem(req, res, next) {
  try {
    throw new NotImplementedError("Add Problem");
  } catch (error) {
    next(error);
  }
}

function getProblems(req, res, next) {
  try {
    throw new NotImplementedError("Get Problems");
  } catch (error) {
    next(error);
  }
}

function getProblem(req, res, next) {
  try {
    throw new NotImplementedError("Get Problem");
  } catch (error) {
    next(error);
  }
}

function updateProblem(req, res, next) {
  try {
    throw new NotImplementedError("Update Problem");
  } catch (error) {
    next(error);
  }
}

function deleteProblem(req, res, next) {
  try {
    throw new NotImplementedError("Delete Problem");
  } catch (error) {
    next(error);
  }
}

module.exports = {
  pingProblemController,
  addProblem,
  getProblems,
  getProblem,
  updateProblem,
  deleteProblem,
};
