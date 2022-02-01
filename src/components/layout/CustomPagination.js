import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { Grid, Hidden, makeStyles } from '@material-ui/core';

function CustomPagination(props) {
    const handleEvent = (event, value) => {
        props.setPage(value - 1);
    }
    const useStyles= makeStyles(()=>({
        pagination:{
            "& .MuiPaginationItem-root":{
            color: "white",
            outlineColor: "white",
            },
            '& .Mui-selected': {
                backgroundColor: 'transparent',
                color:'#0096FF',
               },
        },
       
    }))
    const classes= useStyles();

    return (
        <Grid container justify="space-around">
            <Hidden xsDown>
                <Pagination 
                    count={10} 
                    page={props.page + 1} 
                    onChange={handleEvent} 
                    variant="outlined" 
                    color="primary" 
                    showFirstButton 
                    showLastButton 
                    boundaryCount={3} 
                    classes= {{ul: classes.pagination}}
                    
                    />
            </Hidden>
            <Hidden smUp>
                <Pagination  
                    classes= {{ul: classes.pagination}}
                    size="small" 
                    count={10} 
                    page={props.page + 1} 
                    onChange={handleEvent} 
                    variant="outlined" 
                    color="primary" 
                    boundaryCount={2} 
                />
            </Hidden>
        </Grid>
    )
}

export default CustomPagination;
