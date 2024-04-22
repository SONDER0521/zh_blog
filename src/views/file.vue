<template>
  <div style="width: 60%; background-color: #FFFFFF; margin: 0 auto; border: 1px solid #000; display: flex;">
    <a-timeline style="padding:20px ;">
      <a-timeline-item  lineType="dashed">
        <a-typography-text type="secondary" :style="{ fontSize: '30px', marginTop: '4px',fontWeight:'bold'  }">
          2024
          <a-timeline-item label="2024-03-10" lineType="dashed">
            <a-typography-text type="secondary" :style="{ fontSize: '1em', marginTop: '4px',fontWeight:'bold' }">
              这是时间轴页面
            </a-typography-text>
          </a-timeline-item>
          <a-timeline-item label="2024-03-10" lineType="dashed">
            <a-typography-text type="secondary" :style="{ fontSize: '12px', marginTop: '4px' }">
              这是时间轴页面
            </a-typography-text>
          </a-timeline-item>
          <a-timeline-item label="2024-03-10" lineType="dashed">
            <a-typography-text type="secondary" :style="{ fontSize: '12px', marginTop: '4px' }">
              这是时间轴页面
            </a-typography-text>
          </a-timeline-item>
        </a-typography-text>
      </a-timeline-item>

      <a-timeline-item  lineType="dashed">
        <a-typography-text type="secondary" :style="{ fontSize: '12px', marginTop: '4px' }">
          2018
          <br>
          <a-timeline-item label="2017-03-10" lineType="dashed">
            <a-typography-text type="secondary" :style="{ fontSize: '12px', marginTop: '4px' }">
              这是时间轴页面
            </a-typography-text>
          </a-timeline-item>
        </a-typography-text>
      </a-timeline-item>
      
    </a-timeline>
  </div>
</template>

<script>
export default {

}
</script>

<style></style>
