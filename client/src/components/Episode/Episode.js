import React from 'react'
import VideoPlayer from '../../lib/videoPlayer/VideoPlayer'
import withWidth from '@material-ui/core/withWidth'
import EpisodeDoc from './EpisodeDoc'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const styles = theme => ({
  root: {
    width: 1000,
    [theme.breakpoints.down('md')]: {
      width: 800
    },

    margin: '0 auto',

    padding: theme.spacing.unit * 3,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: 0
    }
  },
  player: {
    padding: theme.spacing.unit * 3,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing.unit
    }
  },
  videoMeta: {
    paddingTop: theme.spacing.unit * 3,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing.unit
    }
  }
})

class Episode extends React.Component {
  componentDidMount() {
    const { width, openDrawer } = this.props
    if (width === 'lg' || width === 'xl') {
      openDrawer()
    }
    this.props.setOnEpisodePage()
    const { courseUid } = this.props.match.params
    this.props.fetchCurrentCourse(courseUid)
  }

  componentWillUnmount() {
    this.props.clearOnEpisodePage()
  }

  render() {
    const {
      videoJsOptions,
      episodeItem: { markdown },
      classes: s,
      episodeTitle
    } = this.props

    return (
      <div>
        <div className={s.root}>
          <Paper className={s.player}>
            <VideoPlayer {...videoJsOptions} />
            <Paper elevation={0} className={s.videoMeta}>
              <Typography variant="headline">{episodeTitle}</Typography>
            </Paper>
          </Paper>
          <EpisodeDoc doc={markdown} />
        </div>
      </div>
    )
  }
}

Episode.propTypes = {
  episodeItem: PropTypes.object.isRequired,
  clearOnEpisodePage: PropTypes.func.isRequired,
  setOnEpisodePage: PropTypes.func.isRequired,
  openDrawer: PropTypes.func.isRequired,
  episodeTitle: PropTypes.string.isRequired
}

export default compose(
  withStyles(styles),
  withWidth()
)(Episode)
