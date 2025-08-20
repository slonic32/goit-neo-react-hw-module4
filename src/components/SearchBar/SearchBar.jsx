import css from "./SearchBar.module.css";
import { Field, Formik, Form } from "formik";
import { IoIosSearch } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
  const initialValues = { filter: "" };

  function handleSubmit(values, actions) {
    if (values.filter.trim() === "") {
      toast.error("You need to enter search querry!");
      return;
    }
    onSubmit(values.filter, 1);
    actions.resetForm();
  }

  return (
    <header className={css.searchbar}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <button type="submit" className={css.button}>
            <IoIosSearch className={css.icon} />
            <span className={css.buttonLabel}>Search</span>
          </button>

          <Field
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="filter"
          />
        </Form>
      </Formik>
      <Toaster />
    </header>
  );
}
