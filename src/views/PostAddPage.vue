<script>
import PostAddForm from "@/components/posts/PostAddForm.vue";
export default {
  components : {
    PostAddForm
  }
}
</script>

<template>
  <PostAddForm :type="parentType"></PostAddForm>
</template>

<style scoped>

</style>