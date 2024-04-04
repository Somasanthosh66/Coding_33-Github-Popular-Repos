// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {isActive, languageFilterDetails, setActiveLanguageFilterId} = props
  const {id, language} = languageFilterDetails
  const buttonClassName = isActive
    ? 'language-button active-language-button'
    : 'language-button'

  const onClickLanguageFilter = () => {
    setActiveLanguageFilterId(id)
  }

  return (
    <li>
      <button
        className={buttonClassName}
        onClick={onClickLanguageFilter}
        type="button"
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
