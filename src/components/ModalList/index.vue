<template>
    <el-dialog
      :visible.sync="visible"
      class="dialog-deep"
      center
      @closed="close"
    >
      <div class="dialog-content dialog-text-mode" v-if="dialogType === 'text'">
        <div class="text-mode" v-for="(item, index) in dialogList" :key="index">
          <p class="title">{{item.title}}</p>
          <div v-for="(txt, index) in item.content" class="txt" :key="index">
            {{ txt }}
          </div>
        </div>
      </div>
      <div
        class="dialog-content dialog-img-mode"
        v-else-if="dialogType === 'img'"
      >
        <div class="img-mode" v-for="(item, index) in dialogList" :key="index">
          <p class="title">{{item.title}}</p>
          <div v-for="(it, index) in item.list" class="img" :key="index">
            <img :src="it.url" alt="">
          </div>
        </div>
      </div>
      <div
        class="dialog-content dialog-btn-mode"
        v-else-if="dialogType === 'btn'"
      >
        <button
          class="btn-mode"
          v-for="(item, index) in dialogList"
          :key="index"
          @click="modalBtnClick(item)"
        >
          {{ item.name }}
        </button>
      </div>
      <div
        class="dialog-content dialog-person-mode"
        v-else-if="dialogType === 'person'"
      >
        <div
          class="person-mode"
          v-for="(item, index) in dialogList"
          :key="index"
          @click="modalBtnClick(item)"
        >
          <div>{{ item.name }}</div>
          <div>{{ item.staffNno }}</div>
        </div>
      </div>
    </el-dialog>

</template>

<script>

export default {
  /*  props: {
    dialogList: Array,
    dialogType: String
  }, */
  name: '',
  components: { },
  data () {
    return {
      visible: false,
      dialogType: '',
      dialogList: []
    }
  },
  mixins: [],
  created () {
  },
  watch: {

  },
  methods: {

    modalBtnClick (item) {
      this.$emit('modalBtnClick', item)
      this.mdbClickCb && this.mdbClickCb(item)
    },

    close () {
      this.visible = false
    },
    show (list, type, cb) {
      this.visible = true
      this.dialogList = list
      this.dialogType = type
      this.mdbClickCb = cb
    }
  }

}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
