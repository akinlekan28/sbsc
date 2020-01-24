import React from 'react'
import pending from '../assets/pending.png'

export default function PendingBudget() {
    return (
        <div className="pending-container">
            <div className="card-flex card-border">
                <img src={pending} alt="pending.png" className="budget-icon" /> 
                <p className="budget-name">Pending Budget Reassignment Status</p>
            </div>
            <div className="budget-count-wrapper">
                <div className="budget-count">
                    <p className="text-center">200</p>
                </div>
            </div>
        </div>
    )
}
