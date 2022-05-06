<template>
  <div class="bar-ctn" ref="barCtn"></div>
</template>

<script>
// import equConfig from '../zoneControl/comp/equip/config'
import * as echarts from "echarts";

export default {
  name: "ChartComp",
  props: {
    // dateType: String,
    scale: Number,
    defaultajax: String || Object,
    defaultoptionStructure: String,
    /* defaultajaxUrl: String,
    defaultajaxType: String,
    defaultajaxCallback: String,
    defaultajaxParams: String, */
  },
  data() {
    return {
      ajax: this.defaultajax,
      /* ajaxUrl: this.defaultajaxUrl,
      ajaxType: this.defaultajaxType,
      ajaxParams: this.defaultajaxParams, */
      optionStructure: this.defaultoptionStructure,
      // ajaxCallback: this.defaultajaxCallback,
    };
  },
  created() {
    // week\month\year
    // this.getData(this.dateType)
  },
  updated() {
    console.log("fff");
  },

  mounted() {
    this.myChart = echarts.init(this.$refs.barCtn);
    this.getData();
  },
  computed: {},
  methods: {
    updateData(obj) {
      for (const i in obj) {
        this[i] = obj[i];
      }
      this.getData();
    },
    paintBar(res) {
      const arr = res.series || [];
      const is2w = Array.isArray(arr[0]);
      // console.log("this.optionStructure", this.optionStructure);
      try {
        var option = JSON.parse(this.optionStructure);
        const scale = this.scale || 1;
        function abc(obj) {
          if (typeof obj === "object") {
            for (let i in obj) {
              if (
                typeof obj[i] === "number" &&
                i !== "rotate" &&
                i !== "name" &&
                i !== "value"
              ) {
                obj[i] *= scale;
              } else {
                abc(obj[i]);
              }
            }
          }
        }
        abc(option);
        const optSeries = option.series;
        option.series = [];
        for (let i = 0, len = is2w ? arr.length : 1; i < len; i++) {
          const serarr = is2w ? arr[i] : arr;
          option.series.push({
            ...optSeries,
            data: serarr,
          });
        }

        // option.xAxis.data = res.xAxis || [];
        option[option.isHorizontal ? "yAxis" : "xAxis"].data = res.axis || [];

        // this.myChart = echarts.init(this.$refs.barCtn)
        this.myChart.setOption(option);
        this.myChart.resize();
      } catch (e) {
        console.log("e", e);
      }
    },
    getData() {
      this.$util.getAjaxResult(this.ajax).then((res) => {
        this.paintBar(res || {});
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index";
</style>
