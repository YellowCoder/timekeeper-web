import { css } from 'glamor'
import sizes from '../../config/styles/sizes'

export default {
  nav: css({
    backgroundColor: '#E3EEFF',
    display: 'inline-block',
    height: '100%',
    verticalAlign: 'top',
    width: `${ sizes.sidebar.width }px`
  })
}