<template>
  <div>
    <h2>ログイン</h2>
    <label for="email">Email：</label>
    <input
      id="email"
      type="text"
      v-model="email"
    >
    <br><br>
    <label for="password">パスワード：</label>
    <input
      id="password"
      type="password"
      v-model="password"
    >
    <br><br>
    <button @click="login">送信</button>
    <h2>掲示板</h2>
    <div v-for="post in posts" :key="post.name">
      <div>名前：{{ post.fields.name.stringValue }}</div>
      <div>コメント：{{ post.fields.comment.stringValue }}</div>
      <br><br>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      posts: []
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
      });
      this.email = '';
      this.password = '';
    }
  }
}
</script>
