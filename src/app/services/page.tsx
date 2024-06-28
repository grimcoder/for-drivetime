'use client'

import { useEffect, useState } from 'react';
import axios from 'axios';


interface Service {
  id: string;
  name: string;
  duration: number;
}

const ServicesPage = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [appointments, setAppointments] = useState<any[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await axios.get('/api/services');
      setServices(response.data);
    };

    fetchServices();
  }, []);

  const fetchAppointments = async (serviceId: string) => {
    const response = await axios.get(`/api/appointments?serviceId=${serviceId}`);
    setAppointments(response.data);
    setSelectedService(serviceId);
  };

  return (
    <div className="p-5">
      <h1 className="text-36px font-bold text-customBlue mb-5 text-center">
        Select a Service
      </h1>
      <ul className="list-none p-0">
        {services.map((service) => (
          <div key={service.id} className='flex-col items-center m-[5px] p-[15px]  shadow justify-center border border-gray-300 rounded cursor-pointer 
            '><li
            key={service.id}
            className="mb-5 p-5 flex items-center justify-between "
            onClick={() => fetchAppointments(service.id)}
          >
            <img className='w-[109px]' src={`${service.id}.png`} />
            <h2 className="text-[22px] text-customGrey font-bold">{service.name}</h2>

            {selectedService === service.id &&   <img className='w-[24px]' src={`uparrow.png`} />
             }
            {selectedService !== service.id &&   <img className='w-[24px]' src={`downarrow.png`} />
             }
          </li>
            {selectedService === service.id && (
              <div>
                <hr className='bg-black border border-black h-[1px]'></hr>                
                <ul className="list-none pl-5 mt-2">
                  <li className='text-14px text-black'>Available appointments</li>
                  {appointments.map((appointment) => (
                    <li
                      key={appointment.id}
                      className="flex items-center  py-2 "
                    >
                      <input type='radio' name='service' 
                        className="relative 
                        mr-1 mt-0.5 w-4 h-4 
                         rounded-full border-2 border-solid 
                        border-customBlue before:pointer-events-none 
                        before:absolute before:h-4 before:w-4 before:scale-0"
                        >
                      </input>

                      <span className='text-[12px]  text-customBlue'>
                        {appointment.date} {appointment.time}
                      </span>

                    </li>
                  ))}
                </ul>
                <button className="bg-customBlue w-[118px] h-[38px]  
                m-[10px] text-white px-3 py-1 
                rounded hover:bg-blue-700">

                        <div className='text-12px font-bold'>Book Now</div>

                      </button>
              </div>
            )}</div>
        ))}
      </ul>
    </div>
  );
};

export default ServicesPage;
