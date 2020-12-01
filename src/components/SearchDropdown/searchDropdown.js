import React from 'react'
import './styles.css'

class SearchDropdown extends React.Component {

  render() {

    return (
      <a onClick='http://grupohsd.com/' className="container container--hover container--bg-azul-cielo container--p-relative" value={this.props.profile}>
      <img className="container__img-profile" src='https://randomuser.me/api/portraits/women/85.jpg' alt="profile" />
      <h4 className="container__profile">miloazul10</h4>
      {/* <Icon source={this.props.iconBadge} iconModifier={`t-icon container__icon--badge`} /> */}
      <h4 className="container__username container__username--font-normal">@miloazul10</h4>
  </a>
    )
  }
}

export default SearchDropdown