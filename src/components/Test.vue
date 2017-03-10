<template>
    <div>
      Hello world
{{data}}
    </div>
</template>

<script>
    export default {
      data(){
          return {
              data : window.location.href
          }
      }
    }
</script>
