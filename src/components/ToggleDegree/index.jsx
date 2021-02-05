import {useState} from 'react'
import Text from "components/common/Text";
import style from './ToggleDegree.module.scss';

const ToggleDegree = () => {
  const [degreeType, setDegreeType] = useState('C')

  return (
    <div className={style.toggleDegree}>
      <Text opacity={0.4}>º</Text>
      <div className={style.switch}>
        {['C', 'F'].map(type => (
          <div
            key={type}
            className={`${style.switchItem} ${degreeType === type && style.switchItemActive}`}
            onClick={() => setDegreeType(type)}
          >
            <Text opacity={degreeType === type ? 1 : 0.4}>{type}</Text>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ToggleDegree;
