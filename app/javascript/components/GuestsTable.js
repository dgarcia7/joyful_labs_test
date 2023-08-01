import React from "react"
import PropTypes from "prop-types"
import BaseTable from "./BaseTable";

const columns = [
  {name: 'Contact', selector: row => row.contact},
  {name: 'Company', selector: row => row.company,},
  {name: 'List', selector: row => row.list},
  {name: 'Rep', selector: row => row.rep},
];

const data = [
  {contact: 'Apple 1001', company: 'Premier America CU', list: '', rep: 'Pinkerton pete'},
  {contact: 'Google 2002', company: 'Bank of America', list: 'Technology', rep: 'Smith John'},
  {contact: 'Microsoft 3003', company: 'Wells Fargo', list: 'Software', rep: 'Brown Sarah'},
  {contact: 'Amazon 4004', company: 'Chase Bank', list: 'E-commerce', rep: 'Johnson Mike'},
  {contact: 'Tesla 5005', company: 'Citibank', list: 'Electric Vehicles', rep: 'Williams Emily'},
  {contact: 'Facebook 6006', company: 'American Express', list: 'Social Media', rep: 'Jones David'},
  {contact: 'Netflix 7007', company: 'Goldman Sachs', list: 'Streaming', rep: 'Miller Lisa'},
  {contact: 'Uber 8008', company: 'Morgan Stanley', list: 'Ride-hailing', rep: 'Davis Michael'},
  {contact: 'Twitter 9009', company: 'JPMorgan Chase', list: 'Social Network', rep: 'Taylor Jessica'},
  {contact: 'IBM 1010', company: 'Discover Financial', list: 'Technology', rep: 'Martinez Carlos'},
  {contact: 'Intel 1111', company: 'US Bank', list: 'Semiconductors', rep: 'Hernandez Maria'},
  {contact: 'Samsung 1212', company: 'PNC Financial', list: 'Electronics', rep: 'Lopez Daniel'},
  {contact: 'Cisco 1313', company: 'Capital One', list: 'Networking', rep: 'Garcia Karen'},
  {contact: 'Oracle 1414', company: 'TD Bank', list: 'Database', rep: 'Rodriguez William'},
  {contact: 'HP 1515', company: 'BB&T', list: 'Computer', rep: 'Anderson Michelle'},
  {contact: 'Dell 1616', company: 'SunTrust Bank', list: 'Computer', rep: 'Thomas Anthony'},
  {contact: 'Sony 1717', company: 'Fifth Third Bank', list: 'Electronics', rep: 'White Sandra'},
  {contact: 'Lenovo 1818', company: 'Santander Bank', list: 'Computer', rep: 'Clark James'},
  {contact: 'LG 1919', company: 'HSBC Bank', list: 'Electronics', rep: 'Lewis Mary'},
  {contact: 'Nvidia 2020', company: 'Regions Bank', list: 'Graphics', rep: 'Lee Joseph'},
  {contact: 'Snap 2121', company: 'KeyBank', list: 'Social Media', rep: 'Harris Elizabeth'}
]

class GuestsTable extends React.Component {
  render () {
    return (
      <BaseTable title="Guest" columns={columns} data={data} imp exp />
    );
  }
}

export default GuestsTable
