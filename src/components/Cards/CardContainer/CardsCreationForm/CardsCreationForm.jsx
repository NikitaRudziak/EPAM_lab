import React from "react";

import { Field } from "../../../common/Field";

import FormStyle from "./CardsCreationForm.module.scss";

export const CardsCreationForm = ({form: { imageUrl, title, res, price }, onChange, onSubmit}) => (
  <form
    className={FormStyle.container}
    onSubmit={e => {
      e.preventDefault();
      onSubmit({
        id: Math.floor(Math.random() * 50000) + 5,
        title: title.value,
        imageUrl: imageUrl.value,
        res: res.value,
        price: price.value
      });
    }}
  >
    <div className={FormStyle.labelContainer}>
      <label htmlFor="imageUrl">ImageUrl:</label>
      <label htmlFor="title">Title:</label>
      <label htmlFor="res">Res:</label>
      <label htmlFor="price">Price:</label>
    </div>
    <div className={FormStyle.inputContainer}>
      <Field name="imageUrl" onChange={onChange} placeholder={imageUrl.value} error={imageUrl.error} />
      <Field name="title" onChange={onChange} placeholder={title.value} error={title.error} />
      <Field name="res" onChange={onChange} placeholder={res.value} error={res.error} />
      <Field name="price" onChange={onChange} placeholder={price.value} error={price.error} />
    </div>
    <input className={FormStyle.sendInput} value="Send" type="submit" />
  </form>
)
