import { Button } from "@/components/ui/button";
import { Formik } from "formik"

const Login = () => {
    return (<div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Login</h1>
        <p className="mb-6 text-gray-600">Please enter your credentials to log in.</p>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors: { email?: string; password?: string } = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                }
                if (!values.password) {
                    errors.password = 'Required';
                } else if (values.password.length < 6) {
                    errors.password = 'Password must be at least 6 characters';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                console.log('Form submitted:', values);
                setSubmitting(false);
            }}>
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (<form onSubmit={handleSubmit} className="w-80 space-y-4">
                <div className="mb-4">
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        className={`w-full px-3 py-2 border rounded ${errors.email && touched.email ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Email"
                    />
                    <small className="text-red-500">
                        {errors.email && touched.email && errors.email}
                    </small>

                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        className={`w-full px-3 py-2 border rounded ${errors.password && touched.password ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Password"
                    />
                    <small className="text-red-500">{errors.password && touched.password && errors.password}</small>

                </div>

                <Button variant={"default"}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:opacity-50">
                    {isSubmitting ? 'Logging in...' : 'Login'}
                </Button>
            </form>)}
        </Formik>

    </div>)
}
export default Login 