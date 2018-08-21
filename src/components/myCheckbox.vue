<template>
  <div class="myCheckbox">
    <input type="checkbox" :checked="currentVal" @change="handleChange">
  </div>
</template>
<script type="text/javascript">
  export default {
    name:'myCheckbox',
    model:{
      prop:'checked',
      event:'change'
    },
    props:{
      checked:Boolean
    },
    data(){
      return {
        currentVal:this.checked
      }
    },
    methods:{
      handleChange(e){
        var val = e.target.checked;
        this.$emit('change',val)
      }
    }
  };
</script>
<style scoped>
  .myCheckbox{display: inline-block;}
</style>