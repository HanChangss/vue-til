<script>
import {fetchPosts} from "@/api";
import PostListItem from '@/components/posts/PostListItem.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';

export default {
  components: {
    PostListItem,
    LoadingSpinner,
  },
  data() {
    return {
      postsItems : [],
      isLoading: false,
    }
  },
  methods: {
      async fetchData() {
        this.isLoading = true;
        const { data } = await fetchPosts();
        this.isLoading =false;
        this.postsItems = data.posts;
      }
  },
  created() {
    this.fetchData();
  },
}
</script>

<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <LoadingSpinner v-if="isLoading"></LoadingSpinner>
      <ul v-else>
        <PostListItem
            v-for="postItem in postsItems"
            :key="postItem._id"
            :postItem="postItem"
            @refresh="fetchData"
        ></PostListItem>
      </ul>
      <router-link to="/add" class="create-button">
        <i class="ion-md-add"></i>
      </router-link>
    </div>
  </div>
</template>

<style>

</style>