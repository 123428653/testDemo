<template>
  <div class="myInput">
    <input type="text" :value="currentVal" @input="handleInput">
  </div>
</template>
<script type="text/javascript">
  export default {
    name:'MyInput',
    props:['value'],
    data(){
      return {
        currentVal:this.value
      }
    },
    methods:{
      handleInput(e){
        var val = e.target.value;
        this.$emit('input',val)
      }
    }
  };

</script>
<style scoped>
  .myInput{display: inline-block;}
</style>