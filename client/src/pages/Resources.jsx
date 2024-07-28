import React from 'react';
import doctor1 from '../assets/DOCTORS IMAGES/DOCTOR 1.jpg';
import doctor2 from '../assets/DOCTORS IMAGES/DOCTOR 2.jpg';
import doctor3 from '../assets/DOCTORS IMAGES/DOCTOR 3.jpg';
import doctor4 from '../assets/DOCTORS IMAGES/DOCTOR 4.jpg';
import doctor5 from '../assets/DOCTORS IMAGES/DOCTOR 5.png';
import doctor6 from '../assets/DOCTORS IMAGES/DOCTOR 6.jpg';
import doctor7 from '../assets/DOCTORS IMAGES/DOCTOR 7.jpeg';
import doctor8 from '../assets/DOCTORS IMAGES/DOCTOR 8.jpg';
import doctor9 from '../assets/DOCTORS IMAGES/DOCTOR 9.jpg';
import doctor10 from '../assets/DOCTORS IMAGES/DOCTOR 10.jpg';
import doctor11 from '../assets/DOCTORS IMAGES/DOCTOR 11.jpg';
import doctor12 from '../assets/DOCTORS IMAGES/DOCTOR 12.jpg';

// DoctorCard Component
const DoctorCard = ({ name, image, link }) => (
    <div className="doctor-card p-4 border border-gray-200 rounded-md shadow-md">
      <img 
        src={image} 
        alt={name} 
        className="max-w-full max-h-40 object-cover rounded-md mx-auto" 
      />
      <h3 className="mt-2 text-lg font-semibold text-gray-800">{name}</h3>
      <a 
        href={link} 
        className="text-blue-500 mt-2 inline-block" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        View Profile
      </a>
    </div>
  );
  
  // Main Resource Component
  const Resource = () => {
    const doctors = [
      { name: 'Dr. Gourav Gupta', image: doctor1, link: 'https://g.co/kgs/hNZcmpb' },
      { name: 'Dinika Anand', image: doctor2, link: 'https://www.blkmaxhospital.com/doctor/dinika-anand' },
      { name: 'Vishal Chhabra', image: doctor3, link: 'https://www.practo.com/delhi/doctor/dr-vishal-chhabra-psychiatrist ' },
      { name: 'Dinesh Ahmad', image: doctor4, link: 'https://www.maxhealthcare.in/doctor/dr-danish-ahmed ' },
      { name: 'Mrugesh Vaishnav', image: doctor5, link: 'https://drmrugeshvaishnav.com/ ' },
      { name: 'Komal Manshani', image: doctor6, link: 'https://www.maxhealthcare.in/doctor/dr-komal-manshani ' },
      { name: 'Vasantha Jayaraman', image: doctor7, link: 'https://www.practo.com/gurgaon/doctor/dr-vipul-rastogi-psychiatrist ' },
      { name: 'Vipul Rastogi', image: doctor8, link: 'https://example.com/doctor8' },
      { name: 'Sameer Malhotra', image: doctor9, link: 'https://www.maxhealthcare.in/doctor/dr-sameer-malhotra ' },
      { name: 'Prerna Khana', image: doctor10, link: 'https://www.maxhealthcare.in/doctor/dr-prerna-khanna ' },
      { name: 'Rajkumar Shrivastava', image: doctor11, link: 'https://www.maxhealthcare.in/doctor/dr-raj-kumar-srivastava ' },
      { name: 'Anandi Lal', image: doctor12, link: 'https://www.maxhealthcare.in/doctor/dr-anandi-lal ' },
    ];
  
    return (
      <div className="resource-container max-w-4xl mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Doctors List</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {doctors.map((doctor, index) => (
              <DoctorCard key={index} name={doctor.name} image={doctor.image} link={doctor.link} />
            ))}
          </div>
        </section>
      </div>
    );
  };
  
  export default Resource;