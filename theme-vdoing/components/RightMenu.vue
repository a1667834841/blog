<template>
  <div class="right-menu-wrapper">
    <div class="right-menu-margin">
       <svg id="abbMindmap" @click="activeMd" style="overflow:hidden; "></svg>
       <svg id="zoomInMindmap" :class="[isShow? 'hideMind':'showMind']" @click="activeMd"></svg>
      <div class="right-menu-content">
        <div
          :class="['right-menu-item', 'level'+item.level, { active: item.slug === hashText }]"
          v-for="(item, i) in headers"
          :key="i"
        >
          <a :href="'#'+item.slug">{{item.title}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as markmap from "markmap-view";
import { Transformer } from "markmap-lib";
export default {
  data () {
    return {
      headers: [],
      hashText: '',
      title: '',
      isShow: true,
    }
  },
  mounted () {
    this.getHeadersData()
    this.getTitle()
    this.getHashText()
    this.getMd()
    this.geZoomtMd()
  },
  watch: {
    $route () {
      this.headers = this.$page.headers
      this.title = this.$page.title
      this.getHashText()
    }
  },
  methods: {
    getHeadersData () {
      this.headers = this.$page.headers
    },
    getTitle () {
      this.title = this.$page.title
    },
    getHashText () {
      this.hashText = decodeURIComponent(window.location.hash.slice(1))
    },
    getMd() {
      const transformer = new Transformer();
      const mdText = this.getMdText();
      const { root } = transformer.transform(mdText);
      const { styles, scripts } = transformer.getAssets();
      const { Markmap, loadCSS, loadJS } = markmap;
      if (styles) loadCSS(styles);
      if (scripts) loadJS(scripts, { getMarkmap: () => markmap });
      Markmap.create("#abbMindmap", undefined, root);
      this.Markmap = Markmap
    },
    geZoomtMd() {
      const transformer = new Transformer();
      const mdText = this.getMdText();
      const { root } = transformer.transform(mdText);
      const { styles, scripts } = transformer.getAssets();
      const { Markmap, loadCSS, loadJS } = markmap;
      if (styles) loadCSS(styles);
      if (scripts) loadJS(scripts, { getMarkmap: () => markmap });
      let markMap = new Markmap("#zoomInMindmap", undefined, root);
    },
    getMdText() {
      let text = "";
      text = "# "+this.title + "\n\r";
      let headers = this.headers

      for (let i = 0; i < headers.length; i++) {
        let item = headers[i]
        text = text + this.repeat("#",item.level) +" "+ item.title + "\n"
      }
     return text
    },
    repeat(str,n) {
      return new Array(n+1).join(str);
    },
    activeMd() {
      this.isShow = !this.isShow;

      if(this.isShow) {
        this.geZoomtMd()
      } else {
        this.Markmap.destroy()
      }

      console.log( this.isShow)
    }
  }
}
</script>

<style lang='stylus'>

.hideMind
  z-index -1 !important
  left -900px
  overflow hidden
  display none


.showMind
   position absolute
   width 1200px
   height 1000px
   left -1000px
   top -100px
   z-index 9999 !important
   transition 1s
   overflow visible
.right-menu-wrapper
  width $rightMenuWidth
  float right
  margin-right -($rightMenuWidth + 60px)
  position sticky
  top 0
  font-size 0.9rem
  .right-menu-margin
    margin-top ($navbarHeight + 1rem)
  .right-menu-content
    max-height 80vh
    position relative
    overflow hidden
    &::-webkit-scrollbar-track-piece
      background none
    &::-webkit-scrollbar-thumb:vertical
      background-color hsla(0, 0%, 49%, 0.3)
    &:hover
      overflow-y auto
    .right-menu-item
      padding 4px 15px
      border-left 0.13rem solid var(--borderColor)
      &.level3
        padding-left 28px
      &.active
        border-color $accentColor
        a
          color $accentColor
          opacity 1
      a
        color var(--textColor)
        opacity 0.75
        display block
        width ($rightMenuWidth - 30px)
        &:hover
          color $accentColor
.have-body-img
  .right-menu-wrapper
    .right-menu-margin
      padding 0.3rem 0
      background var(--sidebarBg)
      border-radius 5px
      .right-menu-item
        border-color transparent
        &.active
          border-left 0.2rem solid $accentColor
        &:hover
          border-left 0.2rem solid $accentColor
</style>
