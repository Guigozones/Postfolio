import PrismaUser from "../Adapters/OutBound/Entities/PrismaUser";
import User from "../Domain/Entities/User/User";
import PrismaPortfolio from "../Adapters/OutBound/Entities/PrismaPortfolio";
import Portfolio from "../Domain/Entities/Portfolio/Portfolio";

const UserMapper = {
  toDomain(prismaUser: PrismaUser): User {
    return new User(
      prismaUser.id,
      prismaUser.name,
      prismaUser.email,
      prismaUser.passWord,
      prismaUser.status
    );
  },
  toPrisma(user: User): PrismaUser {
    return {
      id: user.id,
      name: user.name,
      email: user.email.getValue(),
      passWord: user.passWord,
      status: user.status,
    };
  },
};

const PortfolioMapper = {
  toDomain(prismaPortfolio: PrismaPortfolio): Portfolio {
    return new Portfolio(
      prismaPortfolio.id,
      prismaPortfolio.name,
      prismaPortfolio.description,
      prismaPortfolio.pageLink,
      prismaPortfolio.authorId
    );
  },
  toPrisma(portfolio: Portfolio): PrismaPortfolio {
    return {
      id: portfolio.id,
      name: portfolio.name,
      description: portfolio.description,
      pageLink: portfolio.pageLink,
      authorId: portfolio.authorId,
    };
  },
};

const Mapper = {
  User: UserMapper,
  Portfolio: PortfolioMapper,
};

export default Mapper;
