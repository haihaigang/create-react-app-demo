import React from "react"
import './error.css'

class Error extends React.PureComponent {
  componentDidMount() {
    // 预加载404图片，页面加载成功后，断网刷新页面，会出现远程图片加载不出的情况，页面空白
    new Image().src = "https://f.mengtuiapp.com/common/404.png"
  }

  render() {
    const { error_msg } = this.props

    return (
      <div id="notfound-error">
        <div className="title">该活动已结束...</div>
        <div className="sub-title">{error_msg}</div>
      </div>
    )
  }
}
export default Error
