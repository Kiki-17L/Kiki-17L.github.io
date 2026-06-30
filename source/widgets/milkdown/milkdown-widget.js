const MilkdownControl = createClass({
  handleChange: function(e) {
     this.props.onChange(e.target.value);
  },

  render: function() {
    const separator = this.props.field.get('separator', ', ');
    var value = this.props.value;
    return h('div', {
      id: this.props.forID,
      className: this.props.classNameWrapper,
      value: value ? value : '',
      onChange: this.handleChange,
      ref: (el) => {
        if (!el || this._editor) return

        this._editor = window.initMilkdown(el, this.props.value || '')

        this._editor.onChange?.((val) => {
          this.props.onChange(val)
        })
      }
    });
  },
});

CMS.registerWidget('milkdown', MilkdownControl)