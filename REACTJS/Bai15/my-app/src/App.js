import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
import Bai1 from "./components/Bai1/index.jsx";
import Bai2 from "./components/Bai2/index.jsx";

// const validationSchema = Yup.object().shape({
//   name: Yup.string().required("Bạn chưa nhập tên").min(3, "Ít ký tự quá!!"),
//   email: Yup.string().email("Invalid email").required("Required"),
// });

const App = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     email: "",
  //   },
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  //   validationSchema: validationSchema,
  // });
  return (
    // căn giữa
    <div className="container" style={{ paddingLeft: 50 }}>
      <div>
        <h1>bài 1</h1>
        <Bai1 />
        <hr></hr>
        <h1>bài 2</h1>
        <Bai2 />
      </div>
    </div>

    // <form onSubmit={formik.handleSubmit}>
    //   <label htmlFor="name">Name</label>
    //   <input
    //     id="name"
    //     name="name"
    //     type="text"
    //     onChange={formik.handleChange}
    //     value={formik.values.name}
    //   />
    //   {formik.errors["name"] && <div>{formik.errors.name}</div>}
    //   <br />

    //   <label htmlFor="email">Email Address</label>
    //   <input
    //     id="email"
    //     name="email"
    //     type="email"
    //     onChange={formik.handleChange}
    //     value={formik.values.email}
    //   />

    //   <button type="submit">Submit</button>
    // </form>
  );
};
export default App;
