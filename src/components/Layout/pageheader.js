import React from 'react'
import PropTypes from 'prop-types'
import BackNav from '../custom/back';
import Grid from '../custom/Grid';

function PageHeader({showBack, title}) {
    return (
        <Grid container>
			<Grid item xs={3} sm={3} md={1} lg={1} xl={1}>
                {showBack && <BackNav />}
			</Grid>
			<Grid item xs={21} sm={21} md={23} lg={23} xl={23}>
				<h3 className="container-label">{title}</h3>
			</Grid>
		</Grid>
    )
}

PageHeader.propTypes = {
    showBack: PropTypes.bool,
    title: PropTypes.string,
}

export default PageHeader;

