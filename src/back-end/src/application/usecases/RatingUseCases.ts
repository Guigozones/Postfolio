import Rating from "../../domain/entities/rating/Rating";

export default interface RatingUseCases {
  register(rating: Rating): Promise<Rating>;
  findMany(): Promise<Rating[]>;
  findByPortfolioId(portfolioId: string): Promise<Rating[]>;
  findByUserId(userId: string): Promise<Rating[]>;
  findByUserAndPortfolio(
    userId: string,
    portfolioId: string
  ): Promise<Rating | null>;
  update(rating: Rating): Promise<Rating>;
  delete(id: string): Promise<Rating>;
}
