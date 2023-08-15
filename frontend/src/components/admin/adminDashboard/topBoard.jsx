import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'; 
import { faChartArea, faCrown, faHeart, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

const TopBoard = () => {
    const [salesctx, setSalesCtx] = useState()

    useEffect(() => {
       setSalesCtx({
                labels: [1, 2, 3, 4, 5, 6, 7, 8],
                datasets: [{
                    label: 'Sales',
                    data: [0, 7, 4, 10, 15, 12, 20, 23],
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        },
                    },
                    backgroundColor: [
                        'rgba(255, 255, 232, 0.1)'
                    ],
                    borderColor: [
                        'rgba(99, 132, 255, 0.3)'
                    ],
                    borderWidth: 2,
                    fill: {
                        above: 'rgba(200, 200, 255, 0.2)',   // Area will be red above the origin
                        below: 'rgb(255, 255, 255, 0.1)'    // And blue below the origin
                    },
                    tension: 0.4
                },{
                    label: 'Revenue',
                    data: [0, 9, 7, 12, 14, 10, 20, 10],
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        },
                    },
                    backgroundColor: [
                        'rgba(235, 232, 235, 0.1)'
                    ],
                    borderColor: [
                        'rgba(230, 230, 99, 0.6)'
                    ],
                    borderWidth: 2,
                    fill: {
                        target: 'origin',
                        above: 'rgba(255, 255, 200, 0.4)',   // Area will be red above the origin
                        below: 'rgb(255, 255, 255, 0.1)'    // And blue below the origin
                    },
                    tension: 0.4
                }]
       })

    }, [setSalesCtx])

    return (
        <div className="topBoard">
            <div className="side-pane">
                <div className="sales">
                    <p>Overwiew of Latest Month:</p>
                </div>
                <div className="sales">
                    <h2>$3468.96</h2>
                    <p>Current Month Earnings</p>
                </div>
                <div className="sales">
                    <h2>82</h2>
                    <p>Current Month Sales</p>
                </div>
                <button>Last Month Summary</button>
            </div>
               <div className="sales-chart">  
               {
                   (salesctx !== undefined) ?
                    <Line data={salesctx} options={{ maintainAspectRatio: false }} />
                    :
                    ""
               }  
            </div>
        
            <div className="bottom-pane">
                <div className="sales wallet">
                    <FontAwesomeIcon icon={faCrown}/>
                    <div className="texts">
                        <p>Wallet Balance</p>
                        <h3>$4,567.53</h3>
                    </div>
                </div>
                <div className="sales referral">
                    <FontAwesomeIcon icon={faHeart}/>
                    <div className="texts">
                        <p>Referral Earnings</p>
                        <h3>$1698.53</h3>
                    </div>
                </div>
                <div className="sales estimate">
                    <FontAwesomeIcon icon={faMoneyBill}/>
                    <div className="texts">
                        <p>Estimate Sales</p>
                        <h3>$2,851.53</h3>
                    </div>
                </div>
                <div className="sales earnings">
                    <FontAwesomeIcon icon={faChartArea}/>
                    <div className="texts">
                        <p>Earnings</p>
                        <h3>$52,567.53</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBoard;