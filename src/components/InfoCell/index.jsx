import Text from "components/common/Text";
import style from './InfoCell.module.scss';

const InfoCell = ({ title, children }) => (
  <div className={style.cell}>
    <div className={style.title}>
      <Text opacity={0.6}>{title}</Text>
    </div>
    <Text size={25}>{children}</Text>
  </div>
)

export default InfoCell;
