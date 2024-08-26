import "./clock.scss"

const Clock = ({current_time}) => {
    
    return (
    <div className='clock-cont'>
        <div className="clock-body">
            <span>{current_time}</span>
        </div>
    </div>
  )
}

export default Clock;