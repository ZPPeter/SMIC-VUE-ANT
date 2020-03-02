// TokenAuth Session User Role
const Authenticate = '/api/TokenAuth/AuthenticateEx';
const GetCurrentLoginInformations = '/api/services/app/Session/GetCurrentLoginInformations';
const GetUsers = '/api/services/app/User/GetAll';
const ChangePwd = '/api/services/app/User/ChangePassword';
export default {
    Authenticate,
    GetCurrentLoginInformations,
    GetUsers,
    ChangePwd
}