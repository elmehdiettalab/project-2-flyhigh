import React , {useState, useEffect , useRef} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import calendar from '../assets/booking.png'
import prev from '../assets/return.png'
import next from '../assets/next.png'
import hotel1 from '../assets/hotel.jpg'; 
import hotel2 from '../assets/hotel2.jpg'; 
import gsap from 'gsap'; 
import '../scss/hotel.scss'
const Hotel = () => {
    const [Date,setDatePicker] = useState(null); 
    const [Date2,setDatePicker2] = useState(null); 
    const imgs = [hotel1, hotel2]; 
    const urls = ["https://goo.gl/maps/jKBJfZ28fZ8Abdc26", "https://goo.gl/maps/7juQJfsNHAVKQo6j9"]
    const txts = ["Tulip", "Marjana"]; 
    let carossel1 = useRef(null) ; 
    let carossel2 = useRef(null) ; 
    const [cpt , setCpt] = useState(0); 

    const onPrev = (e) => {
       setCpt((cpt - 1 + imgs.length) % imgs.length); 
    }
    
    const onNext = (e) => {
        setCpt((cpt + 1) % txts.length ); 
    }
    
    return (
        <div className="tab-2">
            <select  >
                <option value="2">02 people </option>
                <option value="3">03 </option>
                <option value="4">04 </option>
                <option value="5">05 </option>
                <option value="6">06 </option>
                <option value="7">07 </option>
                <option value="8">08 </option>
                <option value="9">09 </option>

            </select>

            <div className="information">
                <div className="hotel-info">
                    <h3>{txts[cpt]}</h3>
                    <p><a href={urls[cpt]} target="_blank">View in Map</a></p>
                </div>

                <div className="hotel-carossel">
                    <img src={imgs[cpt]} alt="" ref={el => {carossel1 = el}} />
                    {/* <img className="inactive" src={imgs[count]} alt="" ref={el => {carossel2 = el}} /> */}
                    <img src={prev} alt="" onClick={e => onPrev(e)}/>
                    <img src={next} alt="" onClick={e => onNext(e)}/>
                </div>

                <div className="card-date">
                    <span>Checkin</span>
                    <DatePicker selected={Date} onChange={date => setDatePicker(date)} className="datepick" />
                    <img src={calendar} alt="" />
                </div>
                <div className="card-date">
                    <span>Checkout</span>
                    <DatePicker selected={Date2} onChange={date => setDatePicker2(date)} className="datepick" />
                    <img src={calendar} alt="" />
                </div>
            </div>


        </div>
    )
}

export default Hotel
