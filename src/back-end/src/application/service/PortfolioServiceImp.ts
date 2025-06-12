import PortfolioUseCases from "../useCases/PortfolioUseCases";
import portfolioRepository from "../../adapters/outBound/repository/portfolioRep/PortfolioRepositoryImp";
import Portfolio from "../../domain/entities/portfolio/Portfolio";
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

  async findById(id: string): Promise<Portfolio | null> {
    return await portfolioRepository.findById(id);
  }

  async findByAuthorId(authorId: string): Promise<Portfolio[]> {
    return await portfolioRepository.findByAuthor(authorId);
  }

  async update(portfolio: Portfolio): Promise<Portfolio> {
    return await portfolioRepository.update(portfolio);
  }

  async deleteById(id: string): Promise<Portfolio | null> {
    const portfolio = await portfolioRepository.deleteById(id);
    return portfolio;
  }
}

const portfolioService: PortfolioUseCases = new PortfolioServiceImp();
export default portfolioService;
