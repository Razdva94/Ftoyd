import React from 'react';
import alert from '@/assets/images/alert.svg';

const HeaderErrorMessage = () => {
	return (
		<div className="bg-[#0F1318] w-[480px] h-[56px] flex gap-3 items-center justify-center text-white">
			<img src={alert} alt="alert" />
			<p className="font-InterR">Ошибка: не удалось загрузить информацию</p>
		</div>
	);
};

export default HeaderErrorMessage;
