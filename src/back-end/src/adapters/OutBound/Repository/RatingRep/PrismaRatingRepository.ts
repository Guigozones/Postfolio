import { prisma } from "@infrastructure/config/Prisma";
import { InternalServerError } from "@domain/error/HttpError";
import PrismaRating from "@models/PrismaRating";

export class PrismaRatingRepository {
  async insert(prismaRating: PrismaRating): Promise<PrismaRating> {
    try {
      return await prisma.rating.create({
        data: {
          userId: prismaRating.userId,
          workDetailsId: prismaRating.workDetailsId,
          score: prismaRating.score,
        },
      });
    } catch (error) {
      console.log(error);
      throw new InternalServerError("Erro ao salvar Analise!");
    }
  }

  async findMany(): Promise<PrismaRating[]> {
    return await prisma.rating.findMany();
  }

  async findByWorkCompDetails(
    workCompDetailsId: string
  ): Promise<PrismaRating[]> {
    return await prisma.rating.findMany({
      where: {
        workDetailsId: workCompDetailsId,
      },
    });
  }

  async findByUserId(userId: string): Promise<PrismaRating[]> {
    return await prisma.rating.findMany({
      where: {
        userId,
      },
    });
  }

  async findByUserAndWorkCompDetails(
    userId: string,
    workCompDetailsId: string
  ): Promise<PrismaRating | null> {
    return await prisma.rating.findFirst({
      where: {
        userId,
        workDetailsId: workCompDetailsId,
      },
    });
  }

  async update(prismaRating: PrismaRating): Promise<PrismaRating> {
    try {
      const rating = await prisma.rating.update({
        where: {
          id: prismaRating.id,
        },
        data: {
          score: prismaRating.score,
        },
      });

      return rating;
    } catch (error) {
      throw new InternalServerError("Erro ao atualizar dados da analise!");
    }
  }

  async delete(id: string): Promise<PrismaRating> {
    try {
      const rating = await prisma.rating.delete({
        where: {
          id,
        },
      });

      return rating;
    } catch (error) {
      throw new InternalServerError("Erro ao deletar analise!");
    }
  }
}

const prismaRatingRepository = new PrismaRatingRepository();
export default prismaRatingRepository;

// export const PrismaRatingRepository = {
//   insert: async (ratingEntity: PrismaRating): Promise<PrismaRating> => {
//     try {
//       const rating = await prisma.rating.create({
//         data: {
//           userId: ratingEntity.userId,
//           portfolioId: ratingEntity.portfolioId,
//           score: ratingEntity.score,
//         },
//       });

//       return rating;
//     } catch (error) {
//       console.log(error);
//       throw new HttpError(500, "Erro ao salvar Analise!");
//     }
//   },
//   findMany: async (): Promise<PrismaRating[]> => {
//     try {
//       const ratings = await prisma.rating.findMany();
//       return ratings;
//     } catch (error) {
//       throw new HttpError(500, "Não foi possivel buscar todas as Analise!");
//     }
//   },
//   async findByPortfolioId(portfolioId: string): Promise<PrismaRating[]> {
//     try {
//       const ratings = await prisma.rating.findMany({
//         where: {
//           portfolioId,
//         },
//       });

//       return ratings;
//     } catch (error) {
//       throw new HttpError(500, "Erro ao buscar Analises do portfolio!");
//     }
//   },
//   findByUserId: async (userId: string): Promise<PrismaRating[]> => {
//     try {
//       const ratings = await prisma.rating.findMany({
//         where: {
//           userId,
//         },
//       });

//       return ratings;
//     } catch (error) {
//       throw new HttpError(500, "Erro ao buscar Analises do usuario!");
//     }
//   },
//   findByUserAndPortfolio: async (
//     userId: string,
//     portfolioId: string
//   ): Promise<PrismaRating | null> => {
//     try {
//       const rating = await prisma.rating.findFirst({
//         where: {
//           userId,
//           portfolioId,
//         },
//       });

//       return rating;
//     } catch (error) {
//       throw new HttpError(500, "Erro ao buscar analise do usuario!");
//     }
//   },
//   update: async (ratingEntity: PrismaRating): Promise<PrismaRating> => {
//     try {
//       const rating = await prisma.rating.update({
//         where: {
//           id: ratingEntity.id,
//         },
//         data: {
//           score: ratingEntity.score,
//         },
//       });

//       return rating;
//     } catch (error) {
//       throw new HttpError(500, "Erro ao atualizar dados da analise!");
//     }
//   },
//   delete: async (id: string): Promise<PrismaRating> => {
//     try {
//       const rating = await prisma.rating.delete({
//         where: {
//           id,
//         },
//       });

//       return rating;
//     } catch (error) {
//       throw new HttpError(500, "Erro ao deletar analise!");
//     }
//   },
// };
