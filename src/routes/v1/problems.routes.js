const express = require("express");
const { problemController } = require("../../controller");
const problemRouter = express.Router();

problemRouter.get("/ping", problemController.pingProblemController);

problemRouter.get("/", problemController.getProblems);

problemRouter.get("/:id", problemController.getProblem);

problemRouter.delete("/:id", problemController.deleteProblem);

problemRouter.put("/:id", problemController.updateProblem);

problemRouter.post("/",problemController.addProblem);

module.exports = problemRouter;
