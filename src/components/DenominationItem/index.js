// Write your code here
import './index.css'

const DenominationItem = props => {
  const {eachItem, deductMoney} = props
  const {value} = eachItem

  const onButtonClick = () => {
    deductMoney(value)
  }
  return (
    <li className="di-container">
      <button type="button" className="di-button" onClick={onButtonClick}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
