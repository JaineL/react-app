import React from "react";

const movie = {
  title: "Infinity war",
  vote_avetage: 10.1,
  image:
    "https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg",
  overview: "dfhorihermgo"
};

function Image(props) {
  return <img width="100%" src={props.src} alt={props.alt} />;
}

// function MovieItem(props) {
//   console.log("props = ", props);
//   const {
//     data: { title, vote_avetage, image }
//   } = props;
//   return (
//     <div>
//       <Image src={image} alt={title} />
//       <p>{title}</p>
//       <p>{vote_avetage}</p>
//     </div>
//   );
// }

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
      like: false
    };
  }
  toggleOverview = () => {
    this.setState({
      show: !this.state.show
    });
  };

  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
  };
  render() {
    const {
      data: { title, vote_avetage, image, overview }
    } = this.props;
    return (
      <div style={{ width: "330px" }}>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_avetage}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={this.toggleOverview}>
            {this.state.show ? "hide" : "show"}
          </button>
          <button
            type="button"
            onClick={this.handleLike}
            className={this.state.like ? "btn--like" : ""}
          >
            Like
          </button>
        </div>
        {this.state.show ? <p>{overview}</p> : null}
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}

export default App;
