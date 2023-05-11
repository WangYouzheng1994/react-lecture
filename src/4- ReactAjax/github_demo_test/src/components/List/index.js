import React, {Component} from 'react';

class List extends Component {

    render() {
        return (
            <div className="row row-cols-lg-4 row-cols-md-2 g-4 mt-1 ">
                {
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
