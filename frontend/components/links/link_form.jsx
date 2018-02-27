import React from 'react';

class LinkForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: null,
      long_link: "",
      short_link: "",
      visits: 0
    }
  }

  update() {

  }

  handleSubmit() {

  }

  render() {
    return (
      <div className="create-link-form-container">
        <form>
          <label>
            <input type="text" name="long-link" value="" placeholder="Place a link to shorten it" />
          </label>
          <label>
            <input type="text" name="short-link" value="" placeholder="Short link you want" />
          </label>
        </form>
      </div>
    );
  }

}

export default LinkForm;
