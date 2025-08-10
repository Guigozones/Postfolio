import { TYPES } from "@compositionRoot/Types";
import { UserPort } from "@user/domain/interfaces/UserPort";
import { IUserService } from "@user/domain/interfaces/IUserService";
import { inject, injectable } from "inversify";

@injectable()
export class UserAdaper implements UserPort {
  constructor(
    @inject(TYPES.IUserService)
    private userService: IUserService
  ) {}

  async exist(userId: string): Promise<boolean> {
    const user = await this.userService.findById(userId);

    if (!user) return false;

    return true;
  }
}
