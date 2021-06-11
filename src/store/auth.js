import service from "../../service/apiService";
export default {
  namespaced: true,
  state: {
    adminProfile: {}
  },
  mutations: {
    SET_ADMIN_PROFILE(state, value) {
      state.adminProfile = value;
      console.log("DFGHJKKL", "https://ui-avatars.com/api/?name=vicky");
      // let imageName = value.email.split("@")[0];
      state.adminProfile[
        "nameImage"
      ] = `https://ui-avatars.com/api/?name=vicky`;
    }
  },
  actions: {
    async registerUser({ commit }, data) {
      try {
        console.log("commitcommit", commit);
        let registerUserData = await service.apiCallWithData(
          "/User/registerUser",
          data
        );
        console.log("registerUserData registerUserData", registerUserData);
        return registerUserData;
      } catch (error) {
        console.log("error", error);
      }
    },
    async userLogin({ commit }, data) {
      try {
        console.log("commitcommit", commit);
        let loginData = await service.apiCallWithData("/User/loginUser", data);
        console.log("loginData loginData", loginData);
        return loginData;
      } catch (error) {
        console.log("error", error);
      }
    },
    // async getOneUser({ commit }, data) {
    //   try {
    //     console.log("commitcommit", commit);
    //     let getOneUserData = await service.apiCallWithHeaderWithData(
    //       "/User/getOneAdminDetail",
    //       data
    //     );
    //     console.log("getOneUserData getOneUserData", getOneUserData);
    //     if (
    //       getOneUserData &&
    //       getOneUserData.data &&
    //       getOneUserData.status == 200
    //     ) {
    //       commit("SET_ADMIN_PROFILE", getOneUserData.data);
    //     }
    //   } catch (error) {
    //     console.log("error", error);
    //   }
    // },
    async forgetPassword({ commit }, data) {
      try {
        console.log("commitcommit", commit);
        let registerUserData = await service.apiCallWithData(
          "/User/forgetPassword",
          data
        );
        console.log("registerUserData registerUserData", registerUserData);
        return registerUserData;
      } catch (error) {
        console.log("error", error);
      }
    }
  }
};
