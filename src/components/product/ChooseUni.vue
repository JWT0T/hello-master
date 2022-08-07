<template>
  <b-container>
    <div>
      <b-img :src="bigdata" style="width: 100%; max-height: 480px"></b-img>
    </div>
    <div style="padding: 20px 0 20px 0">
      <h3 class="text-center">择校服务介绍</h3>
      <span>
        我们拥有强大的数据库，运用最新爬虫技术，收录了世界前100名英联邦国家6类国内最热门专业的申请数据。
        我们提供针对大学排名简单的免费搜索。
        付费搜索提供最推荐的五个大学，详细数据包括大学的排名、地理位置、申请分数要求、语言要求、学费。
      </span>
      <div>
        <h3 class="text-center">热门专业</h3>
        <b-table hover caption-top :items="majors"></b-table>
      </div>
      <div>
        <h3 class="text-center">我们的服务</h3>
        <b-table hover caption-top :items="service"></b-table>
      </div>
    </div>
  </b-container>
</template>

<script>
import bigdata from '@/assets/bigdata';

  export default {
    data() {
      return {
        bigdata: bigdata,
        majors: [
          { '专业': '数学', '关键词': '大数据，数据分析' },
          { '专业': '计算机', '关键词': '软件工程，信息工程，大数据'  },
          { '专业': '金融', '关键词': '经济，数学' },
          { '专业': '会计' },
          { '专业': '建筑' },
          { '专业': '电子工程', '关键词': '芯片' }
        ],
        service: [
          { '服务': '排名', '免费版': '✔️', '选校付费版': '✔️', 'VIP版': '✔️'},
          { '服务': '地理位置', '免费版': '✔️', '选校付费版': '✔️', 'VIP版': '✔️'},
          { '服务': '专业推荐', '免费版': '✔️', '选校付费版': '✔️', 'VIP版': '✔️'},
          { '服务': '本科成绩（GPA）', '免费版': '✔️', '选校付费版': '✔️', 'VIP版': '✔️'},
          { '服务': '英语成绩（雅思，托福，PTE）', '免费版': '×', '选校付费版': '✔️', 'VIP版': '✔️'},
          { '服务': '申请费', '免费版': '×', '选校付费版': '✔️', 'VIP版': '✔️'},
          { '服务': '申请截止时间', '免费版': '×', '选校付费版': '✔️', 'VIP版': '✔️'},
          { '服务': '学费', '免费版': '×', '选校付费版': '✔️', 'VIP版': '✔️'},
          { '服务': '专属选校表', '免费版': '×', '选校付费版': '×', 'VIP版': '✔️'}
        ]
      }
    }
  }
</script>
