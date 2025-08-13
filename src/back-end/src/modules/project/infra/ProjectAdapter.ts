import { ProjectPort } from "@project/domain/interfaces/ProjectPort";
import { injectable, inject } from "inversify";
import { TYPES } from "@compositionRoot/Types";
import { ProjectContract } from "@shared/contracts/ProjectContracts";
import { IProjectRepository } from "@project/domain/interfaces/IProjectRepository";

@injectable()
export class ProjectAdapter implements ProjectPort {
  constructor(
    @inject(TYPES.IProjectRepository)
    private projectRepository: IProjectRepository
  ) {}

  async exist(projectId: string): Promise<string | null> {
    const project = await this.projectRepository.findById(projectId);
    return project ? project.getId() : null;
  }

  async findProjectsByPortfolioId(
    portfolioId: string
  ): Promise<ProjectContract[]> {
    return await this.projectRepository.findByPortfolio(portfolioId);
  }
}
