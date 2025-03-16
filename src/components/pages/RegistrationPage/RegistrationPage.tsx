import React, { useState } from 'react';
import './RegistrationPage.scss';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "redux/components/Auth/sources";
import RegistrationPageConnector from "./RegistrationPageConnector";

const RegistrationPageComponent: React.FC = () => {
	const [firstName, setFirstName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');
	const [phoneNumber, setPhoneNumber] = useState<string>('');
	const [dateOfBirth, setDateOfBirth] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [error, setError] = useState<string>('');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (firstName && lastName && phoneNumber && dateOfBirth && email && password) {
			const userData = {
				firstName,
				lastName,
				phoneNumber,
				dateOfBirth,
				email,
				accountStatus: "active",
				password
			};
			dispatch(register(userData));
			navigate("/login"); // Redirect to login after successful registration
		} else {
			setError("Please fill in all fields.");
		}
	};

	return (
		<div className="register-container">
			<div className="register-form">
				<h2>Register</h2>
				<form onSubmit={handleRegister}>
					<div className="input-group">
						<input
							type="text"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							placeholder="First Name"
							required
						/>
					</div>
					<div className="input-group">
						<input
							type="text"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							placeholder="Last Name"
							required
						/>
					</div>
					<div className="input-group">
						<input
							type="text"
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
							placeholder="Phone Number"
							required
						/>
					</div>
					<div className="input-group">
						<input
							type="date"
							value={dateOfBirth}
							onChange={(e) => setDateOfBirth(e.target.value)}
							required
						/>
					</div>
					<div className="input-group">
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Email"
							required
						/>
					</div>
					<div className="input-group">
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Password"
							required
						/>
					</div>
					{error && <p className="error">{error}</p>}
					<button type="submit" className="register-button">Register</button>
				</form>

				<p className="login-link">
					Already have an account? <Link to="/login">Login</Link>
				</p>
			</div>
		</div>
	);
};

const RegisterPage = RegistrationPageConnector(RegistrationPageComponent);
export default RegisterPage;
