<template>
  <div class="content-layout">
    <h5 class="title" :style="styleObject">{{ title }}</h5>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ContentLayout',
    props: {
      title: {
        type: String,
        required: true
      },
      darkColor: {
        type: String,
        default: ''
      },
      lightColor: {
        type: String,
        default: ''
      }
    },
    computed: {
      styleObject() {
        return {
          background: `linear-gradient(90deg, ${this.darkColor}, ${this.lightColor})`
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content-layout {
    margin: 30px 0;
    padding: 0;
  }
  .title {
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    color: #fff;
    padding: 0 40px;
    border-radius: 6px 6px 0px 0px;
  }
  .content {
    border-radius: 6px;
    box-shadow: 0px 2px 10px 0px rgba(102, 102, 153, 0.1);
  }
  @media only screen and (max-width:1023px) {
    .title {
      height: 40px;
      line-height: 40px;
    }
    .content-layout {
      margin: 20px 0;
      padding: 0 15px;
    }
  }
  @media only screen and (max-width:1366px) {
    .content-layout {
      margin: 20px 0;
      padding: 0 15px;
    }
  }
</style>
