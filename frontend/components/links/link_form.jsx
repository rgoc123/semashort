import React from 'react';

class LinkForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      long_link: "",
      short_link: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.generateShortLink2 = this.generateShortLink2.bind(this);
    this.chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    this.currentShortLink = "";
    this.currentIndex = 0;
    this.currentLength = 0;
  }

  generateShortLink2() {
    this.links = this.props.links;
    let chars = this.chars;
    let linkString = "";
    if (this.links[this.links.length-1].short_link.length < 40) {
      linkString = this.links[this.links.length-1].short_link;
    } else {
      linkString = this.links[this.links.length-1].short_link.substring(40);
    }

    let string = linkString.split("");
    let idx = 0;
    let newString = "";
    debugger
    string.forEach((ch, idx2) => {
      // if string is like "999"
      if ((ch === "9") && (idx === string.length-1)) {
        let newString = "";
        string.forEach(ch => newString += "a");
        newString = "https://semashort.herokuapp.com/#/links/" + newString + "a";
        this.state.short_link = newString;
      } else if (ch === "9") {
        //if string is like "9a"
        if (string[idx + 1] !== "9") {
          let newArr = string.slice(0, idx+2);
          newArr = newArr.map(ch => ch = "a");
          let next_idx = chars.indexOf(string[idx + 1]) + 1;
          newArr[newArr.length - 1] = chars[next_idx];
          newArr.forEach((ch, idx) => {
            string[idx] = ch;
          });
          let newString = "";
          newString = "https://semashort.herokuapp.com/#/links/" + string.join("");
          this.state.short_link = newString;
        } else {
          //if string is like "99a"
          idx += 1;
        }
      } else {
        //if string is like ???
        if (idx2 > 0) {
          this.state.short_link = string.join("");
        } else {
          //if string is like "a"
          let next_idx = chars.indexOf(string[0]) + 1;
          string[0] = chars[next_idx];
          // let newString = "";
          let homelink = "https://semashort.herokuapp.com/#/links/";
          newString = homelink.concat(string.join(""));
          this.setState({
            short_link: newString
          });
        }
      }
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  generateShortLink() {
    this.currentShortLink = this.chars[this.currentIndex];
    this.state.short_link = this.currentShortLink;
    this.currentIndex += 1;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.generateShortLink2();
    this.props.createLink({
      long_link: this.state.long_link,
      short_link: "https://semashort.herokuapp.com/#/links/" + this.state.short_link,
      visits: 0
    });
  }

  render() {
    return (
      <div className="create-link-form-container">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" name="long-link" value={this.state.long_link} placeholder="Place a link to shorten it" onChange={this.update("long_link")} />
          </label>
          <input type="submit" value="Shorten Link" />
        </form>
      </div>
    );
  }

}

export default LinkForm;
