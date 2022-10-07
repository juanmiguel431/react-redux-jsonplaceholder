import React from 'react';
import { fetchPost } from '../actions';
import { connect } from 'react-redux';
import UserHeader from './UserHeader';

class PostList extends React.Component {

  componentDidMount() {
    this.props.fetchPost();
  }

  renderPost = () => {
    return this.props.posts.map(post => {
      return (
        <div key={post.id} className="item">
          <i className="large middle aligned icon user"/>
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="post-list ui relaxed divided list">
        {this.renderPost()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPost })(PostList);
