"use client"
import {useState} from "react"
import { Select, Form } from "antd";
import { Field as FormikField, Formik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

import { InputField } from "../../components";
import { countriesData } from "../../json/countries";
import { CustomButton } from "../../components";
import InputFieldStyle from "../InputField/InputField.style";
import ContactFormStyle from "./ContactForm.style";

const FormItem = Form.Item;
const Option = Select.Option;

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const alphabetsOnly = /^[a-zA-Z ]+$/;

const QuestionMark = () => <span style={{ fontFamily: "sans-serif" }}>?</span>;

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  name: Yup.string()
    .matches(alphabetsOnly, "Only alphabets allowed")
    .min(4, "Name is too short!")
    .max(30, "Name is too long!")
    .required("Name is required"),
  company: Yup.string().required("Company is required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone Number is required"),
  // role: Yup.string().matches(alphabetsOnly, "Only alphabets allowed"),
  // country: Yup.string().required("Country is required"),
  message: Yup.string()
    .min(20, "Message is too short!")
    .required("Message is required"),
});

const formInitialValues = {
  email: "",
  name: "",
  company: "",
  // role: "",
  // country: "",
  phone: "",
  message: "",
};

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  return (
    <Formik
      initialValues={formInitialValues}
      validationSchema={SignupSchema}
      onSubmit={(values, { resetForm }) => {
        emailjs
          .send(
            "service_6vnvxpy",
            "template_zw5ogcc",
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
        <ContactFormStyle autoComplete="off">
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
            label="Company"
            area="company"
            name="company"
            value={values.company}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors.company}
            touched={touched.company}
          />

          {/* <InputField
            label="Role (optional)"
            area="role"
            name="role"
            value={values.role}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors.role}
            touched={touched.role}
          /> */}

          {/* <InputFieldStyle area="country">
            <label className="field-label">Country</label>
            <FormItem>
              <FormikField
                name="country"
                render={({ field }) => (
                  <Select
                    allowClear
                    showSearch
                    {...field}
                    onChange={(value) => setFieldValue("country", value)}
                    onBlur={() => setFieldTouched("country", true)}
                    value={values.country}
                  >
                    {countriesData.map((data, index) => (
                      <Option key={index} value={data.name}>
                        {data.name}
                      </Option>
                    ))}
                  </Select>
                )}
              />
            </FormItem>

            {errors.country && touched.country ? (
              <div className="error-message">{errors.country}</div>
            ) : null}
          </InputFieldStyle> */}

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

          <InputField
            type="textarea"
            label={
              <>
                What would you like help with
                <QuestionMark />
              </>
            }
            area="message"
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors.message}
            touched={touched.message}
          />

          <CustomButton as="button" title="Submit" button="primary" />

          {success === "OK" && (
            <p className="form-message">
              Thank You for you message. Someone will get back to you shortly.
            </p>
          )}
        </ContactFormStyle>
      )}
    </Formik>
  );
};

export default ContactForm;
