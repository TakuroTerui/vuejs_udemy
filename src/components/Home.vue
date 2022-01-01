<template>
  <p v-border:dotted.round.shadow="{width: '5px', color: 'red'}">home</p>
</template>

<script>
// カスタムディレクティブ（ローカル）
export default {
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