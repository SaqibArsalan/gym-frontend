import {Box, Breadcrumbs, Button, Divider, Grid, Paper, Toolbar, Typography} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import ROUTES from "config/constants";
import {IStaffProps} from "../StaffPage/StaffPage.interface";
import {fetchStaffDetail} from "../../../redux/components/Staff/sources";
import {prepareRouteForNavigation} from "../../../utils/Route";
import UserDetailConnector from "./UserDetailConnector";
import {IUserDetailProps} from "./UserDetail.interface";
import {fetchUserDetail} from "../../../redux/components/User/sources";


function UserDetailComponent(props: IUserDetailProps) {
    const {userDetail} = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        if (params.userId) {
            dispatch(fetchUserDetail(params.userId));
        } else {
            // redirect to listing page
            const route = prepareRouteForNavigation(ROUTES.USER_LISTING);
            navigate(route, { replace: true });
        }
        return () => {
            // dispatch(actions.clearStaffState());
        };
    }, []);

    const UserDetailSubHeader = ({userName}: { userName: string }) => (
        <Paper className="user-sub-header" elevation={0} square>
            <Toolbar>
                <Box display="flex" alignItems="center" width="100%">
                    <Box flexGrow={1}>
                        <div role="presentation">
                            <Breadcrumbs
                                separator={<NavigateNextIcon fontSize="small"/>}
                                aria-label="breadcrumb"
                            >
                                <Typography>User</Typography>
                                <Typography>User Details</Typography>
                            </Breadcrumbs>
                        </div>
                        <Typography variant="h6" component="div">
                            {userName.toUpperCase()}
                        </Typography>
                    </Box>
                    <Button variant="contained" color="primary" onClick={() => console.log("Edit Clicked")}>
                        Edit
                    </Button>
                </Box>
            </Toolbar>
        </Paper>
    );

    const UserBasicInfo = ({ userInfo }: { userInfo: any }) => {
        const {firstName, lastName, email, phoneNumber} = userInfo;
        const infoItems = [
            {title: "First Name", value: firstName},
            {title: "Last Name", value: lastName},
            {title: "Email", value: email},
            {title: "Phone Number", value: phoneNumber},
        ];

        return (
            <>
                {/* Basic Information */}
                <Paper className="user-info-container" variant="outlined" sx={{p: 2, mt: 2}}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        BASIC INFORMATION
                    </Typography>
                    <Divider sx={{mb: 2}}/>
                    <Grid container spacing={3} className="info-grid">
                        {infoItems.map((item: any, index: number) => (
                            <Grid key={`user-info-${index}`} item xs={4}>
                                <Box display="flex" alignItems="center" gap={2} p={1}>
                                    {item.icon ? <img src={item.icon} alt=""/> : null}
                                    <Box>
                                        <Typography id="title" component="div" fontWeight="bold">
                                            {item.title}
                                        </Typography>
                                        <Typography id="value" component="div">{item.value}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </>
        );
    };

    return userDetail ? (
        <>
            <UserDetailSubHeader userName={userDetail.firstName}/>
            <Grid container rowSpacing={3} columnSpacing={3}>
                <Grid item xs={12}>
                    <UserBasicInfo userInfo={userDetail} />
                </Grid>
            </Grid>
        </>
    ) : null
}

const UserDetailsPage = UserDetailConnector(UserDetailComponent)
export default UserDetailsPage;
