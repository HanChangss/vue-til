<script>
export default {
  methods: {
    logoutUser() {
      this.$store.commit('clearUsername');
      this.$router.push('/login');
    }
  }
};
</script>

<template>
  <header>
    <div>
      <router-link to="/" class="logo">
        CHANG
      </router-link>
    </div>
    <div class="navigations">
      <template v-if="$store.getters.isLogin">
        <span class="username">{{ $store.state.username }}</span>
        <a href="javascript:;" @click="logoutUser">로그아웃</a>
      </template>
      <template>
        <router-link to="/login">로그인</router-link>
        <router-link to="/signup">회원가입</router-link>
      </template>

    </div>
  </header>
</template>

<style scoped>
.username{
  color: white;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #927dfc;
  z-index: 2;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}
a {
  color: #dedede;
  font-size: 18px;
}
a.logo {
  font-size: 30px;
  font-weight: 900;
  color: white;
}
.logo > span {
  font-size: 14px;
  font-weight: normal;
}
.navigations a {
  margin-left: 10px;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
a.router-link-exact-active {
  color: white;
  font-weight: bold;
}
</style>