import { defineSheet } from './utils.ts'

export default defineSheet({
  id: 'antd',
  name: 'antd表格转换',
  cellData: {
    0: {
      0: {
        v: '表头',
      },
      1: {
        v: '字段名'
      },
      2: {
        v: '结果'
      }
    },
    1: {
      2: {
        f: '=TO_ANTD_COLUMNS(A2,B2, 1)'
      }
    }
  },
  rowData: [],
  columnData: {
    2: {
      w: 200
    }
  }
})
