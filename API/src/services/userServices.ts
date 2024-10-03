import { UserRepository } from "../repository/userRepository";
import { isValidEmail } from "../helpers/validationHelper";
import { isNameValid } from "../helpers/validationNameHelper";

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(name: string, email: string) {
    if (!isValidEmail(email)) {
      throw new Error("Email inválido");
    }

    if (!isNameValid(name)) {
      throw new Error("Nome inválido");
    }

    return await this.userRepository.addUser(name, email);
  }

  async listUsers() {
    return await this.userRepository.getAllUsers();
  }
}
