// import React, { Component } from "react";
import "./search-box.styles.css";

const SearchBox = (props) => {
  return (
    <div>
      <input
        className={`search-box ${props.className}`}
        type="search"
        placeholder={props.placeholder}
        onChange={props.onChangeHandler}
      />
    </div>
  );
};

// class SearchBox extends Component {
//   render() {
//     return (
//       <div>
//         <input
//           className={`search-box ${this.props.className}`}
//           type="search"
//           placeholder={this.props.placeholder}
//           onChange={this.props.onChangeHandler}
//         />
//       </div>
//     );
//
// }

export default SearchBox;
