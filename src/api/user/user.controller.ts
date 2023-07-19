import { UserDto } from "./Dto/UserDto";

export const userController = () => {
    let userService;

    function setUserService(newUserService) {
        userService = newUserService;
    }

    async function createUser(req: Request, res: Response) {
        try {
            let data: UserDto;

            const userData = userService.insertUser({ data });
            if (!userData) return res.send(error);
        } catch (error) {
            console.error(error.stack);
        }
    }
};
