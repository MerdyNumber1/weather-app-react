import { useDispatch, useSelector } from "react-redux";
import style from './ToggleMetric.module.scss';
import { changeMetric } from "store/settings/actions";

const ToggleMetrics = () => {
  const metric = useSelector(state => state.settings.metric);
  const dispatch = useDispatch();

  const onChangeMetric = (metric) => dispatch(changeMetric(metric))

  return (
    <div className={style.toggleMetric}>
      <p className={style.degree}>º</p>
      <div className={style.switch}>
        {['C', 'F'].map(type => (
          <div
            key={type}
            className={`${style.switchItem} ${metric === type && style.switchItemActive}`}
            onClick={() => metric !== type && onChangeMetric(type)}
          >
            <p style={{opacity: metric === type ? 1 : 0.4}}>{type}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ToggleMetrics;
