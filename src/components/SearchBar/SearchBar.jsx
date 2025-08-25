import css from "./SearchBar.module.css";
import { Field, Formik, Form } from "formik";
import { IoIosSearch } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
  const initialValues = { filter: "" };

  function handleSubmit(values) {
    if (values.filter.trim() === "") {
      toast.error("You need to enter search query!");
      return;
    }
    onSubmit(values.filter);
    //actions.resetForm();
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
