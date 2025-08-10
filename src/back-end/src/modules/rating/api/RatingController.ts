import { TYPES } from "@compositionRoot/Types";
import { IRatingService } from "@rating/domain/interfaces/IRatingService";
import { inject, injectable } from "inversify";
import { UpsertRatingRequest } from "@rating/api/RatingSchema";
import { FastifyReply, FastifyRequest } from "fastify";
import { UpsertRatingDTO } from "@rating/api/RatingDTO";
import { InternalServerError } from "@shared/error/HttpError";

@injectable()
export class RatingController {
  constructor(
    @inject(TYPES.IRatingService)
    private ratingService: IRatingService
  ) {}

  async upsert(req: UpsertRatingRequest, reply: FastifyReply) {
    const dto: UpsertRatingDTO = {
      userId: req.body.user,
      competitionId: req.body.competition,
      projectId: req.body.project,
      score: req.body.score,
    };

    await this.ratingService.upsert(dto);

    reply.status(201).send({ msg: "Avaliação cadastrada." });
  }

  async delete(req: FastifyRequest, reply: FastifyReply) {
    throw new InternalServerError("Rota não implementada!");
  }
}
