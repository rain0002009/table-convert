import {
  BaseFunction,
  type IFunctionInfo,
  StringValueObject,
  BaseValueObject,
  ArrayValueObject
} from '@univerjs/preset-sheets-core'
import { FunctionType } from '@univerjs/preset-sheets-core'
import { camelCase } from 'es-toolkit'

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
        }
      }
    }
  }
}

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
  ]
} as IFunctionInfo

function handleConvert (labelObj?: BaseValueObject, nameObj?: BaseValueObject) {
  if (labelObj?.isError()) {
    return labelObj
  }
  if (nameObj?.isError()) {
    return nameObj
  }
  const label = labelObj?.getValue()
  const name = nameObj?.getValue()
  return StringValueObject.create(`{ title: "${label || ''}", dataIndex: "${camelCase((name || '') + '')}" }`)
}

export class TO_ANTD_COLUMNS extends BaseFunction {
  override minParams = 1
  override maxParams = 2

  override calculate (labelObj: BaseValueObject | ArrayValueObject, nameObj: BaseValueObject | ArrayValueObject) {
    const label = 'get' in labelObj ? labelObj.get(0, 0) : labelObj
    const name = 'get' in nameObj ? nameObj.get(0, 0) : nameObj
    return handleConvert(label!, name!)
  }
}
