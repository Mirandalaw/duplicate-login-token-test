

export const UserDto = (req : Request){
    userId: String;
    userPwd: String;
    userName: String;
    phoneNumber: String;

    function getUserId(){
        return this.userId = req.body.userId;
    }
}
