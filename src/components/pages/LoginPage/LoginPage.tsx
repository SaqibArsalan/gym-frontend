import React, {useEffect, useState} from 'react';
import './LoginPage.scss';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from "redux/components/Auth/sources";
import LoginConnector from "./LoginPageConnector";
import {filterModuleWrtRoles, getActiveModuleIndex} from "../MainPage/MainPage.helpers";
import {IHEADER_LINKS_INFO} from "../MainPage/MainPage.interface";
import {LinkTab} from "../../shared/LinkTab"; // Custom CSS for styling

const LoginPageComponent: React.FC = () => {
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [error, setError] = useState<string>('');
	const dispatch = useDispatch();

	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (username && password) {
			dispatch(login(username, password))
		}
	};

	return (

		<div className="login-container">
			<div className="login-form">
				<h2>Login</h2>
				<form onSubmit={handleLogin}>
					<div className="input-group">
						<input
							id="username"
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							placeholder="Enter your username"
							required/>
					</div>
					<div className="input-group">
						<input
							id="password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Enter your password"
							required/>
					</div>
					{error && <p className="error">{error}</p>}
					<button type="submit" className="login-button">Login</button>
				</form>

				{/* Add the Register hyperlink here */}
				<p className="register-link">
					New User? <Link to="/register">Register</Link>
				</p>

			</div>
		</div>
	);
};

const LoginPage = LoginConnector(LoginPageComponent);
export default LoginPage;
