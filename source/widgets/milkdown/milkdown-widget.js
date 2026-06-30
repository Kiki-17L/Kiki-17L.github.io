const MilkdownControl = (props) => {
  let editor = null

  return {
    // CMS 会把这个作为 DOM 挂载点
    mount(el) {
      if (!editor) {
        editor = window.initMilkdown(el, props.value || '')
      }
    },

    unmount() {
      editor?.destroy?.()
    }
  }
}

CMS.registerWidget('milkdown', MilkdownControl)