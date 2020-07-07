import React, { useState, useEffect } from "react";
import s from "./Goodsform.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, TextArea, Image, Input, Label } from "semantic-ui-react";
import * as Yup from "yup";
import { uploadImage, addGoods} from "../../../api/goods";
import noImage from "../../../assets/images/noimage.png";

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required("Назва товару є обов`язковою")
    .min(6, "Мінімально довжина - 6 символів"),
  price: Yup.number("Ціна повинна бути числом").required("Ціна обов`язкова"),
  description: Yup.string()
    .required("Опис товару є обов`язковим")
    .min(12, "Мінімально довжина - 12 символів"),
});

const initialValues = {
  title: "",
  description: "",
  price: "",
};

const Goodsforms = () => {
  const [image, setImage] = useState(noImage);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadImageStatus, setUploadImageStatus] = useState(true);

  useEffect(() => {}, []);

  const handleGoods = async (data) => {
    if(image != noImage){
      setUploadImageStatus(true);
      const imageData = await addImage();
      if(imageData.status === 201){
        const response = await addGoods({
          imageUrl: imageData.data.imageUrl,
          title: data.title,
          price: data.price,
          description: data.description
        });
      }
    }else{
      return setUploadImageStatus(false);
    }
    return null;
  };

  const addImage = async () => {
    const data = new FormData();
    const requestOptions = {
      headers: {
        "Content-Type": `multipart / form - data;
        boundary =${data._boundary}`,
      },
      crossDomain: true,
    };
    data.append("avatarImage", uploadedFile, uploadedFile.name);
    return await uploadImage(data, requestOptions);
  };

  const isFileValid = (file) => {
    if (!file) return false;
    const validExtentions = ["image/jpg", "image/png", "image/jpeg"];
    if (!validExtentions.includes(file.type)) {
      return false;
    }
    const maxSize = 15728640;
    if (maxSize < file.size) {
      return false;
    }
    return true;
  };

  const onChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    const valid = isFileValid(file);
    if (!valid) return;
    reader.onloadend = () => {
      setUploadedFile(file);
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <h2 className={s.formTitile}>Форма добавлення нових товарів</h2>
      <div className={s.formwrapper}>
        <div className={s.formelement}>
          <Formik
            initialValues={initialValues}
            onSubmit={handleGoods}
            validationSchema={validationSchema}
          >
            {({
              values,
              handleSubmit,
              handleChange,
              isSubmitting,
              isValid,
              errors,
              touched,
            }) => (
              <Form className={s.form}>
                <label htmlFor="name" className={s.inputLabel}>
                  Назва товару:
                </label>
                <Field
                  name="title"
                  type="text"
                  placeholder="Назва товару"
                  value={values.name}
                  onChange={handleChange}
                  component={MyInput}
                  className={s.input}
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className={s.alertMessage}
                />
                <label htmlFor="price" className={s.inputLabel}>
                  Ціна:
                </label>
                <Field
                  name="price"
                  type="number"
                  placeholder="Ціна"
                  value={values.price}
                  onChange={handleChange}
                  component={PriceInput}
                />
                <ErrorMessage
                  name="price"
                  component="div"
                  className={s.alertMessage}
                />
                <label htmlFor="description" className={s.inputLabel}>
                  Опис товару:
                </label>
                <Field
                  name="description"
                  placeholder="Опис повинен не перевищувати довжину у 40 символів."
                  value={values.description}
                  onChange={handleChange}
                  component={MyTextArea}
                  rows="5"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className={s.alertMessage}
                />
                <Button primary type="submit">
                  Зберегти
                </Button>
              </Form>
            )}
          </Formik>
        </div>

        <div className={s.imgWrapper}>
          <div className={s.imageBlock}>
            <Image size="medium" src={image} />
          </div>
          <Button primary className={s.inputWrapper}>
            <input
              className={s.fileLoader}
              type="file"
              onChange={(e) => onChange(e)}
            />{" "}
            Загрузити файл
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Goodsforms;

const MyInput = ({ field, form, ...props }) => {
  return <Input {...field} {...props} />;
};

const PriceInput = ({ field, form, ...props }) => {
  return (
    <Input labelPosition="right" className={s.input} {...field} {...props}>
      <Label basic>$</Label>
      <input />
      <Label>.00</Label>
    </Input>
  );
};

const MyTextArea = ({ field, form, ...props }) => {
  return <TextArea {...field} {...props} className={s.textArea} />;
};
