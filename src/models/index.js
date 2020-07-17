import AV, {Query, User} from "leancloud-storage";

AV.init({
    appId: "kcFEkm0GRMbvots8syr1vuy4-gzGzoHsz",
    appKey: "PPzrAxuwNGRkO03Pv7oExAmh",
    serverURL: "https://kcfekm0g.lc-cn-n1-shared.com"
});
console.log(1);
const Auth = {
    register(username, password) {
        let user = new User();
        user.setUsername("aaa");
        user.setPassword("bbb");
        return new Promise((resolve, reject) => {
            user.signUp().then((loginedUser) => {
                console.log("注册成功");
                console.log(loginedUser);
            }).catch((error) => {
                console.log("注册失败");
            });
        });
    },
    login(username, password) {
        return new Promise((resolve, reject) => {
            User.logIn(username, password).then(loginedUser => resolve(loginedUser), error => reject(error));
        });
    },
    logout() {
        User.logOut();
    },
    getCurrentUser() {
        return User.current();
    }
};
export {Auth}
