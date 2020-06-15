<template>
  <div>
    <!-- <h1>我是数据展示页面</h1> -->
    <!-- <ve-line :data="chartData"></ve-line> -->
    <!-- <LineChart :chart-data="lineChartData"></LineChart> -->

    <panel-group @handleSetLineChartData="handleSetLineChartData" />

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData" />
    </el-row>

    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <raddar-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
import LineChart from './components/LineChart'
import PanelGroup from './components/PanelGroup'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'

import VeLine from 'v-charts/lib/line.common'

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}
export default {
  name: '',
  data() {
    return {
      lineChartData: lineChartData.newVisitis,
      chartData: {
        columns: ['date', '用户量', '订单量'],
        rows: [
          { 'date': 'Mon', '用户量': 1231, '订单量': 300 },
          { 'date': 'Tue', '用户量': 1231, '订单量': 800 },
          { 'date': 'Wed', '用户量': 1223, '订单量': 900 },
          { 'date': 'Thu', '用户量': 2123, '订单量': 1300 },
          { 'date': 'Fri', '用户量': 4123, '订单量': 2200 },
          { 'date': 'Sat', '用户量': 3123, '订单量': 2500 },
          { 'date': 'Sun', '用户量': 7123, '订单量': 4400 }
        ]
      }
    }
  },
  components: {
    VeLine,
    LineChart,
    PanelGroup,
    RaddarChart,
    PieChart,
    BarChart
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type];
    }
  }
}
</script>

<style scoped></style>
