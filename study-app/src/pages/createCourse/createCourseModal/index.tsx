import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FilledBtn } from '../../../components/filledBtn';
import { changeCourseCreated } from '../../../features/modal/modalSlice';
import { useAppDispatch } from '../../../store';
import './style.css';

export interface ModalPractiseProps {
  setModalOpen: (value: boolean) => void;
}

export const ModalCreateCourse = (props: ModalPractiseProps) => {
  const { t } = useTranslation();
  const { setModalOpen } = props;

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div
      className="modal-answers-container"
      onClick={(e) => {
        const { target } = e;
        if ((target as HTMLElement).classList.contains('modal-answers-container')) closeModal();
      }}
    >
      <div className="modal-answers">
        <div className="close-modal" onClick={closeModal}></div>
        <div className="modal-answers-info">
          <div className="modal-title">{t('createCourse.courseCreated')}</div>
          <img src="./assets/course-created.png" alt="course created" />
          <Link to="/main">
            <FilledBtn text={t('modalPractise.toMain')} />
          </Link>
        </div>
      </div>
    </div>
  );
};
