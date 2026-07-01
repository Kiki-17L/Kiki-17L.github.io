const MilkdownControl = createClass({
  handleChange: function(e) {
    console.log('MilkdownControl handleChange', e.target.value)
    this.props.onChange(e.target.value);
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

const TestControl = createClass({
  handleChange: function(e) {
    console.log('TestControl handleChange', e.target.value)
    this.props.onChange(e.target.value);
  },

  render: function() {

    var value = this.props.value;
    return h('input', {
      id: this.props.forID,
      className: this.props.classNameWrapper,
      value: value ? value : '',
      onChange: this.handleChange,
      type: 'text',
    });
  },
});


CMS.registerWidget('milkdown', MilkdownControl)

CMS.registerWidget('test', TestControl)