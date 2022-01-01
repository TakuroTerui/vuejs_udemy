<template>
  <div>
    <p v-border:dotted.round.shadow="{width: '5px', color: 'red'}">home</p>
    <h2>{{ title | lowerCase }}</h2>
    <p>{{ subTitle | lowerCase }}</p>
    <p>{{ number }}</p>
    <button @click="number+=1">+1</button>
    <count-number></count-number>
  </div>
</template>

<script>
import CountNumber from './CountNumber.vue'
import { tokyoNumber } from "@/tokyoNumber";

// カスタムディレクティブ（ローカル）
export default {
  mixins: [tokyoNumber],
  components: {
    CountNumber
  },
  directives: {
    border(el, binding) {
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      if (binding.modifiers.round) {
        el.style.borderRadius = "0.5rem";
      }
      if (binding.modifiers.shadow) {
        el.style.boxShadow = "0 2px 5px";
      }
    }
  }
}
</script>