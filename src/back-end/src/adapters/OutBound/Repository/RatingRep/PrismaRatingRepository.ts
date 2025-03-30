import { prisma } from "../../../../Infrastructure/Config/prisma";
import { HttpError } from "../../../../Infrastructure/Error/HttpError";
import PrismaRating from "../../Entities/PrismaRating";

export const PrismaRatingRepository = {
  insert: async (ratingEntity: PrismaRating): Promise<PrismaRating> => {
    try {
      const rating = await prisma.rating.create({
        data: {
          userId: ratingEntity.userId,
          portfolioId: ratingEntity.portfolioId,
          score: ratingEntity.score,
        },
      });

      return rating;
    } catch (error) {
      console.log(error);
      throw new HttpError(500, "Erro ao salvar Analise!");
    }
  },
  findMany: async (): Promise<PrismaRating[]> => {
    try {
      const ratings = await prisma.rating.findMany();
      return ratings;
    } catch (error) {
      throw new HttpError(500, "Não foi possivel buscar todas as Analise!");
    }
  },
  findByPortfolioId: async (portfolioId: number): Promise<PrismaRating[]> => {
    try {
      const ratings = await prisma.rating.findMany({
        where: {
          portfolioId,
        },
      });

      return ratings;
    } catch (error) {
      throw new HttpError(500, "Erro ao buscar Analises do portfolio!");
    }
  },
  findByUserId: async (userId: string): Promise<PrismaRating[]> => {
    try {
      const ratings = await prisma.rating.findMany({
        where: {
          userId,
        },
      });

      return ratings;
    } catch (error) {
      throw new HttpError(500, "Erro ao buscar Analises do usuario!");
    }
  },
  findByUserAndPortfolio: async (
    userId: string,
    portfolioId: number
  ): Promise<PrismaRating | null> => {
    try {
      const rating = await prisma.rating.findUnique({
        where: {
          userId_portfolioId: {
            userId,
            portfolioId,
          },
        },
      });

      return rating;
    } catch (error) {
      throw new HttpError(500, "Erro ao buscar analise do usuario!");
    }
  },
  update: async (ratingEntity: PrismaRating): Promise<PrismaRating> => {
    try {
      const rating = await prisma.rating.update({
        where: {
          userId_portfolioId: {
            userId: ratingEntity.userId,
            portfolioId: ratingEntity.portfolioId,
          },
        },
        data: {
          score: ratingEntity.score,
        },
      });

      return rating;
    } catch (error) {
      throw new HttpError(500, "Erro ao atualizar dados da analise!");
    }
  },
  delete: async (
    userId: string,
    portfolioId: number
  ): Promise<PrismaRating> => {
    try {
      const rating = await prisma.rating.delete({
        where: {
          userId_portfolioId: {
            userId,
            portfolioId,
          },
        },
      });

      return rating;
    } catch (error) {
      throw new HttpError(500, "Erro ao deletar analise!");
    }
  },
};
