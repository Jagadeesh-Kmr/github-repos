import BtnContext from '../../context/BtnContext'

import './index.css'

const LanguageFilterData = props => (
  <BtnContext.Consumer>
    {value => {
      const {toggleBtn} = value

      const {languageData, isActive, setActiveId} = props
      const {language, id} = languageData

      const onClickToggleBtn = () => {
        setActiveId(id)
        toggleBtn()
      }

      const btnClassName = isActive ? 'btn-color' : 'btn'

      return (
        <>
          <ul className="language-ul">
            <button
              type="button"
              className={btnClassName}
              onClick={onClickToggleBtn}
            >
              {language}
            </button>
          </ul>
        </>
      )
    }}
  </BtnContext.Consumer>
)

export default LanguageFilterData
