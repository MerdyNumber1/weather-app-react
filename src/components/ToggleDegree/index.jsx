import {useState} from 'react'
import style from './ToggleDegree.module.scss';

const ToggleDegree = () => {
  const [degreeType, setDegreeType] = useState('C')

  return (
    <div className={style.toggleDegree}>
      <p className={style.degree}>º</p>
      <div className={style.switch}>
        {['C', 'F'].map(type => (
          <div
            key={type}
            className={`${style.switchItem} ${degreeType === type && style.switchItemActive}`}
            onClick={() => setDegreeType(type)}
          >
            <p style={{opacity: degreeType === type ? 1 : 0.4}}>{type}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ToggleDegree;
