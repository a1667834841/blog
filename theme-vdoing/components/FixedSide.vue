<template>
  <div class="page-side-toolbar"><!---->
    <div class="option-box"><img
        src="/images/system/toc.png"
        class="nozoom"
      > <span class="show-txt">目录</span></div>
    <div class="option-box"><img
        src="/images/system/toggle.png"
        width="30px"
        class="nozoom"
      > <span class="show-txt">侧边栏</span></div>
    <div class="option-box"><img
        src="/images/system/dark.svg"
        width="30px"
        class="nozoom"
      > <span class="show-txt">夜间</span></div>
    <div class="option-box"><img
        src="/images/system/wexin4.png"
        width="25px"
        class="nozoom"
      > <span class="show-txt">技术群</span>
      <div class="toc-container">
        <div class="pos-box">
          <div class="icon-arrow"></div>
          <div
            class="scroll-box"
            style="text-align: center;"
          ><span style="font-size: 0.7rem; font-weight: bold;">关注小林的公众号，回复<span style="color: red;">「加群」</span>，拉你进百人技术交流群</span> <img
              src="https://cdn.xiaolincoding.com/gh/xiaolincoder/xiaolincoding.jpeg"
              height="180px"
              style="margin: 10px;"
            >
            公众号：小林coding
          </div>
        </div>
      </div>
    </div>
    <div class="option-box"><img
        src="/images/system/download.png"
        width="25px"
        class="nozoom"
      > <span class="show-txt">资料</span>
      <div class="toc-container">
        <div class="pos-box">
          <div class="icon-arrow"></div>
          <div
            class="scroll-box"
            style="text-align: center;"
          ><span style="font-size: 0.7rem; font-weight: bold;">关注小林的公众号，回复<span style="color: red;">「图解」</span>，获取图解系列 PDF 电子版</span> <img
              src="https://cdn.xiaolincoding.com/gh/xiaolincoder/xiaolincoding.jpeg"
              height="180px"
              style="margin: 10px;"
            >
            公众号：小林coding
          </div>
        </div>
      </div>
    </div>
    <div class="option-box"><img
        src="/images/system/red-heart.png"
        width="25px"
        class="nozoom"
      > <span class="show-txt">支持我</span>
      <div class="toc-container">
        <div class="pos-box">
          <div class="icon-arrow"></div>
          <div
            class="scroll-box"
            style="text-align: center;"
          ><span style="font-size: 0.8rem; font-weight: bold;">微信赞赏码</span> <img
              height="210px"
              src="https://cdn.xiaolincoding.com/gh/xiaolincoder/wechat_reword.webp"
              style="margin: 5px;"
            > <br>但凡网站的内容对你有点帮助或者启发，可以给小林一个小小的赞赏表示支持，这是对坚持图解的我是一种鼓励与动力，千言万语化成一句，感谢大家的陪伴与支持！
          </div>
        </div>
      </div>
    </div> <!---->
    <div
      title="Redis 常见面试题"
      class="option-box"
      style="padding-left: 2px; text-align: center;"
    ><a
        href="/redis/base/redis_interview.html"
        class=""
      ><img
          src="/images/system/next2.png"
          width="30px"
          class="nozoom"
        > <span class="show-txt">下一篇</span></a></div>
  </div>
</template>

<script>
export default {
  computed: {
    blogger() {
      return this.$themeConfig.blogger;
    },
    social() {
      return this.$themeConfig.social;
    },
  },
};
</script>

<style lang='stylus'>
.blogger-wrapper {
  height: auto;
  display: inline-table;
  padding-top: 0 !important;
  overflow: hidden;

  .avatar {
    width: 100%;
    // height 235px
    overflow: hidden;

    @media (max-width: 900px) {
      // width 205px
      // height 205px
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  .icons {
    // border 1px solid var(--borderColor)
    border-top: none;
    height: 35px;
    line-height: 35px;

    a {
      font-size: 20px;
      width: 33%;
      color: var(--textColor);
      display: block;
      float: left;
      text-align: center;
      opacity: 0.8;

      &:hover {
        color: $accentColor;
      }
    }
  }

  .blogger {
    padding: 0.3rem 0.95rem 0 0.95rem;

    .name {
      font-size: 1.3rem;
      display: block;
      margin-bottom: 6px;
    }

    .slogan {
      color: var(--textColor);
    }
  }
}
</style>
