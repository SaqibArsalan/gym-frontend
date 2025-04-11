import React, {useEffect, useState} from 'react';
import './LoginPage.scss';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from "redux/components/Auth/sources";
import ROUTES from "config/constants";
import LoginConnector from "./LoginPageConnector";
import {ILoginPageProps} from "./LoginPage.interface";
import {prepareRouteForNavigation} from "../../../utils/Route";
import {fetchMembershipPlans} from "../../../redux/components/Members/sources";

function LoginPageComponent(props: ILoginPageProps) {
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [error, setError] = useState<string>('');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { userDetails } = props;

	const handleLogin = async () => {
		if (username && password) {
			dispatch(login(username, password))
		}
	};

	useEffect(() => {
		if (userDetails) {
			const route = prepareRouteForNavigation(ROUTES.DASHBOARD);
			navigate(route, { replace: true });
		}
	}, [userDetails, navigate]);

	return (

		<div className="login-container">
			<div className="login-form">
				<h2>Login</h2>
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
					<button type="submit" className="login-button" onClick={handleLogin}>Login</button>

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
