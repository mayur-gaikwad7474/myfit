import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Eye from '../../assets/eye.png'
import './Addworkout.css'
import Exercise from '../../assets/exercise9.jpg'

const Addworkout = () => {
    return (
        <div>
            <Topbar />
            <div className="add-workout-container">
                <div className="card">
                    <div className='row-container'>
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


                    {/*bar section start*/}
                    <div className='bar-container'>
                        <span>Warm Up Exercise</span>
                        <span></span>
                    </div>

                    <div className='workout-info'>
                        <div className='row header' style={{color:'#676767'}}>
                          <div>Video</div>
                          <div>Name</div>
                          <div></div>
                          <div></div>
                          <div>Sets</div>
                          <div>Calorie Burn</div>
                        </div>

                        <div className='row'>
                          <div><img src={Exercise} alt='' /></div>
                          <div><span>Name: </span> Jumping Jack</div>
                          <div>Time</div>
                          <div>1 Min</div>
                          <div><span>Sets: </span> 03</div>
                          <div><span>Calorie Burn: </span> 25 Cal</div>
                        </div>

                        <div className='row'>
                          <div><img src={Exercise} alt='' /></div>
                          <div><span>Name: </span> Abs Crunch</div>
                          <div>Reps</div>
                          <div>5 Min</div>
                          <div><span>Sets: </span> 03</div>
                          <div><span>Calorie Burn: </span> 25 Cal</div>
                        </div>

                        <div className='row'>
                          <div><img src={Exercise} alt='' /></div>
                          <div><span>Name: </span> 3D Lunge</div>
                          <div>Reps</div>
                          <div>3 Min</div>
                          <div><span>Sets: </span> 03</div>
                          <div><span>Calorie Burn: </span> 25 Cal</div>
                        </div>

                        <div className='add-exercise-button'>
                            <button>+</button>
                            <span>Add Exercise</span>
                        </div>
                    </div>

                    <div className='bar-container-rest'>
                        <span>Rest : 5 Min</span>
                    </div>

                    <div className='bar-container'>
                        <span>Circuit 1 | 3 Rounds</span>
                        <span></span>
                    </div>

                    <div className='rounds'>
                        <span>No of Rounds</span>
                        <span>3</span>
                    </div>

                    <div className='workout-info'>
                        <div className='row header' style={{color:'#676767'}}>
                          <div>Video</div>
                          <div>Name</div>
                          <div></div>
                          <div></div>
                          <div>Sets</div>
                          <div>Calorie Burn</div>
                        </div>

                        <div className='row'>
                          <div><img src={Exercise} alt='' /></div>
                          <div><span>Name: </span> Jumping Jack</div>
                          <div>Time</div>
                          <div>1 Min</div>
                          <div><span>Sets: </span> 03</div>
                          <div><span>Calorie Burn: </span> 25 Cal</div>
                        </div>

                        <div className='row'>
                          <div><img src={Exercise} alt='' /></div>
                          <div><span>Name: </span> Abs Crunch</div>
                          <div>Reps</div>
                          <div>5 Min</div>
                          <div><span>Sets: </span> 03</div>
                          <div><span>Calorie Burn: </span> 25 Cal</div>
                        </div>

                        <div className='add-exercise-button'>
                            <button>+</button>
                            <span>Add Exercise</span>
                        </div>
                    </div>

                    <div className='bar-container'>
                        <span>Cool Down Exercise</span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addworkout
