import * as S from './styles'
import VScode from '../../assets/VSicon.png'

const TitleBar = () => {
  return (
    <S.TitleBarContainer>
      <div className="only-mobile">
        <img src={VScode} alt="Visual Studio Code Icon" />
      </div>
      <div className="texts-container">
        <img src={VScode} alt="Visual Studio Code Icon" />
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Terminal</p>
        <p>Help</p>
      </div>
      <div>
        <h1>Mozart Soares - Visual Studio Code Portfolio</h1>
      </div>
      <div className="circleContainer">
        <S.Circle color="yellow" />
        <S.Circle color="green" />
        <S.Circle color="red" />
      </div>
    </S.TitleBarContainer>
  )
}

export default TitleBar
