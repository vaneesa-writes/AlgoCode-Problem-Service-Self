class ProblemService {
  constructor(problemRepo) {
    this.problemRepo = problemRepo;
  }
  async getAllProblems() {
    return await this.problemRepo.getAllProblems();
  }
  async getProblem(id) {
    return await this.problemRepo.getProblem(id);
  }
  async deleteProblem(id) {
    return await this.problemRepo.deleteProblem(id);
  }
  async createProblem(problemData) {
    return await this.problemRepo.createProblem(problemData);
  }
}

module.exports = ProblemService;
