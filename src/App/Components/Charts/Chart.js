import React from 'react';
import {BarChart, Bar, XAxis, YAxis, Label, ResponsiveContainer, Tooltip} from 'recharts';
import Title from './Title';


export default function Chart({data, dataKey, title}) {
    return (
        <React.Fragment>
            <Title>{title}</Title>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24,
                    }}>
                    <XAxis dataKey={dataKey}/>
                    <YAxis>
                        <Label angle={270} position="left" style={{textAnchor: 'middle'}}>
                            Average score
                        </Label>
                    </YAxis>
                    <Tooltip/>
                    <Bar type="monotone" dataKey="score" fill="#556CD6"/>
                </BarChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}
