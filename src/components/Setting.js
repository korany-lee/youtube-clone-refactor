import React, { useState, useRef } from "react";

//Class => hooks 바꾸기 연습
const Setting = ({
	isOpen,
	handleClose,
	handleUpdateSetting,
	user,
	darkMode,
}) => {
	//useRef 사용해도 되고 안해도 됨
	const nameRef = useRef();

	const [username, setUsername] = useState({
		name: user.name ? user.name : "이름없음",
	});

	const handleChangeName = event => {
		event.preventDefault();
		const value = nameRef.current.value;
		setUsername({ name: value });
	};

	const handleSave = () => {
		handleUpdateSetting("currentUser", {
			name: username.name,
		});
		handleClose(); //저장한 뒤에도 창이 닫히게
	};

	const handleToggleDarkMode = event => {
		handleUpdateSetting("darkMode", event.target.checked);
	};

	return (
		<div className={isOpen ? "mdl show" : "mdl"}>
			<div className="mdl-mask" onClick={handleClose}></div>
			<div className={darkMode ? "sidebar dark" : "sidebar"}>
				<h3>Setting</h3>
				<hr />

				<fieldset>
					<legend>사용자 설정</legend>
					<span className="small-margin-right">사용자 이름</span>
					<input
						ref={nameRef}
						type="text"
						className="small-margin-right"
						value={username.name}
						onChange={handleChangeName}
					/>
					<button onClick={handleSave}>저장</button>
				</fieldset>

				<hr />
				<fieldset>
					<legend>일반</legend>
					<label>
						<input
							type="checkbox"
							className="small-margin-right"
							onChange={handleToggleDarkMode}></input>
						<span>Dark Mode</span>
					</label>
				</fieldset>
			</div>
		</div>
	);
};

export default Setting;
