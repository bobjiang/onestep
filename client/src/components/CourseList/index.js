import React, { Component } from 'react'
import CourseCard from '../common/CourseCard'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  root: {
    width: '100%',
    margin: '0 auto'
  },
  list: {
    // border: '3px solid yellow'
  },
  gridItem: {},
  section: {
    marginBottom: theme.spacing.unit * 2,
    textAlign: 'center'
  }
})

class CourseList extends Component {
  componentDidMount() {
    // this.props.fetchCoursesIfNeeded()
  }

  render() {
    const { courses, classes: s, goto } = this.props
    let courseList = courses.map(item => (
      <Grid
        className={s.gridItem}
        key={item.uid}
        item
        xs={12}
        sm={6}
        lg={4}
        xl={4}
      >
        <CourseCard uid={item.uid} title={item.title} goto={goto} />
      </Grid>
    ))

    return (
      <div className={s.root}>
        <div className={s.section}>
          <Typography variant="headline">最新发布</Typography>
        </div>

        <Grid container spacing={32} className={s.list}>
          {courseList}
        </Grid>
      </div>
    )
  }
}

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  goto: PropTypes.func.isRequired
}

export default withStyles(styles)(CourseList)
