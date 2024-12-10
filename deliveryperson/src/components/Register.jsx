import React, { useState } from 'react';
import axios from 'axios';
import './css/Register.css';
import './css/Button.css';
import logoImage from '../images/logo.jpg';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL, REACT_APP_GOOGLE_MAPS_API_KEY } from './Apiconfig';

const Register = () => {
    const navigate = useNavigate();
    const [driverName, setDriverName] = useState('');
    const [licenseNumber, setLicenseNumber] = useState('');
    const [bankAccountNumber, setBankAccountNumber] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [vehicleNumber, setVehicleNumber] = useState('');
    const [licensedoc, setLicensedoc] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(null);

    const handleRegisterClick = async () => {
        console.log({
            driverName,
            licenseNumber,
            bankAccountNumber,
            vehicleType,
            vehicleNumber,
            email,
            phone,
            password,
            licensedoc
        });

        try {
            const response = await axios.post(`${API_BASE_URL}Driver/register-driver`, {
                DriverName: driverName,
                DrivingLicenseNumber: licenseNumber,
                bankAccountNumber,
                VehicleType: vehicleType,
                VehicleNumber: vehicleNumber,
                LicenseDocument: licensedoc,
                DriverEmail: email,
                Phone: phone,
                Password: password
            });

            if (response.data) {
                alert('Driver registered successfully');
                navigate('/'); // Redirect to dashboard after successful registration
            } else {
                setError('Failed to register driver. Please try again.');
            }
        } catch (error) {
            setError('Error registering driver. Please check your details.');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="register-container">
                <div className="register-header text-center">
                    <img
                        src={logoImage} // Dynamic logo
                        alt="Admin Logo"
                        className="img-fluid"
                    />
                    <h3>WayToDine - Register Driver</h3>
                </div>
                <Form onSubmit={(e) => e.preventDefault()}>
                    {error && <p className="text-danger">{error}</p>}

                    {/* Driver Name */}
                    <FormGroup className="mb-3">
                        <Label for="driverName">
                            Driver Name <span className="text-danger">*</span>
                        </Label>
                        <Input
                            type="text"
                            id="driverName"
                            value={driverName}
                            onChange={(e) => setDriverName(e.target.value)}
                            placeholder="Enter driver name"
                        />
                    </FormGroup>

                    {/* License Number */}
                    <FormGroup className="mb-3">
                        <Label for="licenseNumber">
                            License Number <span className="text-danger">*</span>
                        </Label>
                        <Input
                            type="text"
                            id="licenseNumber"
                            value={licenseNumber}
                            onChange={(e) => setLicenseNumber(e.target.value)}
                            placeholder="Enter license number"
                        />
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <Label for="licenseNumber">
                            License Document <span className="text-danger">*</span>
                        </Label>
                        <Input
                            type="text"
                            id="licenseNumber"
                            value={licensedoc}
                            onChange={(e) => setLicensedoc(e.target.value)}
                            placeholder="Enter license Document"
                        />
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <Label for="licenseNumber">
                            Phone Number <span className="text-danger">*</span>
                        </Label>
                        <Input
                            type="text"
                            id="licenseNumber"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Enter Phone number"
                        />
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <Label for="licenseNumber">
                            Email <span className="text-danger">*</span>
                        </Label>
                        <Input
                            type="text"
                            id="licenseNumber"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Emailr"
                        />
                    </FormGroup>

                    <FormGroup className="mb-3">
                        <Label for="licenseNumber">
                            Password <span className="text-danger">*</span>
                        </Label>
                        <Input
                            type="text"
                            id="licenseNumber"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Password"
                        />
                    </FormGroup>

                    {/* Bank Account Number */}
                    <FormGroup className="mb-3">
                        <Label for="bankAccountNumber">
                            Bank Account Number <span className="text-danger">*</span>
                        </Label>
                        <Input
                            type="text"
                            id="bankAccountNumber"
                            value={bankAccountNumber}
                            onChange={(e) => setBankAccountNumber(e.target.value)}
                            placeholder="Enter bank account number"
                        />
                    </FormGroup>

                    {/* Vehicle Type */}
                    <FormGroup className="mb-3">
                        <Label for="vehicleType">
                            Vehicle Type <span className="text-danger">*</span>
                        </Label>
                        <Input
                            type="text"
                            id="vehicleType"
                            value={vehicleType}
                            onChange={(e) => setVehicleType(e.target.value)}
                            placeholder="Enter vehicle type (e.g., bike, car)"
                        />
                    </FormGroup>

                    {/* Vehicle Number */}
                    <FormGroup className="mb-3">
                        <Label for="vehicleNumber">
                            Vehicle Number <span className="text-danger">*</span>
                        </Label>
                        <Input
                            type="text"
                            id="vehicleNumber"
                            value={vehicleNumber}
                            onChange={(e) => setVehicleNumber(e.target.value)}
                            placeholder="Enter vehicle number"
                        />
                    </FormGroup>

                    {/* Submit Button */}
                    <div className="d-grid gap-2">
                        <Button className="btn-register" block onClick={handleRegisterClick}>
                            Register Driver
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Register;
