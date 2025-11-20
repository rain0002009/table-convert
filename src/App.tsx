import { UniverSheetsCorePreset } from '@univerjs/preset-sheets-core'
import UniverPresetSheetsCoreZhCN from '@univerjs/preset-sheets-core/locales/zh-CN'
import { createUniver, LocaleType, mergeLocales } from '@univerjs/presets'
import data from './sheets'
import { functions, descriptions, locales } from './formula'
import { useEffect, useRef } from 'react'
import '@univerjs/preset-sheets-core/lib/index.css'

function App() {
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const { univerAPI } = createUniver({
      locale: LocaleType.ZH_CN,
      locales: {
        [LocaleType.ZH_CN]: mergeLocales(
          UniverPresetSheetsCoreZhCN,
          ...locales,
        ),
      },
      presets: [
        UniverSheetsCorePreset({
          container: containerRef.current!,
          formula: {
            function: functions,
            description: descriptions,
          }
        }),
      ],
    })
    univerAPI.createWorkbook(data)
    const fWorkbook = univerAPI.getActiveWorkbook()
    const fWorksheet = fWorkbook?.getActiveSheet()?.getSheet()
    Reflect.set(window, 'fWorksheet', fWorksheet)
    return () => {
      univerAPI.dispose()
    }
  }, [])
  return (
    <div className='h-100vh' ref={containerRef} />
  )
}

export default App
