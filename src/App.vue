<template>
  <div class="count">
    {{ count }}
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<style lang="scss">
.count {
  font-size: 20px;
  color: aqua;
}
</style>
