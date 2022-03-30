
import Mock from 'mockjs'
import Const from '@/constants/api'

function setData () {
  return Mock.mock({
    total: 10,
    page: 1,
    pageSize: 10,
    /* 'records|20': [
      {
        'id|+1': 1,
        'isSelected|1': true,
        // 这是素材
        list: [
          {
            id: 2106091,
            playOperation: 10,
            screenArea: 6
          },
          {
            id: 2107081,
            playOperation: 55,
            screenArea: 5
          },
          {
            id: 2107082,
            playOperation: 55,
            screenArea: 4
          },
          {
            id: 2107083,
            playOperation: 5,
            screenArea: 3
          },
          {
            id: 2107084,
            playOperation: 11,
            screenArea: 2
          },
          {
            id: 2107085,
            playOperation: 11,
            screenArea: 1
          },
          {
            id: 2105267,
            playOperation: 1,
            screenArea: 3
          }
        ],
        // 这是屏幕分区
        regionList: [
          {
            x: 0,
            y: 0,
            w: 320,
            h: 1080
          },
          {
            x: 320,
            y: 0,
            w: 320,
            h: 1080
          },
          {
            x: 640,
            y: 0,
            w: 320,
            h: 1080
          },
          {
            x: 960,
            y: 0,
            w: 320,
            h: 1080
          },
          {
            x: 1280,
            y: 0,
            w: 320,
            h: 1080
          },
          {
            x: 1600,
            y: 0,
            w: 320,
            h: 1080
          }
        ],
        title: '@cname',
        birthday: '@date'
      }
    ] */
    records: [
      {
        id: 21071026,
        title: 'led2',
        orgId: 1,
        orgName: '总行',
        remark: '',
        createBy: 'admintest',
        createTime: '2021-07-10 20:22:01',
        updateBy: 'admintest',
        updateTime: '2021-07-10 20:22:01',
        state: 2,
        auditState: '已通过',
        list: [
          {
            id: 2107022,
            playOperation: 1,
            screenArea: 1
          },
          {
            id: 2107024,
            playOperation: 1,
            screenArea: 1
          }
        ],
        regionList: [
          {
            x: 0,
            y: 0,
            w: 1920,
            h: 1080
          }
        ],
        isSelected: 1
      },
      {
        id: 21071024,
        title: 'led1',
        orgId: 1,
        orgName: '总行',
        remark: '',
        createBy: 'admintest',
        createTime: '2021-07-10 20:20:52',
        updateBy: 'admintest',
        updateTime: '2021-07-10 20:20:52',
        state: 2,
        auditState: '已通过',
        list: [
          {
            id: 2107021,
            playOperation: 1,
            screenArea: 1
          }
        ],
        regionList: [
          {
            x: 0,
            y: 0,
            w: 1920,
            h: 1080
          }
        ],
        isSelected: 1
      },
      {
        id: 2107012,
        title: '1*6拼接屏',
        orgId: 1,
        orgName: '总行',
        remark: '',
        createBy: 'ccb',
        createTime: '2021-07-01 19:20:45',
        updateBy: 'admintest',
        updateTime: '2021-07-10 17:01:06',
        state: 2,
        auditState: '已通过',
        list: [
          {
            id: 2106112,
            playOperation: 5,
            screenArea: 1
          },
          {
            id: 2106153,
            playOperation: 4,
            screenArea: 3
          },
          {
            id: 2106155,
            playOperation: 4,
            screenArea: 5
          },
          {
            id: 2106161,
            playOperation: 1,
            screenArea: 1
          },
          {
            id: 2106162,
            playOperation: 1,
            screenArea: 5
          },
          {
            id: 2107021,
            playOperation: 3,
            screenArea: 3
          },
          {
            id: 2107022,
            playOperation: 1,
            screenArea: 2
          },
          {
            id: 2107023,
            playOperation: 1,
            screenArea: 4
          },
          {
            id: 2107024,
            playOperation: 11,
            screenArea: 2
          },
          {
            id: 2107025,
            playOperation: 11,
            screenArea: 4
          },
          {
            id: 2107026,
            playOperation: 1,
            screenArea: 6
          }
        ]
      },
      {
        id: 21071012,
        title: '1*6六分屏',
        orgId: 1,
        orgName: '总行',
        remark: '',
        createBy: 'admintest',
        createTime: '2021-07-10 16:54:59',
        updateBy: 'admintest',
        updateTime: '2021-07-10 16:54:59',
        state: 2,
        auditState: '已通过',
        list: [
          {
            id: 2107024,
            playOperation: 1,
            screenArea: 1
          },
          {
            id: 2107026,
            playOperation: 2,
            screenArea: 2
          },
          {
            id: 2107025,
            playOperation: 3,
            screenArea: 3
          },
          {
            id: 2107027,
            playOperation: 4,
            screenArea: 4
          },
          {
            id: 2107022,
            playOperation: 5,
            screenArea: 5
          },
          {
            id: 2107023,
            playOperation: 6,
            screenArea: 6
          }
        ],
        regionList: [
          {
            x: 0,
            y: 0,
            w: 360,
            h: 3840
          },
          {
            x: 360,
            y: 0,
            w: 360,
            h: 3840
          },
          {
            x: 720,
            y: 0,
            w: 360,
            h: 3840
          },
          {
            x: 1080,
            y: 0,
            w: 360,
            h: 3840
          },
          {
            x: 1440,
            y: 0,
            w: 360,
            h: 3840
          },
          {
            x: 1800,
            y: 0,
            w: 360,
            h: 3840
          }
        ],
        isSelected: 1
      },
      {
        id: 21071010,
        title: '1*6二分屏',
        orgId: 1,
        orgName: '总行',
        remark: '',
        createBy: 'admintest',
        createTime: '2021-07-10 16:53:57',
        updateBy: 'admintest',
        updateTime: '2021-07-10 16:53:57',
        state: 2,
        auditState: '已通过',
        list: [
          {
            id: 2107027,
            playOperation: 1,
            screenArea: 1
          },
          {
            id: 2107026,
            playOperation: 1,
            screenArea: 1
          },
          {
            id: 2107025,
            playOperation: 22,
            screenArea: 2
          },
          {
            id: 2107023,
            playOperation: 1,
            screenArea: 2
          }
        ],
        regionList: [
          {
            x: 0,
            y: 0,
            w: 1080,
            h: 3840
          },
          {
            x: 1080,
            y: 0,
            w: 1080,
            h: 3840
          }
        ]
      },
      {
        id: 2107108,
        title: '1*6全屏',
        orgId: 1,
        orgName: '总行',
        remark: '',
        createBy: 'admintest',
        createTime: '2021-07-10 16:52:59',
        updateBy: 'admintest',
        updateTime: '2021-07-10 16:52:59',
        state: 2,
        auditState: '已通过',
        list: [
          {
            id: 2107023,
            playOperation: 1,
            screenArea: 1
          },
          {
            id: 2107025,
            playOperation: 3,
            screenArea: 1
          }
        ],
        regionList: [
          {
            x: 0,
            y: 0,
            w: 2160,
            h: 3840
          }
        ]
      },
      {
        id: 2107054,
        title: 'LED',
        orgId: 1,
        orgName: '总行',
        remark: '',
        createBy: 'ccb',
        createTime: '2021-07-05 12:04:10',
        updateBy: 'ccb',
        updateTime: '2021-07-05 12:04:10',
        state: 2,
        auditState: '已通过',
        list: [
          {
            id: 2106161,
            playOperation: 1,
            screenArea: 1
          },
          {
            id: 2106156,
            playOperation: 1,
            screenArea: 1
          },
          {
            id: 2106153,
            playOperation: 1,
            screenArea: 1
          }
        ]
      },
      {
        id: 2107052,
        title: '1*5',
        orgId: 1,
        orgName: '总行',
        remark: '',
        createBy: 'ccb',
        createTime: '2021-07-05 12:00:21',
        updateBy: 'ccb',
        updateTime: '2021-07-05 12:00:21',
        state: 2,
        auditState: '已通过',
        list: [
          {
            id: 2107021,
            playOperation: 1,
            screenArea: 1
          },
          {
            id: 2107022,
            playOperation: 1,
            screenArea: 1
          },
          {
            id: 2107023,
            playOperation: 1,
            screenArea: 1
          }
        ]
      },
      {
        id: 21070214,
        title: 'LED图片',
        orgId: 1,
        orgName: '总行',
        remark: '',
        createBy: 'ccb',
        createTime: '2021-07-02 14:33:34',
        updateBy: 'ccb',
        updateTime: '2021-07-02 14:33:34',
        state: 2,
        auditState: '已通过',
        list: [
          {
            id: 2107024,
            playOperation: 10,
            screenArea: 1
          },
          {
            id: 2107025,
            playOperation: 10,
            screenArea: 1
          },
          {
            id: 2107026,
            playOperation: 10,
            screenArea: 1
          },
          {
            id: 2107027,
            playOperation: 10,
            screenArea: 1
          }
        ]
      },
      {
        id: 2107026,
        title: '1*3拼接屏7月2日',
        orgId: 1,
        orgName: '总行',
        remark: '',
        createBy: 'ccb',
        createTime: '2021-07-02 12:14:34',
        updateBy: 'ccb',
        updateTime: '2021-07-02 12:14:34',
        state: 2,
        auditState: '已通过',
        list: [
          {
            id: 2107021,
            playOperation: 1,
            screenArea: 1
          },
          {
            id: 2107022,
            playOperation: 1,
            screenArea: 1
          },
          {
            id: 2107023,
            playOperation: 1,
            screenArea: 1
          }
        ]
      },
      {
        id: 2106172,
        title: '43寸一体机',
        orgId: 1,
        orgName: '总行',
        remark: '',
        createBy: 'ccb',
        createTime: '2021-06-17 16:13:03',
        updateBy: 'ccb',
        updateTime: '2021-06-17 16:18:46',
        state: 2,
        auditState: '已通过',
        list: [
          {
            id: 2106156,
            playOperation: 1,
            screenArea: 1
          }
        ]
      }
    ]
  })
}

const data = {
  [Const.REQCONFIG.RESDATA]: setData(),
  resHeader: {
    [Const.REQCONFIG.RESCODE]: Const.HTTP.CODE_200,
    [Const.REQCONFIG.RESMSG]: Const.HTTP.MEG_SUCCESS
  }
}

export default data
