import db from "../loaders/db";

export const userRepository = () => {
    let userDao;

    function setUserDao(newUserDao) {
        userDao = newUserDao;
    }

    async function get(data: String) {}
};
