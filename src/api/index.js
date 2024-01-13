import axios from 'axios';
import {store} from '@/store/index';
import { setInterceptors } from './common/interceptors';


// // 액시오스 초기화 함수
// function createInstance() {
//   const instance = axios.create({
//     baseURL: process.env.VUE_APP_API_URL,
//   });
//   return setInterceptors(instance);
// }
// const instance = createInstance();



const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
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

function  createPosts(postData) {
    return instance.post('posts', postData);
}

export {registerUser, loginUser, fetchPosts, createPosts};