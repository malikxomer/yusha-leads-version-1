"use client"
import { useState } from "react";
import { Select, Form } from "antd";
import { Field as FormikField, Formik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

import { InputField } from "../../components";
import { CustomButton } from "../../components";
import InputFieldStyle from "../InputField/InputField.style";
import { SignUpFormStyle, SignUpWrapperStyled } from "./SignUpForm.style";

const FormItem = Form.Item;
const Option = Select.Option;

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const alphabetsOnly = /^[a-zA-Z ]+$/;

const buildingData = [{ name: "The Savoy DC", code: "The Savoy DC" }];

const SignupSchema = Yup.object().shape({
  building: Yup.string().required("Building is required"),
  name: Yup.string()
    .matches(alphabetsOnly, "Only alphabets allowed")
    .min(4, "Name is too short!")
    .max(30, "Name is too long!")
    .required("Name is required"),
  unit: Yup.string().required("Unit no. is required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone no. is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const formInitialValues = {
  building: "",
  name: "",
  unit: "",
  phone: "",
  email: "",
};

const SignUpForm = () => {
  const [success, setSuccess] = useState(false);
  return (
    <SignUpWrapperStyled>
      <Formik
        initialValues={formInitialValues}
        validationSchema={SignupSchema}
        onSubmit={(values, { resetForm }) => {
          emailjs
            .send(
              "service_6vnvxpy",
              "template_5zoahcm",
              values,
              "user_vo4NArAW824nC0CmjZldW"
            )
            .then(
              (result) => {
                setSuccess(result.text);
                setTimeout(() => {
                  setSuccess("");
                }, 5000);
              },
              (error) => {
                // console.log(error.text);
              }
            );
          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          setFieldValue,
          setFieldTouched,
        }) => (
          <SignUpFormStyle autoComplete="off">
            <InputFieldStyle area="building">
              <label className="field-label">Building</label>
              <FormItem>
                <FormikField
                  name="building"
                  render={({ field }) => (
                    <Select
                      {...field}
                      onChange={(value) => setFieldValue("building", value)}
                      onBlur={() => setFieldTouched("building", true)}
                      value={values.building}
                    >
                      {buildingData.map((data, index) => (
                        <Option key={index} value={data.name}>
                          {data.name}
                        </Option>
                      ))}
                    </Select>
                  )}
                />
              </FormItem>

              {errors.building && touched.building ? (
                <div className="error-message">{errors.building}</div>
              ) : null}
            </InputFieldStyle>

            <InputField
              label="Work email"
              placeholder="John.smith@example.com"
              area="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors.email}
              touched={touched.email}
            />

            <InputField
              label="Name"
              placeholder="e.g. John Smith"
              area="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors.name}
              touched={touched.name}
            />

            <InputField
              label="Unit No."
              area="unit"
              name="unit"
              value={values.unit}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors.unit}
              touched={touched.unit}
            />

            <InputField
              type="number"
              label="Phone"
              area="phone"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors.phone}
              touched={touched.phone}
            />

            <CustomButton as="button" title="Sign Up" button="primary" />

            {success === "OK" && (
              <p className="form-message">Thank You for Signing up!</p>
            )}
          </SignUpFormStyle>
        )}
      </Formik>
    </SignUpWrapperStyled>
  );
};

export default SignUpForm;
