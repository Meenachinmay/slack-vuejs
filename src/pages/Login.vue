<template>
    <div class="flex items-center">
        
        <div class="p-16 mx-auto">
            <div class="text-5xl text-gray-800 p-5 text-center mb-5">
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
export default {
    name: 'login',
    methods: {
        loginwithGoogle (){
            firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then((response) => {
                alert(response.user);
            })
        }
    },
}
</script>