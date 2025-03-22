import PortfolioUseCases from "../UseCases/PortfolioUseCases";
import portfolioRepository from "../../Adapters/OutBound/Repository/PortfolioRepositoryImp";
import Portfolio from "../../Domain/Entities/Portfolio/Portfolio";
import userService from "./UserServiceImp";
import { HttpError } from "../../Infrastructure/Error/HttpError";

class PortfolioServiceImp implements PortfolioUseCases {
  async register(portfolio: Portfolio): Promise<Portfolio> {
    const author = await userService.findById(portfolio.authorId);
    if (!author) throw new HttpError(400, "Author não registrado!");
    return await portfolioRepository.insert(portfolio);
  }

  async findMany(): Promise<Portfolio[]> {
    const portfolios = await portfolioRepository.findMany();
    return portfolios;
  }

  async findById(id: number): Promise<Portfolio | null> {
    return await portfolioRepository.findById(id);
  }

  async findByAuthorId(authorId: string): Promise<Portfolio[]> {
    return await portfolioRepository.findByAuthor(authorId);
  }

  async deleteById(id: number): Promise<Portfolio | null> {
    const portfolio = await portfolioRepository.deleteById(id);
    return portfolio;
  }
}

const portfolioService: PortfolioUseCases = new PortfolioServiceImp();
export default portfolioService;
// export const PortfolioServiceImp = (
//   portfolioRepository: PortfolioRepository,
//   userService: UserUseCases
// ): PortfolioUseCases => ({
//   register: async (portfolio: Portfolio) => {
//     // const author =
//     await portfolioRepository.insert(portfolio);
//   },
//   findMany: async (): Promise<Portfolio[]> => {
//     const portfolios = await portfolioRepository.findMany();
//     return portfolios;
//   },

//   findById: async (id: number | null): Promise<Portfolio | null> => {
//     if (!id || typeof id !== "number")
//       throw new HttpError(400, "Author é obrigatorio");
//     return await portfolioRepository.findById(id);
//   },

//   findByAuthorId: async (authorId: number | null): Promise<Portfolio[]> => {
//     if (!authorId || typeof authorId !== "number")
//       throw new HttpError(400, "Author é obrigatorio");

//     return await portfolioRepository.findByAuthor(authorId);
//   },
// });
