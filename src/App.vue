<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{ number }}</h2>
    <LikeNumber :total-number="number" @my-click="number = $event"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue'

export default {
  data() {
    return {
      number: 10
    };
  },
  components: {
    LikeHeader
  }
}
</script>