import React, { useState } from 'react'
import { useForm } from "react-hook-form"

function PatientDetails() {
    const [isOtherDoctor, setIsOtherDoctor] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    // const onSubmit = (data) => console.log(data)

    const handleDoctorChange = (event) => {
        if (event.target.value === 'other') {
            setIsOtherDoctor(true); // Show input field for 'Other'
        } else {
            setIsOtherDoctor(false); // Hide input field if any other option is selected
        }
    };

    // Sample doctor options
    const doctorOptions = [
        { label: 'Dr. Smith', value: 'dr_smith' },
        { label: 'Dr. Johnson', value: 'dr_johnson' },
        // Add more doctors here
    ];

    const onSubmit = async (data) => {

        console.log(data)

        const patientData = {
            name: data.patientName,
            age: data.age,
            gender: data.Gender,
            mobile: data.phoneNumber,
            referred_by: data.referredBy === 'other' ? data.referredByOther : data.referredBy,
            date_of_collection: data.collectedDate,
            date_of_reported: data.reportedDate,
            accession_number: data.accessionNo,
        };

        try {
            const response = await fetch('http://127.0.0.1:5000/api/patinetdata', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(patientData),
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.message);
            } else {
                alert(`Error: ${result.message}`);
            }
        } catch (error) {
            console.error("Error submitting form data:", error);
            alert("There was an error submitting the data.");
        }
    };


    return (
        <div className="max-w-4xl mx-auto p-6 mt-2 bg-white shadow-md rounded-md">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className='flex flex-wrap min-h-96'>
                        <div className="space-y-6 flex-1 m-2 min-w-full md:min-w-56">
                            {/* First Name */}
                            <div>
                                <label htmlFor="patientName" className="block text-gray-700 font-semibold">First Name:</label>
                                <input
                                    type="text"
                                    id="patientName"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    {...register("patientName", { required: "First name is required" })}
                                />
                                {errors.patientName && <p className="text-red-500 text-sm mt-1">{errors.patientName.message}</p>}
                            </div>
                            {/* Age */}
                            <div>
                                <label htmlFor="age" className="block text-gray-700 font-semibold">Age:</label>
                                <input
                                    type="number"
                                    id="age"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    {...register("age", { required: "Age is required" })}
                                />
                                {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>}
                            </div>

                            {/* Gender */}
                            <div>
                                <label className="block text-gray-700 font-semibold">Gender:</label>
                                <div className="flex space-x-6">
                                    {/* Male Option */}
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            id="male"
                                            value="male"
                                            className="form-radio text-blue-500 focus:ring-blue-500"
                                            {...register("Gender", { required: "Gender is required" })}
                                        />
                                        <label htmlFor="male" className="ml-2 text-gray-700">Male</label>
                                    </div>

                                    {/* Female Option */}
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            id="female"
                                            value="female"
                                            className="form-radio text-pink-500 focus:ring-pink-500"
                                            {...register("Gender", { required: "Gender is required" })}
                                        />
                                        <label htmlFor="female" className="ml-2 text-gray-700">Female</label>
                                    </div>
                                </div>
                                {errors.Gender && <p className="text-red-500 text-sm mt-1">{errors.Gender.message}</p>}
                            </div>


                            {/* Phone Number */}
                            <div>
                                <label htmlFor="phoneNumber" className="block text-gray-700 font-semibold">Phone Number:</label>
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    {...register("phoneNumber", { required: "Phone number is required" })}
                                />
                                {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
                            </div>

                            {/* Medical History */}
                            {/* <div>
                        <label htmlFor="medicalHistory" className="block text-gray-700 font-semibold">Medical History:</label>
                        <textarea
                            id="medicalHistory"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            {...register("medicalHistory", { required: "Medical history is required" })}
                        />
                        {errors.medicalHistory && <p className="text-red-500 text-sm mt-1">{errors.medicalHistory.message}</p>}
                    </div> */}
                        </div>

                        <div className=' min-w-full  flex-1 min-h-1 border-t-2 border-black md:border-l-2 md:border-t-0 md:min-h-36 md:max-w-1 md:min-w-0'></div>

                        <div className="space-y-6 flex-1 m-2 min-w-48">

                            {/* Referred By */}
                            <div>
                                <label htmlFor="referredBy" className="block text-gray-700 font-semibold">Referred By:</label>
                                <select
                                    id="referredBy"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    {...register("referredBy", { required: "Referred by doctor is required" })}
                                    onChange={handleDoctorChange}
                                >
                                    <option value="">Select a doctor</option>
                                    {doctorOptions.map((doctor) => (
                                        <option key={doctor.value} value={doctor.value}>
                                            {doctor.label}
                                        </option>
                                    ))}
                                    <option value="other">Other</option>
                                </select>
                                {isOtherDoctor && (
                                    <input
                                        type="text"
                                        id="referredByOther"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Type doctor's name"
                                        {...register("referredBy", { required: "Referred by doctor is required" })}
                                    />
                                )}
                                {errors.referredBy && <p className="text-red-500 text-sm mt-1">{errors.referredBy.message}</p>}
                            </div>

                            {/* Reported Date */}
                            <div>
                                <label htmlFor="reportedDate" className="block text-gray-700 font-semibold">Reported Date:</label>
                                <input
                                    type="date"
                                    id="reportedDate"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    {...register("reportedDate", { required: "Reported date is required" })}
                                />
                                {errors.reportedDate && <p className="text-red-500 text-sm mt-1">{errors.reportedDate.message}</p>}
                            </div>

                            {/* Collected Date */}
                            <div>
                                <label htmlFor="collectedDate" className="block text-gray-700 font-semibold">Collected Date:</label>
                                <input
                                    type="date"
                                    id="collectedDate"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    {...register("collectedDate", { required: "Collected date is required" })}
                                />
                                {errors.collectedDate && <p className="text-red-500 text-sm mt-1">{errors.collectedDate.message}</p>}
                            </div>

                            {/* Accession Number */}
                            <div>
                                <label htmlFor="accessionNo" className="block text-gray-700 font-semibold">Accession No.:</label>
                                <input
                                    type="text"
                                    id="accessionNo"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    {...register("accessionNo", { required: "Accession number is required" })}
                                />
                                {errors.accessionNo && <p className="text-red-500 text-sm mt-1">{errors.accessionNo.message}</p>}
                            </div>
                        </div>

                        {/* Medical History */}
                        {/* <div>
                        <label htmlFor="medicalHistory" className="block text-gray-700 font-semibold">Medical History:</label>
                        <textarea
                            id="medicalHistory"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            {...register("medicalHistory", { required: "Medical history is required" })}
                        />
                        {errors.medicalHistory && <p className="text-red-500 text-sm mt-1">{errors.medicalHistory.message}</p>}
                    </div> */}
                    </div>
                </div>
                {/* Submit Button */}
                <div className='flex justify-between m-2'>
                    <div>
                        <button type="submit" className="w-24 py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            Submit
                        </button>
                    </div>
                    <div>
                        <button type="submit" className="w-24 py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            Submit
                        </button>
                    </div>
                    <div>
                        <button type="submit" className="w-24 py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default PatientDetails
