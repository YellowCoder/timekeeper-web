import { css } from 'glamor'
import sizes from '../../config/styles/sizes'
import * as colors from '../../config/styles/colors'

export default {
  nav: css({
    backgroundColor: colors.sidebarBG,
    display: 'inline-block',
    height: '100%',
    verticalAlign: 'top',
    width: `${ sizes.sidebar.width }px`
  })
}