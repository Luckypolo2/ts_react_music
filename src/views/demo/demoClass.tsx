import React, { PureComponent } from 'react'
interface IProps {
  name: string
  age?: number
}
interface IState {
  message: string
  count: number
}
class DemoClass extends PureComponent<IProps, IState> {
  state: IState = {
    message: 'hello word message',
    count: 0
  }
  constructor(props: IProps) {
    super(props)
    // this.state = {
    //   message: 'hello word message',
    //   count: 0
    // }
  }
  render(): React.ReactNode {
    return (
      <div>
        demo class
        <p>{this.props.name}</p>
        <p>{(this.state as any).message}</p>
        <p>{this.state.count}</p>
      </div>
    )
  }
}
export default DemoClass
