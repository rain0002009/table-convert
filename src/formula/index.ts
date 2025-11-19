import type { Ctor } from '@univerjs/presets'
import type { BaseFunction, IFunctionInfo, IFunctionNames } from '@univerjs/preset-sheets-core'
import { antdZhCN, declaration as antdDeclaration, TO_ANTD_COLUMNS } from './TO_ANTD_COLUMNS.ts'

export const functions: Array<[Ctor<BaseFunction>, IFunctionNames]> =  [[TO_ANTD_COLUMNS, 'TO_ANTD_COLUMNS']]
export const descriptions:IFunctionInfo[] = [antdDeclaration]
export const locales = [antdZhCN]
