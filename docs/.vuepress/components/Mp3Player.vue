<template>
    <!-- <div style=" margin-left: 20px; margin-right:20px  ">
        音乐
        <el-switch
        v-model="isPlay"
        @change="play">
        </el-switch>
        <audio ref="music" loop> 
        <source src="../public/mp3/warm.mp3" type="audio/mpeg">
        </audio>
    </div> -->
    <Player/>
</template>

<script>
import Player from 'zw-player'
  export default{
    data(){
      return {
        dialogTableVisible:false,
        isPlay:false,
      }
    },
    components:{
      Player
    }
    // methods:{
    //   play(){
    //     if(this.$refs.music.paused){
    //       this.$refs.music.play()
    //     }else{
    //       this.$refs.music.pause()
    //     }
    //     this.isPlay=!this.$refs.music.paused
    //   }
    // }  
  }
</script>