import { ResponsiveBar } from '@nivo/bar'
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import {useState} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        display: 'flex',
      },
    drawer: {
      '& .MuiDrawer-paper':{
        height: 200
    },
    card: {
        minWidth: 275,
        display: 'block',
        width: '30vw',
        transitionDuration: '0.3s',
        height: 'auto',
        background:"blue"
    },
    }
  });

const data = [
    {
      "day": "Sun",
      "country": "AD",
      "hot dog": 31,
      "hot dogColor": "hsl(139, 70%, 50%)",
      "burger": 110,
      "burgerColor": "hsl(249, 70%, 50%)",
      "sandwich": 143,
      "sandwichColor": "hsl(163, 70%, 50%)",
      "kebab": 53,
      "kebabColor": "hsl(5, 70%, 50%)",
      "fries": 4,
      "friesColor": "hsl(88, 70%, 50%)",
      "donut": 88,
      "donutColor": "hsl(3, 70%, 50%)"
    },
    {
      "day": "Mon",
      "country": "AE",
      "hot dog": 169,
      "hot dogColor": "hsl(63, 70%, 50%)",
      "burger": 13,
      "burgerColor": "hsl(266, 70%, 50%)",
      "sandwich": 11,
      "sandwichColor": "hsl(312, 70%, 50%)",
      "kebab": 128,
      "kebabColor": "hsl(319, 70%, 50%)",
      "fries": 45,
      "friesColor": "hsl(29, 70%, 50%)",
      "donut": 19,
      "donutColor": "hsl(292, 70%, 50%)"
    },
    {
      "day": "Two",
      "country": "AF",
      "hot dog": 95,
      "hot dogColor": "hsl(87, 70%, 50%)",
      "burger": 7,
      "burgerColor": "hsl(75, 70%, 50%)",
      "sandwich": 29,
      "sandwichColor": "hsl(135, 70%, 50%)",
      "kebab": 194,
      "kebabColor": "hsl(305, 70%, 50%)",
      "fries": 55,
      "friesColor": "hsl(59, 70%, 50%)",
      "donut": 86,
      "donutColor": "hsl(294, 70%, 50%)"
    },
    {
      "day": "Wed",
      "country": "AG",
      "hot dog": 156,
      "hot dogColor": "hsl(1, 70%, 50%)",
      "burger": 7,
      "burgerColor": "hsl(112, 70%, 50%)",
      "sandwich": 113,
      "sandwichColor": "hsl(346, 70%, 50%)",
      "kebab": 2,
      "kebabColor": "hsl(51, 70%, 50%)",
      "fries": 98,
      "friesColor": "hsl(82, 70%, 50%)",
      "donut": 52,
      "donutColor": "hsl(116, 70%, 50%)"
    },
    {
      "day": "Thu",
      "country": "AI",
      "hot dog": 150,
      "hot dogColor": "hsl(244, 70%, 50%)",
      "burger": 140,
      "burgerColor": "hsl(60, 70%, 50%)",
      "sandwich": 65,
      "sandwichColor": "hsl(16, 70%, 50%)",
      "kebab": 17,
      "kebabColor": "hsl(201, 70%, 50%)",
      "fries": 143,
      "friesColor": "hsl(20, 70%, 50%)",
      "donut": 68,
      "donutColor": "hsl(308, 70%, 50%)"
    },
    {
      "day": "Fri",
      "country": "AL",
      "hot dog": 134,
      "hot dogColor": "hsl(92, 70%, 50%)",
      "burger": 113,
      "burgerColor": "hsl(167, 70%, 50%)",
      "sandwich": 34,
      "sandwichColor": "hsl(332, 70%, 50%)",
      "kebab": 61,
      "kebabColor": "hsl(67, 70%, 50%)",
      "fries": 187,
      "friesColor": "hsl(236, 70%, 50%)",
      "donut": 40,
      "donutColor": "hsl(126, 70%, 50%)"
    },
    {
      "day": "Sat",
      "country": "AM",
      "hot dog": 133,
      "hot dogColor": "hsl(312, 70%, 50%)",
      "burger": 108,
      "burgerColor": "hsl(99, 70%, 50%)",
      "sandwich": 37,
      "sandwichColor": "hsl(296, 70%, 50%)",
      "kebab": 50,
      "kebabColor": "hsl(273, 70%, 50%)",
      "fries": 33,
      "friesColor": "hsl(347, 70%, 50%)",
      "donut": 159,
      "donutColor": "hsl(90, 70%, 50%)"
    }
  ]


// const MyResponsiveBar = () => (
function MyResponsiveBar() {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [drawerContent, setDrawerContent] = useState('')
    const handleClick = (data) => {
        setDrawerContent(data)
        setDrawerOpen(true)
        console.log(data)
    }

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setDrawerOpen(open);
        setDrawerContent('')
      };
    
    return (
        <>
        <Card className={classes.card}style={{width:"100%", height:"100%"}}>
        <ResponsiveBar
            data={data}
            keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
            indexBy="day"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'set3' }}
            // colors={({ id, data }) => data[`${id}Color`]}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: '#38bcb2',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#eed312',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                // {
                //     match: {
                //         id: 'fries'
                //     },
                //     id: 'dots'
                // },
                // {
                //     match: {
                //         id: 'sandwich'
                //     },
                //     id: 'lines'
                // }
            ]}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', '1.6' ] ] }}
            axisTop={{
                tickSize: 0,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'country',
                legendPosition: 'middle',
                legendOffset: 32,
            }}
            axisRight={null}
            axisBottom={null}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'food',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            // reverse
            theme={{
                // fontSize: 20,
                axis: {
                    ticks: {
                        text: {
                            // fontSize: 20,
                        },      
                },
                
            }}}
            onClick={handleClick}
        /></Card>
        <Drawer className={classes.drawer} 
                ModalProps={{BackdropProps:{invisible:true}}} 
                anchor={'right'} 
                open={drawerOpen}
                onClose={toggleDrawer(false)}>
            <Card className={classes.card} elevation={0}>
                <CardContent>
                    {Object.keys(drawerContent).map((value) => (
                        <Typography>
                            {`${value}: ${drawerContent[value]}`}
                        </Typography>
                    ))}
                </CardContent>
            </Card>
        </Drawer>
        </>
    )
}
export default MyResponsiveBar;