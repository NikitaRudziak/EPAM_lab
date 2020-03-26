import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Card } from "./Card";
import { CardsCreationForm } from "./CardsCreationForm";
import { apiCall } from "../../../api/mockedApi";
import { cDM, formChange, formSubmit, handleDelElem } from '../../../redux/actions';

import CardContainerStyle from "./CardContainer.module.scss";

export class CardContainer extends Component {
  componentDidMount() {
    apiCall().then(data => this.props.cDM(data));
  }

  renderCards = cards => {
    return cards.map(item => (
      <Card
        key={item.id}
        onClick={() => this.props.handleDelElem(item.id)}
        id={item.id}
        {...item}
      />
    ));
  };

  renderEmptyCards = () => (
    <div className={CardContainerStyle.noCards}>No cards yet</div>
  );

  validateNumber = (name, value) => {
    const valid = /^\d+$/;
    if (name === "price" && !valid.test(value)) {
      return "Only numbers";
    } else {
      return null;
    }
  };

  handleChange = ({ target: { name, value } }) => {
    let form = this.props.form;
    this.props.formChange({
      ...form,
      [name]: {
        value: value,
        error: value.length > 0 ? this.validateNumber(name, value) : "Should be not empty"
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, imageUrl, res, price } = this.props.form;
    if (title.value !== "" && imageUrl.value !== "" &&
        res.value !== "" && price.value !== "") {
      const newObj = {
        id: Math.floor(Math.random() * 50000) + 5,
        title: title.value,
        imageUrl: imageUrl.value,
        res: res.value,
        price: price.value
      };
      this.props.formSubmit(newObj);
    }
  };

  render() {
    return (
      <div>
        <div className={CardContainerStyle.container}>
          <CardsCreationForm
            onSubmit={this.props.formSubmit}
            onChange={this.handleChange}
            form={this.props.form}
          />
        </div>
        <div className={CardContainerStyle.container}>
          {this.props.cards.length > 0 ? this.renderCards(this.props.cards) : this.renderEmptyCards()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cardReducer.cards,
    form: state.cardReducer.form
  }
}

const mapDispatchToProps = dispatch => {
  return {
    cDM: data => dispatch(cDM(data)),
    formChange: ({ imageUrl, title, res, price }) =>
      dispatch(formChange(imageUrl, title, res, price)),
    formSubmit: form => dispatch(formSubmit(form)),
    handleDelElem: (id) => dispatch(handleDelElem(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardContainer));
