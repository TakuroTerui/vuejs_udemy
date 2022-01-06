<template>
  <div>
    <h3>Users</h3>
    <router-link to="/users/1">ユーザー1</router-link>
    <router-link to="/users/2">ユーザー2</router-link>
    <hr>
    <h1>User No. {{ id }}</h1>
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile?lang=ja'">次のユーザー</router-link>
    <router-view></router-view>
    <div style="height:700px;">
    <router-link
      id="next-user"
      :to="{name : 'users-id-profile', params: {id: (Number(id) + 1)}, query: {lang: 'ja', page: 2}, hash: '#next-user'}"
    >次のユーザー</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  beforeRouterEnter(to, from, next) {
    next();
  },
  beforeRouterUpdate(to, from, next) {
    next();
  },
  beforeRouterLeave(to, from, next) {
    next();
  },
}
</script>