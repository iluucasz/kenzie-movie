import { FormLogin } from "../../components/forms/FormLogin/index";
import style from "./style.module.scss";

export const LoginPage = () => {
	return (
		<>
			<div className={`${style.mainContent}`}>
				<img src="https://s3-alpha-sig.figma.com/img/2476/4c2b/fda1cc43ba3bdb1afb516afbbe432268?Expires=1699833600&Signature=XOvEllK2MFAfw8iH39mPZRRLzZmMowmDbQcojPtAOqA8Pl80wMQDEM49X8wzd9WOvEQJlqIAXA5VxRV0bpVeh8c2FiVlDsnkTH0Z2xKxFu4CRQSkwbfK2DpkgZhwoqn~mqPW-1HaNENQBZVEsSudNskuimlwQMhvm4JLY93o4hIGCE7RxzF0lw919g3EqCyD5~MjIXHnqJDlpqy9unO7bL6ewQtWS-BilEMTTAkXJAwRBj98jlZMKqkCxbxxnlJLHlgfI-jC-pKRRJQI4ci3~djUZXgTRgXpXWBnkE36FedPPXzhKP4rIjWVSy2zydwbGOBbndZfnqxurLOf4faocA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
				<div className={`${style.container__login}`}>
					<FormLogin />
				</div>
			</div>
		</>
	);
};
