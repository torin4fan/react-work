var my_news = [
    {
        author: 'Саша Печкин',
        text: 'В четчерг, четвертого числа...',
        bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
    },
    {
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!',
        bigText: 'А евро 42!'
    },
    {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
        bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
    }
];

var Add = React.createClass({

    getInitialState: function () {
      return {
          agreeNotChecked: true,
          authorIsEmpty: true,
          textIsEmpty: true
      }
    },

    onBtnClickHandler: function () {
      alert(ReactDOM.findDOMNode(this.refs.myTestInput).value);
    },

    onCheckRuleClick: function (e) {
        ReactDOM.findDOMNode(this.refs.alert_button).disabled = !e.target.checked
    },


    onFiledChange: function (filedName, e) {
        if(e.target.value.trim().length > 0) {
            this.setState({[''+filedName]:false})
        }else {
            this.setState({[''+filedName]:true})
        }
    },


    render: function () {

        var authorIsEmpty = this.state.authorIsEmpty;
        var textIsEmpty = this.state.textIsEmpty;
        return(
            <form className="add cf">
                <input className="add__author"
                       onChange={this.onFiledChange.bind(this, 'authorIsEmpty')}
                       ref='author'
                       placeholder="введите имя"
                       type="text"/>
                <textarea
                    className="add__text"
                    defaultValue=''
                    ref='text'
                    onChange={this.onFiledChange.bind(this, 'textIsEmpty')}
                    placeholder="введите текст новости"
                    type="text"
                ></textarea>
                <label className="add__checkrule">
                    <input type="checkbox"
                           onChange={this.onCheckRuleClick}
                    defaultChecked={false}
                    ref="checkrule"/>
                    я согласен с правилами
                </label>
                <button
                    onClick={this.onBtnClickHandler}
                    className="add__btn"
                    ref="alert_button"
                    disabled={ authorIsEmpty || textIsEmpty}
                >Добавить новость</button>
            </form>


        )
    }
});

var App = React.createClass({
    render: function () {
        return (
            <div className="app">
                <h3>Новости</h3>
                <Add />
                <News data={my_news}/>
            </div>
        );
    }
});

var Article = React.createClass({
    propTypes: {
        data: React.PropTypes.shape({
            author: React.PropTypes.string.isRequired,
            text: React.PropTypes.string.isRequired,
            bigText: React.PropTypes.string.isRequired
        })
    },

    getInitialState: function () {
        return {
            visible: false,
            rating: 0,
            adawd: "awdawd"
        }
    },

    readmoreClick: function (e) {
        e.preventDefault();
        this.setState({
            visible: true,
            rating:100500
        });
    },

    render: function () {
        var author = this.props.data.author;
        var text = this.props.data.text;
        var bigText = this.props.data.bigText;
        var visible = this.state.visible;

        return(
            <div className="article">
                <p className="news__author">{author}</p>
                <p className="news__text">{text}</p>
                <a
                    href="#"
                    onClick={this.readmoreClick}
                    className={"news__readmore  " + (visible ? 'none' : "")}>
                    Подробнее
                </a>
                <p className={"news__text " + (visible ? '' : "none")}>{bigText}</p>
            </div>
        )

    }
});

var News = React.createClass({

    propTypes: {
        data: React.PropTypes.array.isRequired
    },

    getInitialState:function () {
      return {
          counter: 0
      }
    },

    ontotalNewsClick: function () {
        this.setState({counter: ++this.state.counter})
    },

    render: function () {
        var data = this.props.data;

        if(data.length > 0){
            var newsTamplate = data.map(function (item, index) {
                return (
                    <div key={index}>
                        <Article data={item}/>
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
                <strong onClick={this.ontotalNewsClick} className={data.length > 0 ? "":"none"}>
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