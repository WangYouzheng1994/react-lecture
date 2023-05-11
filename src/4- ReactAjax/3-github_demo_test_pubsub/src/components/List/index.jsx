import React, {Component} from 'react';

class List extends Component {

    render() {
        const {isLoading, isFirst, errorMsg} = this.props;


        return (
            <div className="row row-cols-lg-4 row-cols-md-2 g-4 mt-1 ">
                {
                    isFirst ? <h4>欢迎使用，请输入关键字</h4> :
                    isLoading ? <h2>加载中...</h2> :
                    errorMsg ? <h3 style={{color:'red'}}>{errorMsg}</h3> :
                    this.props.users.map((user, index) => {
                        return (
                            <div className="card text-center ">
                                <a className="card-link " href={user.html_url}>
                                    <img className="img-thumbnail " style={{"width": "100px"}} alt="avater"
                                         src={user.avatar_url}/>
                                </a>
                                <div className="card-body">
                                    <p className="card-text">{user.login}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default List;
