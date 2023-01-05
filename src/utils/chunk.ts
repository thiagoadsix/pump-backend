// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class Chunk {
  public static getIdList (input: number): string[] {
    input.toString().padStart(4, '0')
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    return [...new Array(input)].map((_item, i) => i.toString().padStart(4, '0'))
  }

  public static chunk (items: any[], fn: any, chunkSize: number = 50): any {
    let result: any[] = []

    const chunks = this.splitToChunks(items, chunkSize)

    return this.series(chunks, (chunk: any[]) => {
      return this.all(chunk, fn).then((res: any) => {
        result = result.concat(res)
      })
    }).then(() => result)
  }

  private static splitToChunks (items: any[], chunkSize: number = 50): any[] {
    const result: any[] = []

    for (let index = 0; index < items.length; index += chunkSize) {
      result.push(items.slice(index, index + chunkSize))
    }

    return result
  }

  private static series (items: any[], fn: any): any {
    const result: any[] = []

    return items
      .reduce((acc, item) => {
        acc = acc.then(() => {
          return fn(item).then((res: any) => result.push(res))
        })

        return acc
      }, Promise.resolve())
      .then(() => result)
  }

  private static all (items: any[], fn: any): any {
    const promises = items.map((item) => fn(item))
    return Promise.all(promises)
  }
}
