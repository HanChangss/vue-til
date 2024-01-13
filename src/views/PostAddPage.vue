<script>
import PostAddForm from "@/components/posts/PostAddForm.vue";
export default {
  components : {
    PostAddForm
  }
}
</script>

<template>
  <div>
    생성페이지
  </div>
  <PostAddForm :type="parentType"></PostAddForm>
</template>

<style scoped>

</style>