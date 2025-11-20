import type { Ctor } from '@univerjs/presets'
import type { BaseFunction, IFunctionInfo, IFunctionNames } from '@univerjs/preset-sheets-core'
import { antdZhCN, declaration as antdDeclaration, TO_ANTD_COLUMNS } from './TO_ANTD_COLUMNS.ts'
import { camelZhCN, declaration as camelDeclaration, TO_CAMEL_CASE } from './TO_CAMEL_CASE.ts'

export const functions: Array<[Ctor<BaseFunction>, IFunctionNames]> =  [
  [TO_ANTD_COLUMNS, 'TO_ANTD_COLUMNS'],
  [TO_CAMEL_CASE, 'TO_CAMEL_CASE']
]
export const descriptions:IFunctionInfo[] = [antdDeclaration, camelDeclaration]
export const locales = [antdZhCN, camelZhCN]
