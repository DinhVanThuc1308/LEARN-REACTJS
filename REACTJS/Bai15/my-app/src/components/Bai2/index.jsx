import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';

function EmailForm() {
    const validationSchema = yup.object().shape({
        to: yup.string().email().required(),
        subject: yup.string().min(6).required(),
        message: yup.string().min(6).required(),
        attachment: yup.mixed().required('Tệp đính kèm là bắt buộc'),
    });
    const getData = (values) => {
        console.log(values);
    }
    return (
        <Formik
            initialValues={{ receiver: '', title: '', content: '', attachFile: '' }}
            validationSchema={validationSchema}
            onSubmit={getData}
        >
            {({ errors, touched }) => (
                <Form style={{ width: '300px', margin: 'auto' }}>

                    <div className="mb-3">
                        <label htmlFor="receiver" className="form-label">to</label>
                        <br />
                        <Field type="email" className={`form-control ${errors.receiver && touched.receiver && 'is-invalid'}`} id="receiver" name='receiver' aria-describedby="emailHelp" />
                        <ErrorMessage name="receiver" component="div" className="invalid-feedback" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">title</label>
                        <br />
                        <Field type="text" className={`form-control ${errors.title && touched.title && 'is-invalid'}`} id="title" name='title' aria-describedby="emailHelp" />
                        <ErrorMessage name="title" component="div" className="invalid-feedback" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="content" className="form-label">message</label>
                        <br />
                        <Field as="textarea" className={`form-control ${errors.content && touched.content && 'is-invalid'}`} placeholder="Điền nội dung tại đây !" id="content" name='content' style={{ height: '100px' }} />
                        <ErrorMessage name="content" component="div" className="invalid-feedback" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="attachFile" className="form-label">file</label>
                        <Field type="file" className={`form-control ${errors.attachFile && touched.attachFile && 'is-invalid'}`} id="attachFile" name='attachFile' />
                        <ErrorMessage name="attachFile" component="div" className="invalid-feedback" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
            )}
        </Formik>
    );
}
export default EmailForm;