import { fade } from 'material-ui/utils/colorManipulator'
import * as Colors from 'material-ui/styles/colors'
import { spacing, getMuiTheme } from 'material-ui/styles'

const rawBaseTheme = {
  ...spacing,
  fontFamily: 'Roboto, sans-serif',
  palette : {
    primary1Color: '#0277bd',
    primary2Color: '#29b6f6',
    primary3Color: '#01579b',
    accent1Color: '#76ff03',
    accent2Color: '#b2ff59',
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: fade(Colors.darkBlack, 0.3)
  }
}

// Theme must be wrapped in funciton getMuiTheme
export default getMuiTheme(rawBaseTheme)
