import './clients.css'
import Slider from '../cards/slider'

function clients() {
  return (
    <div className='clients-body'>
      <div className='clients-heading1'>Clients<span>Our Clients</span></div>
      <div className='clients-list'>
        <Slider/>
      </div>
    </div>

  )
}

export default clients
