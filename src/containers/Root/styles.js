import { css } from 'glamor'
import sizes from '../../config/styles/sizes'

export default {
  content: css({
    height: '100%'
  }),
  main: css({
    display: 'inline-block',
    height: '100%',
    width: `calc(100% - ${ sizes.sidebar.width }px)`
  })
}