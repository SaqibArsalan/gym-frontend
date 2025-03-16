import React from "react";
import { Notifications, AccountCircle, ExitToApp } from "@mui/icons-material";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => (
		<nav className={styles.navbar}>
			<div className={styles.logo}>Gym Management</div>
			<div className={styles.navIcons}>
				<Notifications className={styles.icon} />
				<AccountCircle className={styles.icon} />
				<ExitToApp className={styles.icon} />
			</div>
		</nav>
	);

export default Navbar;
