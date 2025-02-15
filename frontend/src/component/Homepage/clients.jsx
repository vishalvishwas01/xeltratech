import './clients.css'
import architect from '../images/architect.png'
import aurora from '../images/aurora.png'
import connection from '../images/connection.png'
import domo from '../images/domo.png'
import marine from '../images/marine.png'
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
