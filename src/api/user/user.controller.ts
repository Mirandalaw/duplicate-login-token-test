class UserController {
    constructor(userService) {
        userService = this.userService;
    }

    async function getOneUser(req:Request,res:Response) {
      const userData = await this.userService;

  }
}
