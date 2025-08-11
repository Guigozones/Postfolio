import { CompetitionPort } from "@competition/domain/interfaces/CompetitionPort";
import { ICompetitionRepository } from "@competition/domain/interfaces/ICompetitionRepository";
import { TYPES } from "@compositionRoot/Types";
import { inject, injectable } from "inversify";

@injectable()
export class CompetitionAdapter implements CompetitionPort {
  constructor(
    @inject(TYPES.ICompetitionRepository)
    private repository: ICompetitionRepository
  ) {}

  exist(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  //   getProjectDetailsId(
  //     userId: string,
  //     competitionId: string,
  //     projectId: string
  //   ): Promise<string | null> {
  //     throw new Error("Method not implemented.");
  //   }
}
