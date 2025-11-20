import {
  BaseFunction,
  type IFunctionInfo,
  StringValueObject,
  BaseValueObject,
  ArrayValueObject
} from '@univerjs/preset-sheets-core'
import { FunctionType } from '@univerjs/preset-sheets-core'
import { camelCase } from 'es-toolkit'

/**
 * i18n配置
 */
export const antdZhCN = {
  formula: {
    TO_ANTD_COLUMNS: {
      description: '转化为antd的表格行',
      abstract: 'antd columns',
      links: [],
      functionParameter: {
        label: {
          name: '表头',
          detail: '列头显示文字'
        },
        name: {
          name: '字段名',
          detail: '列数据在数据项中对应的路径，支持通过数组查询嵌套路径',
        },
        endComma: {
          name: '末尾逗号',
          detail: '是否在末尾添加逗号，TRUE()/1 表示添加'
        }
      }
    }
  }
}

/**
 * 定义
 */
export const declaration = {
  functionName: 'TO_ANTD_COLUMNS',
  functionType: FunctionType.Univer,
  description: 'formula.TO_ANTD_COLUMNS.description',
  abstract: 'formula.TO_ANTD_COLUMNS.abstract',
  functionParameter: [
    {
      name: 'formula.TO_ANTD_COLUMNS.functionParameter.label.name',
      detail: 'formula.TO_ANTD_COLUMNS.functionParameter.label.detail',
      require: 0,
      repeat: 0,
      example: 'A2'
    },
    {
      name: 'formula.TO_ANTD_COLUMNS.functionParameter.name.name',
      detail: 'formula.TO_ANTD_COLUMNS.functionParameter.name.detail',
      require: 0,
      repeat: 0,
      example: 'B2'
    },
    {
      name: 'formula.TO_ANTD_COLUMNS.functionParameter.endComma.name',
      detail: 'formula.TO_ANTD_COLUMNS.functionParameter.endComma.detail',
      require: 0,
      repeat: 0,
      example: 'TRUE'
    },
  ]
} as IFunctionInfo

/**
 * 转化为antd的columns
 * @param labelObj
 * @param nameObj
 * @param endCommaObj 是否在末尾添加逗号
 */
function handleConvert (labelObj?: BaseValueObject, nameObj?: BaseValueObject, endCommaObj?: BaseValueObject) {
  if (labelObj?.isError()) {
    return labelObj
  }
  if (nameObj?.isError()) {
    return nameObj
  }
  const label = labelObj?.getValue()
  const name = nameObj?.getValue()
  const endCommaRaw = endCommaObj?.getValue()
  const endComma = endCommaRaw === true || endCommaRaw === 1 || `${endCommaRaw}`.toLowerCase() === 'true'
  return StringValueObject.create(`{ title: "${label || ''}", dataIndex: "${camelCase((name || '') + '')}" }${endComma ? ',' : ''}`)
}

export class TO_ANTD_COLUMNS extends BaseFunction {
  override minParams = 1
  override maxParams = 3

  override calculate (labelObj: BaseValueObject | ArrayValueObject, nameObj: BaseValueObject | ArrayValueObject, endCommaObj?: BaseValueObject | ArrayValueObject) {
    const label = 'get' in labelObj ? labelObj.get(0, 0) : labelObj
    const name = 'get' in nameObj ? nameObj.get(0, 0) : nameObj
    const endComma = endCommaObj ? ('get' in endCommaObj ? endCommaObj.get(0, 0) : endCommaObj) : undefined
    return handleConvert(label!, name!, endComma!)
  }
}
