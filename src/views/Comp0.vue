
<template>
  <div
    style="
      background-image: url();
      background-size: 100% 100%;
      width: 100%;
      height: 100%;
    "
  >
    <div
      style="
        position: absolute;
        width: 65.625vw;
        height: 27.5vh;
        left: 0.8049242424242445vw;
        top: 55.25757575757575vh;
      "
    >
      <CtrlFooter
        ref="CtrlFooterRef0"
        :defaultbackgroundSrc="CtrlFooter0Data.backgroundSrc"
        :defaulttitlePosition="CtrlFooter0Data.titlePosition"
        :defaultbtnPosition="CtrlFooter0Data.btnPosition"
      ></CtrlFooter>
    </div>
    <div
      style="
        position: absolute;
        width: 25.416666666666668vw;
        height: 84.16666666666667vh;
        left: 66.97916666666667vw;
        top: -1vh;
      "
    >
      <LightBgItem
        ref="LightBgItemRef0"
        :defaultbackgroundSrc="LightBgItem1Data.backgroundSrc"
        :defaultareaId="LightBgItem1Data.areaId"
        :defaultareaName="LightBgItem1Data.areaName"
        :defaultpoint="LightBgItem1Data.point"
      ></LightBgItem>
    </div>
  </div>
</template>
<script>
import CtrlFooter from "@/components/CtrlFooter";
import LightBgItem from "@/components/LightBgItem";

export default {
  name: "",
  components: { CtrlFooter, LightBgItem },
  data() {
    return {
      CtrlFooter0Data: {
        backgroundSrc: "/images/common/0.jpg",
        titlePosition: {
          position: {
            orix: 300,
            oriy: 20,
            x: "15.625vw",
            y: "1.6666666666666667vh",
          },
        },
        btnPosition: {
          position: {
            orix: 322.22222222222223,
            oriy: 166.66666666666666,
            x: "16.78240740740741vw",
            y: "13.888888888888888vh",
          },
        },
      },
      LightBgItem1Data: {
        backgroundSrc: "/images/common/1.jpg",
        areaId: "1",
        areaName: "1",
        point: {
          position: {
            x: "12.962962962962962vw",
            y: "27.962962962962962vh",
            orix: 248.88888888888889,
            oriy: 335.55555555555554,
          },
        },
      },
    };
  },
  mounted() {},
  computed: {},
  methods: {
    CtrlFooter0Data_GET_CURRENT_DATA() {
      return this.CtrlFooter0Data;
    },
    LightBgItem1Data_GET_CURRENT_DATA() {
      return this.LightBgItem1Data;
    },
  },
};
</script>