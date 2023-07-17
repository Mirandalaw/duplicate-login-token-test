import UserDao from "../user/Dao/UserDao";

class UserService {
    constructor(UserDao: Object) {
        UserDao = this.UserDao;
    }

    async getUsers(query: string) {
        const user = UserDao;
        return user;
    }
}
