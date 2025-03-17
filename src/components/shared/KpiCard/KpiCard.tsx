// KPI Card Component
import {Button, Card, CardContent, Typography} from "@mui/material";
import React from "react";

const KpiCard: React.FC<{ title: string; value: number; color: string }> = ({ title, value, color }) => (
    <Card className="kpi-card" style={{ backgroundColor: color }}>
        <CardContent>
            <Typography variant="h6" className="kpi-title">{title}</Typography>
            <Typography variant="h4" className="kpi-value">{value}</Typography>
            <Button size="small" style={{ color: "white" }}>More Info</Button>
        </CardContent>
    </Card>
);

export default KpiCard;