<template>
    <div>
      <h1>Testcases for {{project}}</h1>
      <ul>
        <li v-for="testcase in testcases"><a v-bind:href="project + '/' + testcase.id">{{project}}-{{testcase.id}}</a> {{testcase.title}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
        props:{
          project:{
              type: String
          }
        },
        data(){
          return {
              testcases: [],
          }
        },
        mounted(){
          axios.get('http://localhost:5000/api/testcases/' + this.project)
            .then(
              (response) => this.testcases = response.data
            );

        }

    }
</script>
