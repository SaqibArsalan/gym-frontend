import {Box, Breadcrumbs, Button, Divider, Grid, Paper, Toolbar, Typography} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import ROUTES from "config/constants";
import {IStaffProps} from "../StaffPage/StaffPage.interface";
import {fetchStaffDetail} from "../../../redux/components/Staff/sources";
import {prepareRouteForNavigation} from "../../../utils/Route";
import StaffDetailConnector from "./StaffDetailConnector";
import {IStaffDetailProps} from "./StaffDetail.interface";


function StaffDetailComponent(props: IStaffDetailProps) {
    const [activeMembers, setActiveMembers] = useState<number | null>(null);
    const {staffDetail} = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        if (params.userId) {
            dispatch(fetchStaffDetail(params.userId));
        } else {
            // redirect to listing page
            const route = prepareRouteForNavigation(ROUTES.STAFF_LISTING);
            navigate(route, { replace: true });
        }
        return () => {
            // dispatch(actions.clearStaffState());
        };
    }, []);

    const StaffDetailSubHeader = ({staffName}: { staffName: string }) => (
        <Paper className="fleet-tour-sub-header" elevation={0} square>
            <Toolbar>
                <Box display="flex" alignItems="center" width="100%">
                    <Box flexGrow={1}>
                        <div role="presentation">
                            <Breadcrumbs
                                separator={<NavigateNextIcon fontSize="small"/>}
                                aria-label="breadcrumb"
                            >
                                <Typography>Staff</Typography>
                                <Typography>Staff Details</Typography>
                            </Breadcrumbs>
                        </div>
                        <Typography variant="h6" component="div">
                            {staffName.toUpperCase()}
                        </Typography>
                    </Box>
                    <Button variant="contained" color="primary" onClick={() => console.log("Edit Clicked")}>
                        Edit
                    </Button>
                </Box>
            </Toolbar>
        </Paper>
    );

    const StaffBasicInfo = ({ staffInfo }: { staffInfo: any }) => {
        const {userId, salary, hireDate} = staffInfo;
        const infoItems = [
            {title: "User ID", value: userId},
            {title: "Salary", value: salary},
            {title: "Hire Date", value: hireDate},
        ];

        return (
            <>
                {/* Basic Information */}
                <Paper className="fleet-info-container" variant="outlined" sx={{p: 2, mt: 2}}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        BASIC INFORMATION
                    </Typography>
                    <Divider sx={{mb: 2}}/>
                    <Grid container spacing={3} className="info-grid">
                        {infoItems.map((item: any, index: number) => (
                            <Grid key={`staff-info-${index}`} item xs={4}>
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

    return staffDetail ? (
        <>
            <StaffDetailSubHeader staffName={staffDetail.name}/>
            <Grid container rowSpacing={3} columnSpacing={3}>
                <Grid item xs={12}>
                    <StaffBasicInfo staffInfo={staffDetail} />
                </Grid>
            </Grid>
        </>
    ) : null
}

const StaffDetailsPage = StaffDetailConnector(StaffDetailComponent)
export default StaffDetailsPage;
