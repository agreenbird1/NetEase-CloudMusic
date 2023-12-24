export interface ILyricItem {
  time: number
  content: string
}

// [04:34.14]企划： KIMWAITT
export default (lyric: string) => {
  const timeReg = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
  const lyrics: ILyricItem[] = []
  const linesLyric = lyric.split('\n')
  linesLyric.forEach((line) => {
    const timeResults = timeReg.exec(line)
    if (timeResults) {
      const minute = Number(timeResults[1]) * 60 * 1000
      const second = Number(timeResults[2]) * 1000
      const milSecond = Number(timeResults[3]) * (timeResults[3].length === 2 ? 10 : 1)
      const time = minute + second + milSecond
      const content = line.replace(timeReg, '')
      lyrics.push({
        time,
        content,
      })
    }
  })
  return lyrics
}
