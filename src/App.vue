<script>
import AppHeader from '@/components/common/AppHeader.vue';

export default {
  components: {
    AppHeader,
  }
}

</script>

<template>
  <AppHeader></AppHeader>
  <router-view></router-view>
</template>

<style>
@import './css/reset.css';
@import './css/common.css';
</style>