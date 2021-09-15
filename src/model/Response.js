export class Response {
    constructor(reponse) {
        this.code = reponse.code; // 0失败, 1成功
        this.status = reponse.status; // 网络请求结果
        this.error = reponse.error;
        this.message = reponse.message;
        this.data = reponse.data;
        this.jwtToken = reponse.jwtToken;
        this.isRefreshClientToken = reponse.isRefreshClientToken;
        this.jwtRefreshToken = reponse.jwtRefreshToken;
    }
}