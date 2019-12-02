<template>
    <div>
        <transition name="fadeloginflash">
            <div class="text-center w-full bg-green-500 p-4 text-white font-semibold uppercase" v-if="isLoading">
                Login is in Process...
            </div>
        </transition>
        <transition name="fadeerrors">
            <div v-show="hasErrors" class="text-center w-full bg-red-500 p-4 text-white font-semibold uppercase text-sm">
                    <div v-for="error in errors" :key="error.id">
                        <li>{{ error }}</li>
                    </div>
            </div>
        </transition>
        <div class="p-16 mx-auto">
            <div class="text-5xl text-gray-800 text-center">
                Slack Replica
                <p class="text-sm text-gray-600">
                    A real time communication app replica
                </p>
                  <button @click="loginwithGoogle" class="text-sm bg-red-500 py-2 px-10 rounded-full 
                    text-white shadow hover:bg-white 
                    hover:text-red-500 focus:outline-none cursor-pointer border hover:border-white font-semibold">
                    Login with Google
                 </button>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
export default {
    name: 'login',
    data(){
        return {
            errors: [],
            isLoading:false,
            hasErrors: false,
            usersRef: null
        }
    },
    methods: {
        loginwithGoogle (){
            this.isLoading = true;
            this.errors = [];
            firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then((response) => {
                this.isLoading = false;
                this.usersRef = firebase.database().ref('users');
                this.saveUserToUsersRef(response.user);
                // dispatch the action
                this.$store.dispatch('setUser', response.user);

                // redirect to home route
                this.$router.push('/');
            })
            .catch(error => {
                this.isLoading = false;
                this.errors.push(error.message);
                this.flashErrors();
            });
        },
        saveUserToUsersRef(user){
            return this.usersRef.child(user.uid).set({
                name: user.displayName,
                avatar: user.photoURL,
            });
        },
        flashErrors(){
            this.hasErrors = true;
             setTimeout(() => {
                this.unflashErrors(); 
            }, 5000);
        },  
        unflashErrors(){
            this.hasErrors = false;
        }
    },
}
</script>

<style>
.fadeerrors-enter-active, .fadeerrors-leave-active {
  transition: opacity .5s;
}
.fadeerrors-enter, .fadeerrors-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>