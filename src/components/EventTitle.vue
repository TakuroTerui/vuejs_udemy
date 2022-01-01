<template>
  <duv>
    <label for="title">タイトル</label>
    <input
      id="title"
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
    <pre>{{ value }}</pre>
  </duv>
</template>

<script>
export default {
  props: ['value']
};
</script>