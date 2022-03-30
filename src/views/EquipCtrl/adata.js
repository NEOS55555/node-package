export default {
  tabRef: {
    storeData: {
      areaList: [
        {
          key: 'test',
          name: '实验室'
        },
        {
          key: 'zhanting',
          name: '展厅'
        },
        {
          key: 'meet',
          name: '会议室'
        }
      ],
      list: [
        {
          name: 1
        }
      ]
    },
    methods: {
      click (item) {
        this.$ref.bgCtnItem.updateData({
          bgSrc: '/images/point/zoom1.png',
          maxWidth: 1024,
          showArr: [
            {
              key: 1,
              name: '沉浸式体验',
              active: false,
              x: 120,
              y: 143,
              btns: [{ a: 1 }]
            }
          ]
        })
      }
    },
    mounted () {
    }
  }
}
