import { css } from 'glamor'
import sizes from '../../config/styles/sizes'
import * as colors from '../../config/styles/colors'

export default {
  nav: css({
    backgroundColor: colors.navbarBG,
    height: `${ sizes.navbar.height }`,
  }),
  h2: css({
    color: colors.white,
    fontSize: '20px',
    paddingTop: '17px',
    paddingLeft: '20px',
  })
}