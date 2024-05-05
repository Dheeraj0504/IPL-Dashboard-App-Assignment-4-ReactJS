// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  // console.log(props)
  const {teamDetails} = props
  const {name, teamImageUrl, id} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="team-link">
      <li className="team-list-item">
        <img className="team-image" src={teamImageUrl} alt={name} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
