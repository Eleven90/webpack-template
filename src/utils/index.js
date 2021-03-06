// 图片的倍率(设备像素比大于2的使用3倍图,默认使用2倍图)
export const imgRate = window.devicePixelRatio && window.devicePixelRatio > 2 ? 3 : 2

// 是否启用mock数据模式
export const isMock = IS_MOCK === 'true'

// 是否为本地开发环境
export const isDev = BUILD_ENV === 'development'

// 是否为测试环境
export const isTest = BUILD_ENV === 'test'

// 是否为生产环境
export const isProd = BUILD_ENV === 'production'