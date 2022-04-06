<template>
  <div class="busuanzi">
    <span id="busuanzi_container_site_pv" style="display:none">
       总访问量
      <span id="busuanzi_value_site_pv"></span>次
      <span class="post-meta-divider">|</span>
    </span>
    <span id="busuanzi_container_site_uv" style="display:none">
      您是第
      <span id="busuanzi_value_site_uv"></span>位访客
    </span>
  </div>
</template>
 
<script>
let script;
export default {
  mounted() {
    script = require("busuanzi.pure.js");
  },
  // 监听,当路由发生变化的时候执行
  watch: {
    $route(to, from) {
      if (to.path != from.path) {
        script.fetch();
      }
      // console.log(to.path);
    }
  }
};
</script>

