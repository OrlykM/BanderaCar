import React, { useState, useEffect, useCallbac, useRef } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import './carrent.css'

const Index = () => {
    const params = useParams()
    const [carData, setCarData] = useState();
    const [counter, setCounter] = useState(0);
    const dataFetchedRef = useRef(false);
    const navigate = useNavigate();

    // info about car
    let result = null;
    const fetchData = () => {
        fetch(`http://127.0.0.1:8000/car/${params.carId}/get_one/`,
        {
            method: 'GET',
            headers:
            {
                "Content-Type": "application/json;charset=utf-8"
            },
        }).then(async(response) => {
            if (response.ok)
            {
                result = await response.json();
                setCarData(result);
            };});
        console.log('Fetching data...');
    }
        
    useEffect(() => {
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
        fetchData();
    },[])

    // rent button
    const handleForSubmit =  (event) =>
    {
        event.preventDefault();
            fetch(`http://127.0.0.1:8000/user/order/new/91/${params.carId}/`,
                    {
                        method: 'POST',
                        headers:
                            {
                                "Content-Type": "application/json;charset=utf-8"
                            },
                    }).then(async(response) => {
                   if (response.ok)
                   {
                        const result_1 = await response.json();
                        console.log(result_1);
                   };});
    }
    
    return (

        <section className="rent vh-100 pt-5" id="rent">
            <div className='container'>
                <div className="row pt-5">
                    <div className="col-sm">
                        <img className="img-fluid"
                             src="https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/News/2022/720x720_P90433010_highRes_bmw-ix5-hydrogen-08-.jpg.grp-transform/small/720x720_P90433010_highRes_bmw-ix5-hydrogen-08-.jpg"
                             width={500} height={500} alt=''/>
                    </div>
                    {/*Марка, модель, рік випуску, тип кузову, клас, реєстраційний номер*/}
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-uppercase text-center">{carData?.make}</h5>
                                <h5 className="card-title text-uppercase text-center">{carData?.model}</h5>
                                <h6 className="card-price text-center">$2<span className="period">/min</span></h6>
                                <hr/>
                                <ul className="fa-ul">
                                <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>{carData?.category_type}</strong>
                                    </li>
                                    <li><span className="fa-li"><i className="fas fa-check"></i></span>{carData?.fuel_type}
                                    </li>
                                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Seats {carData?.number_of_seats}
                                    </li>
                                    <li><span className="fa-li"><i className="fas fa-check"></i></span>{carData?.registration_number}
                                    </li>
                                    <li><span className="fa-li"><i className="fas fa-check"></i></span>{carData?.body_type}
                                    </li>
                                </ul>
                                <div className="d-grid ">
                                    <button onClick={handleForSubmit} type="submit" className="btn btn text-uppercase abc">
                                        Rent
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index;