<template>
  <div class="hello">
    <article class="message" style="width: 30%">
      <div class="message-header">
        <p>Step</p>
        <button class="delete"></button>
      </div>
      <div class="message-body">
        {{response_data}}
      </div>
      <footer class="card-footer">
        <a class="card-footer-item">Edit</a>
      </footer>
    </article>


    <br><br><br><br>

  </div>
</template>

<script>
  import Firebase from 'firebase'
  import Toastr from 'toastr'

  export default {
    props: {
        project: {
            type: String,
        },
        testcase: {

      }
    },
    data(){
      return {
        add_expected_result: '',
        add_step: '',
        response_data: {},
      }
    },
    mounted()
    {
      axios.get('http://localhost:5000/api/testcase/'+ this.project + ''+ '/'+ this.testcase).then((response) => this.response_data = response.data)
      document.title = this.project + '-' + this.testcase
    }
  }
</script>
<style scoped>

</style>
