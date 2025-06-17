import PortfolioUseCases from "@application/useCases/PortfolioUseCases";
import portfolioRepository from "@repository/portfolioRep/PortfolioRepositoryImp";
import Portfolio from "@domain/entities/portfolio/Portfolio";
// import userService from "@application/service/UserServiceImp";
import { HttpError } from "@infrastructure/error/HttpError";
import UserUseCases from "@useCases/UserUseCases";
import userServiceImp from "@application/service/UserServiceImp";

class PortfolioServiceImp implements PortfolioUseCases {
  constructor(private readonly userService: UserUseCases) {}

  async register(portfolio: Portfolio): Promise<Portfolio> {
    const author = await this.userService.findById(portfolio.authorId);
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

const portfolioService: PortfolioUseCases = new PortfolioServiceImp(
  userServiceImp
);
export default portfolioService;
