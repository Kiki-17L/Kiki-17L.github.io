const MilkdownControl = createClass({
  handleChange: function(e) {
    const separator = this.props.field.get('separator', ', ')
    this.props.onChange(e.target.value.split(separator).map((e) => e.trim()));
  },

  render: function() {
    const separator = this.props.field.get('separator', ', ');
    var value = this.props.value;
    return h('div', {
      id: this.props.forID,
      className: this.props.classNameWrapper,
      // value: value ? value.join(separator) : '',
      onChange: this.handleChange,
      ref: (el) => {
        window.initMilkdown(el)
      }
    });
  },
});

CMS.registerWidget('milkdown', MilkdownControl)