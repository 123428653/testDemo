<template>
  <div id="app">
    <div class="box">
      <h3>1、输入框组件上的v-model</h3>
      <my-input v-model="msg" />
      <span>{{ msg }}</span>
    </div>
    <div class="box">
      <h3>2、复选框组件上的v-model</h3>
      <my-checkbox v-model="isChecked"></my-checkbox>
      <span>{{ isChecked }}</span>
    </div>
    <div class="box">
      <h3>3、长按事件</h3>
      <longpress />
    </div>
    
  </div>
</template>
<script type="text/javascript">
  import MyInput from './components/myInput'
  import MyCheckbox from './components/myCheckbox'
  import Longpress from './components/longpress'
  export default {
    name: 'App',
    components:{
      Longpress,
      MyInput,
      MyCheckbox
    },
    data(){
      return {msg: 'Vuex',isChecked:false}
    },
    methods:{
    },
    computed:{
    }
  };
</script>
<style lang="scss">
  @import './assets/scss/base.scss';

  .box{margin-bottom:20px;}
</style>