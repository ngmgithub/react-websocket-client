import React from 'react'

const LikesComponent = React.createClass({

  getInitialState: function () {
    return {likesCount: 0}
  },

  onLike: function () {
    let newLikesCount = this.state.likesCount + 1
    this.setState({likesCount: newLikesCount})
    // why doesn't this.state.likesCount = this.state.likesCount + 1 work?
  },

  render: function () {
    return (
      <div>
        <h2>Likes Component</h2>
        <p>Likes : <span>{this.state.likesCount}</span></p>
        <div><button onClick={this.onLike/* .bind(this) */}>Like Me</button></div>
      </div>
    )
  }

})

export default LikesComponent
