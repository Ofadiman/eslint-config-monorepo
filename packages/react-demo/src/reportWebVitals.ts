import * as webVitals from 'web-vitals'

// eslint-disable-next-line @typescript-eslint/require-await
export const reportWebVitals = async (onPerfEntry?: webVitals.ReportHandler): Promise<void> => {
  if (onPerfEntry !== undefined) {
    // eslint-disable-next-line promise/prefer-await-to-then,promise/always-return,import/dynamic-import-chunkname
    void import(`web-vitals`).then(({ getCLS, getFID, getFCP, getLCP, getTTFB }: typeof webVitals): void => {
      getCLS(onPerfEntry)
      getFID(onPerfEntry)
      getFCP(onPerfEntry)
      getLCP(onPerfEntry)
      getTTFB(onPerfEntry)
    })
  }
}
