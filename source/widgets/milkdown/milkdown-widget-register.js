const MilkdownControl = createClass({
  handleChange: function(e) {
    console.log('MilkdownControl handleChange', e.detail.markdown)
    this.props.onChange(e.detail.markdown);
  },

  render: function() {

    var value = this.props.value;
    return h('div', {
      id: this.props.forID,
      className: this.props.classNameWrapper,
      value: value ? value : '',
      onChange: this.handleChange,
      ref: (el) => {
        if (!el || this._editor) return

        this._editor = window.initMilkdown(el, value || '')
        this._editor.onChange?.(this.handleChange)
      }
    });
  },
});


CMS.registerWidget('milkdown', MilkdownControl)
