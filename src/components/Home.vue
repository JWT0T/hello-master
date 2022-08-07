<template>
  <b-container>
    <div style="padding: 20px 0 20px 0">
      <b-carousel
      fade
      indicators
      controls
      interval="2500"
      >
      <b-carousel-slide
      caption="英国"
      :img-src="london"
      style="max-height: 480px"
      ></b-carousel-slide>

      <b-carousel-slide
      caption="新加坡"
      :img-src="singapore"
      style="max-height: 480px"
      >
    </b-carousel-slide>

    <b-carousel-slide
    caption="德国"
    :img-src="germany"
    style="max-height: 480px"
    >
  </b-carousel-slide>

  <b-carousel-slide
  caption="澳大利亚"
  :img-src="australia"
  style="max-height: 480px"
  >
</b-carousel-slide>
</b-carousel>
</div>

<div style="padding: 20px 0 20px 0">
  <h3 class="text-center">关于我们</h3>
  <b-card
  :img-src="logo"
  img-width="300"
  img-height="300"
  img-left
  style="border: none">
  <b-card-text>
    Hello Master是一家专注于硕士申请的线上服务平台。我们致力于通过数据，为同学们选择到最合适的海外院校。<br />
    我们运用最新爬虫技术，集合了英联邦国家各大高校的硕士申请数据。同学们可以根据自身情况，输入数据，快速选择出适合自己的院校。<br />
    同时，我们还提供基础的文书写作、留学申请服务，为同学们的留学之旅，敲开大门。<br />
    无论你是申请本科还是硕士，都有学长、学姐一步步指导你，申请到心仪的院校。
  </b-card-text>
</b-card>
</div>

<div style="padding: 20px 0 20px 0">
  <h3 class="text-center">我们的服务</h3>
  <b-card-group>
    <b-card
    title="择校"
    :img-src="searching"
    img-height="200"
    img-top
    style="max-width: 30rem; border: none"
    >
    <b-card-text>
      我们运用最新爬虫技术，集合了英联邦国家各大高校的硕士申请数据。同学们可以根据自身情况，输入数据，快速选择出适合自己的院校。<br />
      针对本科申请，我们有专业的老师为你量身定制专属选校表。提早规划，助力成功。
    </b-card-text>
  </b-card>

  <b-card
  title="文书写作"
  :img-src="writing"
  img-height="200"
  img-top
  style="max-height: 10px; max-width: 30rem; border: none"
  >
  <b-card-text>
    Hello Master拥有专业的老师，为你量身打造只属于你的文书。让院校教授在读完茫茫文书后，记住你，认识你，从而录取你。<br />
    同时，我们与国外同学合作，润色你的文书写作，让你的文书赢在起跑线上。
  </b-card-text>
</b-card>

<b-card
title="申请"
:img-src="applying"
img-height="200"
img-top
style="max-height: 10px; max-width: 30rem; border: none"
>
<b-card-text>
  还在为填写各种各样的表格而感到烦躁吗？把这些枯燥的申请表填写工作交给Hello Master吧！我们细心的老师会在你的资料准备齐全之后，帮你填写好所有的申请表，仔细核验资料，确保万无一失。
</b-card-text>
</b-card>
</b-card-group>
</div>

<div style="padding: 20px 0 20px 0">
  <h3 class="text-center">为什么选择我们？</h3>
  海量数据支撑，经验丰富，专业，细心，所以值得信赖
</div>

<div style="padding: 20px 0 20px 0">
  <h3 class="text-center">我们的宗旨</h3>
  <b-card style="border: none">
    <div class="text-center mb-4 pb-2">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-quotes/bulb.webp"
      alt="Bulb" width="100">
    </div>

    <figure class="text-center mb-0">
      <blockquote class="blockquote">
        <p class="pb-3">
          <i class="fas fa-quote-left fa-xs text-primary"></i>
          <span class="lead font-italic">
            Work Hard, Play Hard
          </span>
          <i class="fas fa-quote-right fa-xs text-primary"></i>
        </p>
      </blockquote>
      <figcaption class="blockquote-footer mb-0">
        Imperial College London
      </figcaption>
    </figure>
  </b-card>
</div>

<footer class="text-center">
  陕西留梦咨询有限公司©2022
</footer>

</b-container>
</template>

<script>
import london from '@/assets/london';
import singapore from '@/assets/singapore';
import australia from '@/assets/australia';
import germany from '@/assets/germany';

import searching from '@/assets/searching';
import writing from '@/assets/writing';
import applying from '@/assets/applying';

export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      london: london,
      singapore: singapore,
      australia: australia,
      germany: germany,
      searching: searching,
      writing: writing,
      applying: applying
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>
