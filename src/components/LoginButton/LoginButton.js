import React, { PropTypes } from 'react'
// import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { login, logout, loadUserData } from './actions'

class LoginButton extends React.Component {

  constructor (props) {
    super(props)
    this.dispatchLogin = () => { props.dispatch(login(true)) }
    this.dispatchLogout = () => { props.dispatch(logout()) }
    this.dispatchLoadUserData = (data) => { props.dispatch(loadUserData(data)) }

    this.state = { init: false }
  }

  // important for function to be arrow function for 'this' value
  updateSigninStatus = (isSignedIn) => {
    if (isSignedIn) {
      this.dispatchLogin()
      window.gapi.client.people.people.get({
        resourceName: 'people/me'
      }).then((resp) => {
        this.dispatchLoadUserData(resp.result)
        console.log(resp.result.emailAddresses[0].value + ' logged in')
      })
    } else {
      this.dispatchLogout()
    }
  }

  componentDidMount () {
    const gapi = window.gapi // gapi script linked in index.html on window object cuz i don't know webpack

    const apiKey = 'AIzaSyCIzU9qhu2CJOlXvZ-E2wGAxq8YDafw3pE'
    const discoveryDocs = ['https://people.googleapis.com/$discovery/rest?version=v1']
    const clientId = '423585535949-ta1cr7k1v7imusuvu828emdjo7tosn20.apps.googleusercontent.com'
    const scope = 'profile'

    gapi.load('client:auth2', () => {
      gapi.client.init({ apiKey, discoveryDocs, clientId, scope })
        .then(() => {
          gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus)
          this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get())

          this.setState({ init: true })
        })
    })
  }

  render () {
    return (
      this.state.init === false
        ? (<RaisedButton label='auth2 not initialized' labelPosition='before' />)
        : this.props.loggedIn === false
          ? <RaisedButton label='Log In With Google' labelPosition='before'
            onClick={() => { window.gapi.auth2.getAuthInstance().signIn() }} />
          : <RaisedButton label='Log Out' labelPosition='before'
            onClick={() => { window.gapi.auth2.getAuthInstance().signOut() }} />
    )
  }
}

LoginButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loggedIn: PropTypes.Boolean.isRequired
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.loggedIn
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {}
// }

export default connect(
  mapStateToProps
)(LoginButton)
