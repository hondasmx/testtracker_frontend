<template>
  <div class="row">
    <div v-if="testcase_data != '404 not found' " class="column-8">
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
          <div v-if="step.is_editing">
            <div class="step">
              <span>{{step.step}}</span>
              <button @click="step.is_editing = false">Edit</button>

              <div class="step">{{step.expected_result}}</div>
            </div>
          </div>
          <div v-if="!step.is_editing">
            <div class="step">
              <textarea v-model="step.step" cols=20> </textarea>
              <button @click="step.is_editing = true">Save</button>

              <textarea v-model="step.expected_result"></textarea>
            </div>
          </div>

        </div>

      </div>
      <div class="panel">
        <div class="panel-heading">
          <h3 class="panel-title">Preconditions</h3>
        </div>
        <div class="panel-body">
          {{testcase_data.preconditions}}
        </div>
      </div>
      <button @click="onSaveTestcase">Save testcase</button>
    </div>

    <div v-else="">
      Testcase {{project}}-{{testcase}} not found
    </div>
    <div class="column-4 panel" >
      <div class="panel-heading">
        <h3 class="panel-title">Attributes</h3>
      </div>
      <div v-for="attributes in testcase_data.attributes">
        <div class="panel-body">

          <strong>{{attributes.key}}</strong> : <span class="value_link" v-for="value in attributes.values" >{{value}}</span>
        </div>

      </div>

    </div>
  </div>

</template>

<script>
  import Toastr from 'toastr'
  import axios from 'axios'

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
        response: ''
      }
    },
    mounted()
    {
      axios.get('http://localhost:5000/api/testcases/' + this.project + '/' + this.testcase)
        .then(
          (response) => this.testcase_data = response.data
        );
      document.title = this.project + '-' + this.testcase;
    },
    methods: {
      onSaveTestcase(){
        axios.post('http://localhost:5000/api/testcases/' + this.project + '' + '/' + this.testcase
          , this.testcase_data, {
            headers: {
              'Access-Control-Allow-Origin': 'http://localhost:5000',
              'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
              'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'

            }
          }
        )
        ;
        console.log(this.testcase_data)
      },
      onMouseOver(){
          console.log("hi")
      }
    }
  }
</script>
<style scoped>
  .panel {
    /*width: 33.3%;*/
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

  .panel-body {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 16px;
  }

  .step {
    width: 45%;

  }

  textarea {
    -webkit-appearance: textarea;
    background-color: white;
    -webkit-rtl-ordering: logical;
    user-select: text;
    flex-direction: column;
    cursor: auto;
    white-space: pre-wrap;
    word-wrap: break-word;
    border: 1px solid initial;
    border-image: initial;
    padding: 2px;
  }

  div.row {
    height: 200px;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }

  div.column-1 {
    float: left;
    width: 8.33%;
  }
  div.column-2 {
    float: left;
    width: 16.66%;
  }
  div.column-3 {
    float: left;
    width: 25%;
  }
  div.column-4 {
    float: left;
    width: 33.33%;
  }
  div.column-5 {
    float: left;
    width: 41.66%;
  }
  div.column-6 {
    float: left;
    width: 50%;
  }
  div.column-7 {
    float: left;
    width: 58.33%;
  }
  div.column-8 {
    float: left;
    width: 66.66%;
  }
  div.column-9 {
    float: left;
    width: 75%;
  }
  div.column-10 {
    float: left;
    width: 83.33%;
  }
  div.column-11 {
    float: left;
    width: 91.66%;
  }
  div.column-12 {
    float: left;
    width: 100%;
  }
  .value_link{
    margin: 5px 2px 5px 0;
    border: 1px solid rgba(66, 125, 177, 0.16);
    color: rgba(29, 102, 165, 0.8) !important;
    padding: 3px 5px;
    display: inline-block;
    background: rgba(108, 140, 167, 0.1);
    border-radius: 4px;
  }

</style>
