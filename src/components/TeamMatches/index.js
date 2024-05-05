// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    teamMatchesDetails: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchesDetails()
  }

  getTeamMatchesDetails = async () => {
    // console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    // console.log(data)
    /** Converting data from snake_case (backend) to camelCase (frontend) */
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({
      teamMatchesDetails: updatedData,
      isLoading: false,
    })
  }

  /** Converting data from snake_case (backend) to camelCase (frontend) */
  convertingObjectFromSnakeCaseToCamelCase = details => {
    const upDatedData = {
      umpires: details.umpires,
      result: details.result,
      manOfTheMatch: details.man_of_the_match,
      date: details.date,
      id: details.id,
      venue: details.venue,
      competingTeam: details.competing_team,
      competingTeamLogo: details.competing_team_logo,
      firstInnings: details.first_innings,
      secondInnings: details.second_innings,
      matchStatus: details.match_status,
    }
    return upDatedData
  }

  renderTeamMatchesPage = () => {
    const {teamMatchesDetails} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} =
      teamMatchesDetails

    return (
      <div className="team-matches-content-container">
        <img
          src={teamBannerUrl}
          alt="team banner"
          className="team-banner-image"
        />
        <h1 className="latest-matches-heading">Latest Matches</h1>
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <ul className="match-cards-list">
          {recentMatches.map(eachMatch => (
            <MatchCard
              key={eachMatch.id}
              matchDetails={this.convertingObjectFromSnakeCaseToCamelCase(
                eachMatch,
              )}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    // console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params

    const {isLoading} = this.state
    return (
      <div className={`team-matches-bg-container bg-gradient-${id}`}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatchesPage()
        )}
      </div>
    )
  }
}

export default TeamMatches
