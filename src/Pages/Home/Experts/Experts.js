import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';
import './Experts.css'

const Experts = () => {
    const [experts, setExperts] = useState([]);

    useEffect(() => {
        fetch('experts.json')
            .then(res => res.json())
            .then(data => setExperts(data))
    }, [])

    return (
        <div id='experts'>
            <h4 className='text-center my-4 fw-bold text-dark'>Specialist</h4>
            <div className="experts-area">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;