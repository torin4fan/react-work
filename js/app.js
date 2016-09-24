var my_news = [
    {
        author: 'Саша Печкин',
        text: 'В четверг, четвертого числа...'
    },
    {
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!'
    },
    {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
    }
];

var App = React.createClass({
    render: function () {
        return (
            <div className="app">
                Всем привет, да опять
                <News data={my_news}/>
            </div>
        );
    }
});

var News = React.createClass({
    render: function () {

        var data = this.props.data;

        if(data.length > 0){
            var newsTamplate = data.map(function (item, index) {
                return (
                    <div key={index}>
                        <p className="news__author">{item.author}</p>
                        <p className="news__text">{item.text}</p>
                    </div>
                )
            });
        }
        else {
            newsTamplate = <p>Новостей нет</p>;
        }


        return (
            <div className="news">
                {newsTamplate}
                <strong className={data.length > 0 ? "":"none"}>
                    Всего новостей: {data.length}
                </strong>
            </div>
        )
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);