import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
import firebase from 'firebase/app';
import store from './store'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDoj3Ki-FxZZH9HsGhicqP0qdyfP8rDUSE",
  authDomain: "vuex-slack-94ef3.firebaseapp.com",
  databaseURL: "https://vuex-slack-94ef3.firebaseio.com",
  projectId: "vuex-slack-94ef3",
  storageBucket: "vuex-slack-94ef3.appspot.com",
  messagingSenderId: "474752229768",
  appId: "1:474752229768:web:d22b15a9a8da1130369a3d",
  measurementId: "G-0DNEX7MPM2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// perserve the state of logged in users, by saving the state of logged in user
const unsubscribe = firebase.auth().onAuthStateChanged(user => {
  store.dispatch('setUser', user);

  new Vue({
    render: h => h(App),
    router,
    store,
  }).$mount('#app');

  unsubscribe();
});

