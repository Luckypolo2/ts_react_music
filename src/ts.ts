// 函数签名
export interface IFnCall {
  (fn: () => string, age: number): string
}
const foo: IFnCall = function (name, age) {
  return 'aaa'
}
foo(() => 'aaa', 1)
