import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Eye from '../../assets/eye.png'
import './Addworkout.css'

const Addworkout = () => {
    return (
        <div>
            <Topbar />
            <div className="add-workout-container">
                <div className="card">
                    <div>
                        <div className="row">
                            <span>Workout Name</span>
                            <span>Upper Body Workout</span>
                        </div>
                        <div className="column">
                            <button>
                                <img src={Eye} alt="" />
                            </button>
                            <button>
                                <span>+</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addworkout
