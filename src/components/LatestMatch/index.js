// Write your code here
import './index.css'

const LatestMatch = props => {
  // console.log(props)
  const {latestMatchDetails} = props

  /** Converting data from snake_case (backend) to camelCase (frontend) */
  const updatedData = {
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    date: latestMatchDetails.date,
    firstInnings: latestMatchDetails.first_innings,
    id: latestMatchDetails.id,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    matchStatus: latestMatchDetails.match_status,
    result: latestMatchDetails.result,
    secondInnings: latestMatchDetails.second_innings,
    umpires: latestMatchDetails.umpires,
    venue: latestMatchDetails.venue,
  }

  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = updatedData

  return (
    <div className="latest-matches">
      <div className="match-info-logo-container">
        <div className="match-info-container">
          <p className="competing-team">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue-result-style">{venue}</p>
          <p className="venue-result-style">{result}</p>
        </div>
        <img
          className="competing-team-logo"
          src={competingTeamLogo}
          alt="latest match {competingTeam}"
        />
      </div>
      <img
        className="competing-team-logo-lg"
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
      />
      <hr className="separator" />
      <div className="innings-section">
        <p className="innings-section-headings">First Innings</p>
        <p>{firstInnings}</p>
        <p className="innings-section-headings">Second Innings</p>
        <p>{secondInnings}</p>
        <p className="innings-section-headings">Man of The Match</p>
        <p>{manOfTheMatch}</p>
        <p className="innings-section-headings">Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
