import axios from 'axios';
import {store} from '@/store/index';
import { setInterceptors } from './common/interceptors';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

const test = axios.create({
    baseURL: process.env.VUE_APP_API_URL + 'posts',
});

// 요청 인터셉터 설정
instance.interceptors.request.use(
    (config) => {
      // 요청 보내기 전에 수행할 작업 설정

      config.headers.Authorization = store.state.token;
      console.log('Request Interceptor:', config);
      return config;
    },
    (error) => {
      // 요청 에러 처리
      return Promise.reject(error);
    }
);

// 응답 인터셉터 설정
instance.interceptors.response.use(
    (response) => {
      // 응답 받은 후 수행할 작업 설정
      console.log('Response Interceptor:', response);
      return response;
    },
    (error) => {
      // 응답 에러 처리
      return Promise.reject(error);
    }
);


// 회원가입 API
function registerUser(userData) {
  return instance.post('signup', userData);
}

//로그인 API
function  loginUser(userData) {
  return instance.post('login', userData);
}

//학습 노트 데이터를 조회하는 API
function  fetchPosts() {
  return instance.get('posts')
}

//학습 노트 한건만 가져오는 API
function fetchPost(postsId) {
    return instance.get(`posts/${postsId}`)
}

//학습 노트 데이터 생성하는 API
function  createPosts(postData) {
    return instance.post('posts', postData);
}

// 학스 노트 데이터를 삭제하는 API
function deletePosts(postsId) {
    return instance.delete(`posts/${postsId}`);
}

//학습 노트 수정하는 API
function editPosts(postsId,postData) {
    return instance.put(`posts/${postsId}`,postData);
}


export {registerUser, loginUser, fetchPosts, fetchPost, createPosts, deletePosts, editPosts};