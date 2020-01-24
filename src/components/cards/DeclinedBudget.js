import React from 'react'
import declined from '../assets/declined.png'

export default function DeclinedBudget() {
    return (
        <div className="pending-container">
            <div className="card-flex card-border">
                <img src={declined} alt="declined.png" className="budget-icon" />
                <p className="budget-name">Declined Budget Reassignment Status</p>
            </div>
            <div className="budget-count-wrapper">
                <div className="budget-count">
                    <p className="text-center">372</p>
                </div>
            </div>
        </div>
    )
}
