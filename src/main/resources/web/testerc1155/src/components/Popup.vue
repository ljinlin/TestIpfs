<template>
    <el-dialog
    :visible.sync="alertObj.isShow"
    :show-close="false"
    :lock-scroll="false"
  >
    <div>
      <div class="popup-top"></div>
      <div class="popup-body">
        <span class="popup-img">
          <img :class="alertObj.type" :src="require(`../assets/image/${alertObj.type}.png`)" alt="">
        </span>
        <span class="popup-txt">{{alertObj.message}}</span>
      </div>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: 'Popup',
  props: {
    alertObj:{
      type: Object,
      default(){
        return {'isShow':false,'type':'success','message':''}
      }
    }
  },
  mounted(){

  },
  data() {
    return {
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
  .popup-top {
    height: 15px;
    background: linear-gradient(90deg, #9c52ff, #6339f3);
  }
  .popup-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    .popup-img {
      padding: 30px 20px 15px 20px;
      .success, .fail, .loading {
        width: 50px;
        height: 50px;
      }
      .loading {
        animation:loading-rotate 1s linear infinite
      }
    }
    .popup-txt {
      font-size: 14px;
      color: #666;
      padding-bottom: 30px;
    }
  }
  @keyframes loading-rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @media screen and (min-width: 768px) {
    .popup-body {
      .popup-img {
        padding: 40px 20px 24px 20px;
        .success, .fail, .loading {
          width: 64px;
          height: 64px;
        }
      }
      .popup-txt {
        font-size: 16px;
      }
    }
  }
</style>