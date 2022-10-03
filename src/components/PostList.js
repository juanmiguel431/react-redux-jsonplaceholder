import React from 'react';
import { fetchPost } from '../actions';
import { connect } from 'react-redux';

class PostList extends React.Component {

  componentDidMount() {
    this.props.fetchPost();
  }

  render() {
    return (
      <div className="post-list">
        <h1>Post List</h1>
      </div>
    );
  }
}

export default connect(null, { fetchPost })(PostList);
