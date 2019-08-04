import React, {Component} from 'react';

class Like extends Component {
    getLikeClass = () => {
        let likeClass = "fa fa-heart";
        return likeClass += this.props.movie.liked ? '' : "-o";
    };
    render() {
        return (
            <i className={this.getLikeClass()}
               style={{cursor: "pointer"}}
               onClick={()=>this.props.onLike(this.props.movie)}
               aria-hidden="true"></i>
        );
    }
}

export default Like;
