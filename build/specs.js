(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/mattzeunert/Google Drive/projects/blg-react-immutable/app/App.js":[function(require,module,exports){
'use strict';

var React = require('react');
var Store = require('./Store.js');
var actions = require('./actions.js');

var App = React.createClass({
  displayName: 'App',

  getInitialState: function getInitialState() {
    return {
      messages: Store.getMessages(),
      newMessage: ''
    };
  },
  componentWillMount: function componentWillMount() {
    Store.addChangeListener(this.changeState);
  },
  componentWillUnmount: function componentWillUnmount() {
    Store.removeChangeListener(this.changeState);
  },
  changeState: function changeState() {
    this.setState({
      messages: Store.getMessages()
    });
  },
  addMessage: function addMessage(event) {
    event.preventDefault();
    var input = this.refs.newMessage.getDOMNode();
    actions.addMessage(input.value);
    this.setState({
      newMessage: ''
    });
  },
  updateNewMessage: function updateNewMessage(event) {
    this.setState({
      newMessage: event.target.value
    });
  },
  renderMessages: function renderMessages(message) {
    return React.createElement(
      'div',
      null,
      message
    );
  },
  render: function render() {
    return React.createElement(
      'div',
      null,
      this.state.messages.map(this.renderMessages),
      React.createElement(
        'form',
        { onSubmit: this.addMessage },
        React.createElement('input', { ref: 'newMessage', type: 'text', value: this.state.newMessage, onChange: this.updateNewMessage })
      )
    );
  }

});

module.exports = App;

},{"./Store.js":"/Users/mattzeunert/Google Drive/projects/blg-react-immutable/app/Store.js","./actions.js":"/Users/mattzeunert/Google Drive/projects/blg-react-immutable/app/actions.js","react":"react"}],"/Users/mattzeunert/Google Drive/projects/blg-react-immutable/app/Store.js":[function(require,module,exports){
'use strict';

var flux = require('flux-react');
var actions = require('./actions.js');

module.exports = flux.createStore({
  messages: [],
  actions: [actions.addMessage],
  addMessage: function addMessage(message) {
    this.messages.push(message);
    this.emitChange();
  },
  exports: {
    getMessages: function getMessages() {
      return this.messages;
    }
  }
});

},{"./actions.js":"/Users/mattzeunert/Google Drive/projects/blg-react-immutable/app/actions.js","flux-react":"flux-react"}],"/Users/mattzeunert/Google Drive/projects/blg-react-immutable/app/actions.js":[function(require,module,exports){
'use strict';

var flux = require('flux-react');

module.exports = flux.createActions(['addMessage']);

},{"flux-react":"flux-react"}],"/Users/mattzeunert/Google Drive/projects/blg-react-immutable/specs/App-spec.js":[function(require,module,exports){
'use strict';

var App = require('./../app/App.js');
var TestUtils = require('react/addons').TestUtils;

describe("App", function () {

  it("should be wrapped with a div", function () {
    var app = TestUtils.renderIntoDocument(App());
    expect(app.getDOMNode().tagName).toEqual('DIV');
  });
});

},{"./../app/App.js":"/Users/mattzeunert/Google Drive/projects/blg-react-immutable/app/App.js","react/addons":"react/addons"}]},{},["/Users/mattzeunert/Google Drive/projects/blg-react-immutable/specs/App-spec.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWF0dHpldW5lcnQvR29vZ2xlIERyaXZlL3Byb2plY3RzL2JsZy1yZWFjdC1pbW11dGFibGUvYXBwL0FwcC5qcyIsIi9Vc2Vycy9tYXR0emV1bmVydC9Hb29nbGUgRHJpdmUvcHJvamVjdHMvYmxnLXJlYWN0LWltbXV0YWJsZS9hcHAvU3RvcmUuanMiLCIvVXNlcnMvbWF0dHpldW5lcnQvR29vZ2xlIERyaXZlL3Byb2plY3RzL2JsZy1yZWFjdC1pbW11dGFibGUvYXBwL2FjdGlvbnMuanMiLCIvVXNlcnMvbWF0dHpldW5lcnQvR29vZ2xlIERyaXZlL3Byb2plY3RzL2JsZy1yZWFjdC1pbW11dGFibGUvc3BlY3MvQXBwLXNwZWMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDbEMsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDOztBQUV0QyxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDMUIsaUJBQWUsRUFBRSwyQkFBWTtBQUMzQixXQUFPO0FBQ0wsY0FBUSxFQUFFLEtBQUssQ0FBQyxXQUFXLEVBQUU7QUFDN0IsZ0JBQVUsRUFBRSxFQUFFO0tBQ2YsQ0FBQztHQUNIO0FBQ0Qsb0JBQWtCLEVBQUUsOEJBQVk7QUFDOUIsU0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztHQUMzQztBQUNELHNCQUFvQixFQUFFLGdDQUFZO0FBQ2hDLFNBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7R0FDOUM7QUFDRCxhQUFXLEVBQUUsdUJBQVk7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cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFN0b3JlID0gcmVxdWlyZSgnLi9TdG9yZS5qcycpO1xudmFyIGFjdGlvbnMgPSByZXF1aXJlKCcuL2FjdGlvbnMuanMnKTtcblxudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2VzOiBTdG9yZS5nZXRNZXNzYWdlcygpLFxuICAgICAgbmV3TWVzc2FnZTogJydcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICBTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLmNoYW5nZVN0YXRlKTtcbiAgfSxcbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICBTdG9yZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLmNoYW5nZVN0YXRlKTtcbiAgfSxcbiAgY2hhbmdlU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1lc3NhZ2VzOiBTdG9yZS5nZXRNZXNzYWdlcygpXG4gICAgfSk7XG4gIH0sXG4gIGFkZE1lc3NhZ2U6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIGlucHV0ID0gdGhpcy5yZWZzLm5ld01lc3NhZ2UuZ2V0RE9NTm9kZSgpO1xuICAgIGFjdGlvbnMuYWRkTWVzc2FnZShpbnB1dC52YWx1ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBuZXdNZXNzYWdlOiAnJ1xuICAgIH0pO1xuICB9LFxuICB1cGRhdGVOZXdNZXNzYWdlOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG5ld01lc3NhZ2U6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9LFxuICByZW5kZXJNZXNzYWdlczogZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj57bWVzc2FnZX08L2Rpdj5cbiAgICApO1xuICB9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuICAgICAgICB7dGhpcy5zdGF0ZS5tZXNzYWdlcy5tYXAodGhpcy5yZW5kZXJNZXNzYWdlcyl9XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmFkZE1lc3NhZ2V9PlxuICAgICAgICAgIDxpbnB1dCByZWY9XCJuZXdNZXNzYWdlXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uZXdNZXNzYWdlfSBvbkNoYW5nZT17dGhpcy51cGRhdGVOZXdNZXNzYWdlfS8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuXHRcdCk7XG5cdH1cblx0XG59KTtcblx0XG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcbiIsInZhciBmbHV4ID0gcmVxdWlyZSgnZmx1eC1yZWFjdCcpO1xudmFyIGFjdGlvbnMgPSByZXF1aXJlKCcuL2FjdGlvbnMuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmbHV4LmNyZWF0ZVN0b3JlKHtcbiAgbWVzc2FnZXM6IFtdLFxuICBhY3Rpb25zOiBbXG4gICAgYWN0aW9ucy5hZGRNZXNzYWdlXG4gIF0sXG4gIGFkZE1lc3NhZ2U6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgIHRoaXMuZW1pdENoYW5nZSgpO1xuICB9LFxuICBleHBvcnRzOiB7XG4gICAgZ2V0TWVzc2FnZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2VzO1xuICAgIH1cbiAgfVxufSk7XG4iLCJ2YXIgZmx1eCA9IHJlcXVpcmUoJ2ZsdXgtcmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmbHV4LmNyZWF0ZUFjdGlvbnMoW1xuICAnYWRkTWVzc2FnZSdcbl0pOyIsInZhciBBcHAgPSByZXF1aXJlKCcuLy4uL2FwcC9BcHAuanMnKTtcbnZhciBUZXN0VXRpbHMgPSByZXF1aXJlKCdyZWFjdC9hZGRvbnMnKS5UZXN0VXRpbHM7XG5cbmRlc2NyaWJlKFwiQXBwXCIsIGZ1bmN0aW9uKCkge1xuXG4gIGl0KFwic2hvdWxkIGJlIHdyYXBwZWQgd2l0aCBhIGRpdlwiLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXBwID0gVGVzdFV0aWxzLnJlbmRlckludG9Eb2N1bWVudChBcHAoKSk7XG4gICAgZXhwZWN0KGFwcC5nZXRET01Ob2RlKCkudGFnTmFtZSkudG9FcXVhbCgnRElWJyk7XG4gIH0pO1xuXG59KTtcbiJdfQ==