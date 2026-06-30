const MilkdownControl = (props) => {
  let editor = null

  const destroy = () => {
    editor?.destroy?.()
    editor = null
  }

  // CMS 可能重复挂载，所以用 ref 控制初始化
  return React.createElement('div', {
    ref: (el) => {
      if (!el || editor) return

      editor = window.initMilkdown(el, props.value || '')

      props._editor = editor
    }
  })
}

CMS.registerWidget('milkdown', MilkdownControl)