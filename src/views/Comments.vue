<template>
  <div>
    <h3>掲示板に投稿する</h3>
    <label for="name">ニックネーム</label>
    <input
      id="name"
      type="text"
      v-model="name"
    >
    <br><br>
    <label for="comment">コメント：</label>
    <textarea
      id="comment"
      v-model="comment"
    ></textarea>
    <br><br>
    <button @click="createComment">コメントをサーバーに送る</button>
    <div v-for="post in posts" :key="post.name">
      <div>名前：{{ post.fields.name.stringValue }}</div>
      <div>コメント：{{ post.fields.comment.stringValue }}</div>
      <br><br>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: "",
      comment: "",
      posts: []
    }
  },
  computed: {
    idToken() {
      return this.$store.getters.idToken;
    }
  },
  created() {
    axios.get(
      '/comments', {
        headers: {
          Authorization: `Bearer ${this.idToken}`
        }
    })
    .then(response => {
      this.posts = response.data.documents;
    })
    .catch(error => {
      console.log(error.response)
    });
  },
  methods: {
    createComment() {
      axios.post(
        '/comments',
        {
          fields: {
            name: {
              stringValue: this.name
            },
            comment: {
              stringValue: this.comment
            }
          }
        },
        {
          headers: {
            Authorization: `Bearer ${this.idToken}`
          }
        }
      )
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error.response)
      });
      this.name = '';
      this.comment = '';
    }
  }
}
</script>
