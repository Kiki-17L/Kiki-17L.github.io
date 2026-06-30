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
        window.initMilkdown(el,value)
      }
    });
  },
});

CMS.registerWidget('milkdown', MilkdownControl)