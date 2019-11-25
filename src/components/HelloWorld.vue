<template>
  <div>
    <button class="text-xl bg-red-500 py-2 px-10 rounded 
    text-white shadow hover:bg-white 
    hover:text-red-500 focus:outline-none cursor-pointer border hover:border-white">
      Hello World
    </button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
