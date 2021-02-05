import style from './InfoCell.module.scss';

const InfoCell = ({ title, children }) => (
  <div className={style.cell}>
    <p className={style.title}>{title}</p>
    <p className={style.content}>{children}</p>
  </div>
)

export default InfoCell;
