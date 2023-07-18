export const userService = () => {
    let userRepository;

    function setUserReposittory(newUserRepository) {
        userRepository = newUserRepository;
    }
    async function insertUser(data) {
        const user = await userRepository.insertOne(data);
        return user;
    }

    async function getAll() {
        return await userRepository.get();
    }

    return {
        userRepository,
        insertUser,
        getAll
    };
};
