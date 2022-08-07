<template>
  <b-container>
      <b-img :src="ps" style="width: 100%; max-height: 480px"></b-img>
    <div style="padding: 20px 0 20px 0">
      <h3 class="text-center">文书写作服务介绍</h3>
      <span>
        真正的文书写作，不是平铺直叙你的经历，而是通过文字描述你的经历，告诉你未来的大学，你是一个怎么样的学生。
        从字里行间表达最真实的自己。
        Personal Statement、CV，帮你搞定。
      </span>
    </div>
    <div style="padding: 20px 0 20px 0">
      <h3 class="text-center">文书写作服务标准</h3>

      <span>
        说明：<br />
      * 同学们需要提供自己的经历供老师写作，我们无法杜撰出你的人生。<br />
      * 所有服务为一价全包，一切以为同学们写出满意的文书为标准。
    </span>
    </div>
  </b-container>
</template>

<script>
import ps from '@/assets/personalStatement';

export default {
  data() {
    return {
      ps: ps
    }
  }
}
</script>
