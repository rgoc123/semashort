import React from 'react';

class LinkForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      long_link: "",
      short_link: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.generateShortLink = this.generateShortLink.bind(this);
    this.chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  }

  generateShortLink() {
    this.links = this.props.links;
    let chars = this.chars;
    let linkString = "";
    if (this.links[this.links.length-1].short_link.length < 34) {
      linkString = this.links[this.links.length-1].short_link;
    } else {
      linkString = this.links[this.links.length-1].short_link.substring(34);
    }

    let string = linkString.split("");
    let idx = 0;
    let newString = "";
    string.forEach((ch, idx2) => {
      if ((ch === "9") && (idx === string.length-1)) {
        let newString = "";
        string.forEach(ch => newString += "a");
        newString = newString + "a";
        this.state.short_link = newString;
      } else if (ch === "9") {
        if (string[idx + 1] !== "9") {
          let newArr = string.slice(0, idx+2);
          newArr = newArr.map(ch => ch = "a");
          let next_idx = chars.indexOf(string[idx + 1]) + 1;
          newArr[newArr.length - 1] = chars[next_idx];
          newArr.forEach((ch, idx) => {
            string[idx] = ch;
          });
          let newString = "";
          newString = string.join("");
          this.state.short_link = newString;
        } else {
          idx += 1;
        }
      } else {
        if (idx2 > 0) {
          this.state.short_link = string.join("");
        } else {
          let next_idx = chars.indexOf(string[0]) + 1;
          string[0] = chars[next_idx];
          newString = string.join("");
          this.state.short_link = newString;
        }
      }
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  clearLinkForm() {
    this.state.short_link = "";
  }

  handleSubmit(e) {

    e.preventDefault();
    this.generateShortLink();
    this.props.createLink({
      long_link: this.state.long_link,
      short_link: "https://semashort.herokuapp.com/#/" + this.state.short_link,
      visits: 0
    });
    this.clearLinkForm();
  }

  renderNewLink() {
    if(this.props.links.length === 0) {
      return null;
    } else {
      return(
        <div className="last-link">
          <h3>Here is the last short link made!</h3>
          <h4>Short Link: {this.props.links[this.props.links.length - 1].short_link}</h4>
          <h4>Destination: {this.props.links[this.props.links.length - 1].long_link}</h4>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="create-link-form-container">
        <div className="instructions-container">
        <h3>Instructions</h3>
        <p>Copy the entire link you want to shorten directly from the address bar in your browser and paste it in the field below (only use a valid URL). Click the "Shorten Link" button and see your new link appear below! You can now use that link in the address bar to get to your destination!</p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text"
            name="long-link"
            className="form-field"
            value={this.state.long_link}
            placeholder="Paste link here"
            onChange={this.update("long_link")} />
          </label>
          <input className="link-form-button" type="submit"
          value="Shorten Link" />
        </form>
        {this.renderNewLink()}
      </div>
    );
  }

}

export default LinkForm;
