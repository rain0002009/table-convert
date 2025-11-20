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
export const camelZhCN = {
  formula: {
    TO_CAMEL_CASE: {
      description: '把文本转为小驼峰格式',
      abstract: '转为小驼峰',
      links: [],
      functionParameter: {
        text: {
          name: '文本',
          detail: '要转为小驼峰的文本'
        }
      }
    }
  }
}

/**
 * 定义
 */
export const declaration = {
  functionName: 'TO_CAMEL_CASE',
  functionType: FunctionType.Univer,
  description: 'formula.TO_CAMEL_CASE.description',
  abstract: 'formula.TO_CAMEL_CASE.abstract',
  functionParameter: [
    {
      name: 'formula.TO_CAMEL_CASE.functionParameter.text.name',
      detail: 'formula.TO_CAMEL_CASE.functionParameter.text.detail',
      require: 0,
      repeat: 0,
      example: 'A1'
    }
  ]
} as IFunctionInfo

/**
 * 转为小驼峰
 * @param textObj 文本
 */
function handleConvert (textObj?: BaseValueObject) {
  if (textObj?.isError()) {
    return textObj
  }
  const text = textObj?.getValue()
  return StringValueObject.create(camelCase(((text ?? '') + '')))
}

export class TO_CAMEL_CASE extends BaseFunction {
  override minParams = 1
  override maxParams = 1

  override calculate (textObj: BaseValueObject | ArrayValueObject) {
    const text = 'get' in textObj ? textObj.get(0, 0) : textObj
    return handleConvert(text!)
  }
}
