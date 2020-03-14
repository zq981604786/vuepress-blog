<template>
  <div class="vcomment" v-if="data.comments">
    <div id="vcomments"></div>
  </div>
</template>

<script>
export default {
  computed: {
    data () {
      return {
          comments:this.$page.frontmatter.comments
      }
    },
  },
  mounted: function(){
    this.createValine()
  },
  
  methods: {
    createValine() {
      const Valine = require('valine');
      const valine =  new Valine({
        el: '#vcomments',
        appId: 'JXB7XoseFguFRbznSIX6UoyF-gzGzoHsz',
        appKey: 'Uc0Xn7AgJnkwCA2qQeiVLqL8',
        notify: false,
        verify: false,
        avatar: 'monsterid',
        placeholder: '欢迎留言与我分享您的想法...',
      });
      this.valineRefresh = false
    }
  }
}
</script>
<style lang="stylus">
#vcomments {
  max-width 740px
  padding 10px
  display block;
  margin-left auto;
  margin-right auto;
}
</style>