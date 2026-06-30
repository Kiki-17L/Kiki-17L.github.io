const MilkdownControl = class extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.editor = window.initMilkdown(
      this.ref.current,
      this.props.value || ''
    )
  }

  componentWillUnmount() {
    this.editor?.destroy?.()
  }

  render() {
    return React.createElement('div', { ref: this.ref })
  }
}

CMS.registerWidget('milkdown', MilkdownControl)