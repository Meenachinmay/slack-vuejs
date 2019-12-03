<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" @keyup.esc="close">
      <div class="flex-col flex bg-white text-gray-800 text-sm rounded-lg p-6 w-full max-w-md">
        <header class="flex items-center justify-center p-3">
          <p class="text-lg font-semibold">
              Add a new Channel
          </p>
        </header>
        <input type="text" class="border border-gray-300 p-2 rounded w-full 
            focus:outline-none hover:border-gray-500 text-lg" 
            placeholder="Enter channel name...">
        <footer class="flex items-center justify-between mt-5">
            <button class="block p-2 text-sm rounded bg-blue-400 font-semibold text-white hover:bg-blue-600">
                Add new Channel
            </button>
            <button @click="close" class="block p-2 text-sm rounded bg-red-400 font-semibold text-white hover:bg-red-600">
                Cancel
            </button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'addchannel',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
