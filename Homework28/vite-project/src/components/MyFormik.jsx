import { useFormik } from "formik";

function MyFormik({ addTask }) {
  const formik = useFormik({
    initialValues: {
      ToDoTask: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.ToDoTask) {
        errors.ToDoTask = "Required";
      } else if (!/^.{5,}$/.test(values.ToDoTask)) {
        errors.ToDoTask = "Текст повинен містити не менше 5 символів.";
      }
      return errors;
    },
    onSubmit: (values, {resetForm}) => {
      console.log("submit", values);
      addTask(values.ToDoTask);
      resetForm();
    },
  });

  return (
    <>
      <h3 className="text-center mt-3">To Do List</h3>
      <form className="mb-3" onSubmit={formik.handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            className={formik.touched.ToDoTask && formik.errors.ToDoTask ? "form-control is-invalid" : "form-control"}
            placeholder="Введіть нове завдання..."
            id="ToDoTask"
            value={formik.values.ToDoTask}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <button className="btn btn-primary" type="submit">
            Додати
          </button>
        </div>
        {formik.touched.ToDoTask && formik.errors.ToDoTask ? <div className="text-danger">{formik.errors.ToDoTask}</div> : null}
      </form>
    </>
  );
}
export default MyFormik;
