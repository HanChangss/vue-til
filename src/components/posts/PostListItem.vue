<script>
import { deletePosts}  from '@/api/index'
export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async deleteItem() {

      if(confirm("정말 삭제하시겠습니까 ? ")) {
        await deletePosts(this.postItem._id);
        this.$emit('refresh');
      } else {

      }

    },
    moveEditPage() {
      this.$router.push(`post/${this.postItem._id}`)
    }
  }
}
</script>

<template>
  <li>
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-contents">
      {{ postItem.contents }}
    </div>
    <div class="post-time">
      {{ postItem.createdAt }}
      <i class="icon ion-md-create" @click="moveEditPage"></i>
      <i class="icon ion-md-trash" @click="deleteItem"></i>
    </div>
  </li>
</template>

<style scoped>

</style>