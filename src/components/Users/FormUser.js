import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FormUser extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { data } = this.props;
    if (Object.keys(data).length) {
      this.fullName.value = data.fullName;
      this.email.value = data.email;
      this.doc.value = data.doc || '';
      this.birthdate.value = data.birthdate || '';
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { isProfile, data } = this.props;

    let dataForm = {
      fullName: this.fullName.value.trim(),
      email: this.email.value.trim(),
      password: this.password.value.trim(),
      birthdate: this.birthdate.value,
      doc: this.doc.value.trim(),
      uid: data.uid
    };

    if (isProfile) {
      dataForm.yourPassword = this.yourPassword.value.trim();
    }

    this.props.onSaveUser( dataForm, isProfile );
  }

  render() {
    const { urlCancel, isProfile } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="grid-x">
          <div className="cell small-3">
            <label htmlFor="txt_fullname" className="required">Full Name</label>
          </div>
          <div className="cell small-9">
            <input type="text"
              id="txt_fullname"
              ref={ node => this.fullName = node }
              placeholder="Enter your full name" required />
          </div>
        </div>
        <div className="grid-x">
          <div className="cell small-3">
            <label htmlFor="txt_email" className="required">Email</label>
          </div>
          <div className="cell small-9">
            <input type="email"
              id="txt_email"
              ref={ node => this.email = node } placeholder="Enter your email" required />
          </div>
        </div>
        <div className="grid-x">
          <div className="cell small-3">
            <label htmlFor="txt_doc">Doc.</label>
          </div>
          <div className="cell small-9">
            <input type="text"
              id="txt_doc"
              ref={ node => this.doc = node } placeholder="Enter your identification document" />
          </div>
        </div>
        <div className="grid-x">
          <div className="cell small-3">
            <label htmlFor="txt_birthdate">Birthdate</label>
          </div>
          <div className="cell small-9">
            <input type="date"
              id="txt_birthdate"
              ref={ node => this.birthdate = node } placeholder="Enter your birthdate" />
          </div>
        </div>
        {
          isProfile &&
            <div className="grid-x">
              <div className="cell small-3">
                <label htmlFor="txt_your_password" className="required">Your password</label>
              </div>
              <div className="cell small-9">
                <input type="password"
                  id="txt_your_password"
                  ref={ node => this.yourPassword = node }
                  required
                  minLength="6"
                  placeholder="Your password is neccessary" />
              </div>
            </div>
        }
        <div className="grid-x">
          <div className="cell small-3">
            <label htmlFor="txt_password">Password</label>
          </div>
          <div className="cell small-9">
            <input type="password"
              id="txt_password"
              ref={ node => this.password = node } placeholder="Enter your password" />
          </div>
        </div>
        <div className="grid-x">
          <div className="cell small-9 small-offset-3">
            <button type="submit" className="button">Update</button>{' '}
            <Link to={urlCancel} className="button secondary">Cancel</Link>
          </div>
        </div>

      </form>
    );
  }
}

export default FormUser;