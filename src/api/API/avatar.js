import config from '../config'
const avatarImgPath = config.apiDomain + '/images/logo_'; //.png
const signImgPath = config.apiDomain + '/SignImages/sign_'; //.png
const uploadAvatar = config.apiDomain + '/api/services/app/UploadAvatar/UploadFile';
const uploadSign   = config.apiDomain + '/api/services/app/UploadAvatar/uploadSign';
export default {
    avatarImgPath,
    signImgPath,
    uploadAvatar,
	uploadSign
}