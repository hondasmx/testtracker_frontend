<template>
  <div v-if="testcase_data != '404 not found' ">
    <h3>{{project}}-{{testcase}} {{testcase_data.title}}</h3>
    <div class="panel">
      <div class="panel-heading">
        <h3 class="panel-title">Preconditions</h3>
      </div>
      <div class="panel-body">
      {{testcase_data.preconditions}}
      </div>
    </div>
    <div class="panel">
      <div class="panel-heading">
        <h3 class="panel-title">Steps</h3>
      </div>
      <div v-for="step in testcase_data.steps" class="panel-body">
        <span class="step">{{step.step}}</span> -  <span class="step">{{step.expected_result}}</span>
      </div>
    </div>
    <div class="panel">
      <div class="panel-heading">
        <h3 class="panel-title">Attributes</h3>
      </div>
      <div class="panel-body">
        {{testcase_data.preconditions}}
      </div>
    </div>

  </div>

  <div v-else="">
    Testcase {{project}}-{{testcase}} not found
  </div>
</template>

<script>
  import Toastr from 'toastr'

  export default {
    props: {
      project: {
        type: String,
      },
      testcase: {}
    },
    data(){
      return {
        testcase_data: '',
      }
    },
    mounted()
    {
      axios.get('http://localhost:5000/api/testcases/' + this.project + '' + '/' + this.testcase)
        .then(
          (response) => this.testcase_data = response.data
        );
      document.title = this.project + '-' + this.testcase
    }
  }
</script>
<style scoped>
  .panel {
    width: 33.3%;
    margin-bottom: 20px;
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);

  }

  .panel-heading {
    padding: 10px 15px;
    border-bottom: 1px solid transparent;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
  }

  .panel-title {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 16px;
    color: inherit;
  }
  .panel-body{
    margin-top: 0;
    margin-bottom: 0;
    font-size: 16px;
  }
  .step {
    width: 45%;

  }
</style>
