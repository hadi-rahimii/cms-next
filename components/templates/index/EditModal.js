import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCashRegister,
  faTag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Modal.module.css";
import { useState } from "react";

const EditModal = ({ hideEditModal, updateHandler }) => {
  const [title, setTilte] = useState("");
  return (
    <div className={styles.modal_container} id="edit-modal">
      <div className={styles.modal_bg} onClick={hideEditModal}></div>
      <div className={styles.modal_content}>
        <h1 className={styles.modal_title}>اطلاعات جدید را وارد کنید</h1>
        <form action="#" className={styles.edit_user_form}>
          <div className={styles.input_field}>
            <span>
              <FontAwesomeIcon icon={faTag} />
            </span>
            <input
              value={title}
              onChange={(event) => setTilte(event.target.value)}
              type="text"
              placeholder="نام دوره"
              spellcheck="false"
            />
          </div>
          <button
            type="submit"
            onClick={(event) => updateHandler(event, title)}
            className={styles.update_btn}
          >
            اپدیت دوره
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
