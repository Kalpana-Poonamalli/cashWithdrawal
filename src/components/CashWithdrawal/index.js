// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {money: 2000}

  onDeduct = value => {
    const {money} = this.state
    if (money >= value) {
      this.setState(prevState => ({money: prevState.money - value}))
    }
  }

  render() {
    const {money} = this.state
    const {denominationsList} = this.props
    return (
      <div className="cw-container">
        <div className="cw-inner-container">
          <div className="cw-profile-name-container">
            <p className="cw-profile">S</p>
            <h1 className="cw-profile-name">Sarah Williams</h1>
          </div>
          <div className="cw-balance-container">
            <p className="cw-balance-heading">Your Balance</p>
            <p className="cw-balance-count">{money}</p>
          </div>
          <p className="cw-rupees">In Rupees</p>
          <p className="cw-heading">Withdraw</p>
          <p className="cw-para">CHOOSE SUM (IN RUPEES)</p>
          <ul className="cw-cash-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                eachItem={eachItem}
                key={eachItem.id}
                deductMoney={this.onDeduct}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
