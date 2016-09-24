
var App = React.createClass({
    render: function () {
        return (
          <div className="app">
              Всем привет, да опять
              <News />
          </div>
        );
    }
});

var News = React.createClass({
    render: function () {
        return (
            <div className="news">
                К сожалению, новостей нет.
            </div>
        )
    }
});









ReactDOM.render(
    <App />,
    document.getElementById('root')
);