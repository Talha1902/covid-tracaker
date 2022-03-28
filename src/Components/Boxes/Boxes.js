import React from "react"
import { Card, Grid, Typography, CardContent } from "@mui/material"
import CountUp from 'react-countup';


const Boxes = ({ data:{confirmed, recovered, deaths, lastUpdate}})=>{
    if(!confirmed){
        return 'Loading...'
    }
    return(
        <>
        <div>

        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid  md={3} xs={12} >

        <Card className="Boxe1">
            <CardContent className="content">
                <Typography variant="h5" color="textSecondary">
                    INFECTED
                </Typography>
                <Typography variant="h6" >
                <CountUp start={0} end={confirmed.value} duration={2} separator="," />
                </Typography>
                <Typography color="#9b9696" variant="body2">
                {new Date(lastUpdate).toString()}
                    </Typography>
                <Typography variant="h6">
                    Number of Active Cases of Covid-19
                    </Typography>
            </CardContent>
        </Card>
            </Grid>

        {/* card number 2 */}
        <Grid xs={12} md={3}>

        <Card className="Boxe2">
            <CardContent className="content">
                <Typography variant="h5" color="textSecondary">
                    RECOVERED
                </Typography>
                <Typography variant="h6">
                <CountUp start={0} end={recovered.value} duration={2} separator="," />
                </Typography>
                <Typography color="#9b9696" variant="body2">
                {new Date(lastUpdate).toString()}
                    </Typography>
                <Typography variant="h6">
                     Number of recoveries from Covid-19
                    </Typography>
            </CardContent>
        </Card>
        </Grid>

        {/* card number 3 */}
        <Grid xs={12} md={3}>

        <Card className="Boxe3">
            <CardContent className="content">
                <Typography variant="h5" color="textSecondary">
                    CONFIRMED
                </Typography>
                <Typography variant="h6">
                <CountUp start={0} end={deaths.value} duration={2} separator="," />
                </Typography>
                <Typography color="#9b9696" variant="body2">
                {new Date(lastUpdate).toString()}
                    </Typography>
                <Typography variant="h6">
                     Number of deaths caused by Covid-19
                    </Typography>
            </CardContent>
        </Card>
        </Grid>
        
        </Grid>

        </div>
        </>
    )
}

export default Boxes;