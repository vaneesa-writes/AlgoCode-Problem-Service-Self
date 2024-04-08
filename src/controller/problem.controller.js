function pingProblemController(req, res, next) {
  res.status(200).json({ message: "Problem Controller is alive!!!" });
}

function addProblem(req, res, next) {
  res.status(501).json({
    message: "unImplemented",
  });
}

function getProblems(req, res, next) {
  res.status(501).json({
    message: "unImplemented",
  });
}

function getProblem(req, res, next) {
  res.status(501).json({
    message: `unImplemented and id passed is ${req.params.id}`,
  });
}

function updateProblem(req, res, next) {
  res.status(501).json({
    message: "unImplemented",
  });
}

function deleteProblem(req, res, next) {
  res.status(501).json({
    message: `unImplemented and id passed is ${req.params.id}`,
  });
}

module.exports = {
  pingProblemController,
  addProblem,
  getProblems,
  getProblem,
  updateProblem,
  deleteProblem,
};
