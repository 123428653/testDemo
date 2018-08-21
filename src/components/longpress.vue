<template>
  <div class="a">
    <button v-longpress="addPress" @click="addClick">按钮可以长按哦</button>
    <strong>{{val}}</strong>
  </div>
</template>
<script type="text/javascript">
  import Vue from 'vue'

  Vue.directive('longpress',{
    bind(el,binding,vNode){
      if(typeof binding.value !== 'function'){
        console.warn('[v-longpress:] 传递的表达式必须是一个函数')
        return;
      }

      let timer = null;
      
      let start = (e) => {
        if(e.type === 'click' && e.button !== 0){
          return;
        }

        if(timer === null){
          timer = setTimeout(() =>{
            binding.value()
          },1000)
        }
      }

      let cancel = (e) => {
        if(timer !== null){
          clearTimeout(timer);
          timer = null;
        }
      }

      // 添加事件监听器
      el.addEventListener("mousedown", start);
      el.addEventListener("touchstart", start);

      // 取消计时器
      el.addEventListener("click", cancel);
      el.addEventListener("mouseout", cancel);
      el.addEventListener("touchend", cancel);
      el.addEventListener("touchcancel", cancel);
    }
  })
  export default {
    name:'Longpress',
    data(){
      return {
        val: 0,
      }
    },
    methods:{
      addPress(){
        console.log('长按！！！')
        this.val += 10
      },
      addClick(){
        // this.val ++
      }
    }
  };
</script>
<style scoped>
  button{border:1px solid #ddd;background-color:#eee;padding:5px 20px;border-radius:3px;outline: none;}
  button:active{background-color:#ddd;}
</style>