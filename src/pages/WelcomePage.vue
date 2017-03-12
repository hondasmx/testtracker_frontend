<template>
    <div>
      <h1>Welcome page</h1>
      <ul >
        <li v-for="project in project_list">{{project}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
      data(){
          return{
             project_list : []
          }
      },
      mounted(){
        axios.get('http://127.0.0.1:5000/project/')
          .then(
            (response) => this.project_list = response.data
          );
      }
    }
</script>
