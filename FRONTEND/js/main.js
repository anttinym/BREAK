'use strict';
/*jshint esversion: 6 */

const openUpload = document.querySelector('#open_upload');
const closeUpload = document.querySelector('#close_upload');
const upload = document.querySelector('#upload');

const openUploadi = () => {
	upload.style.height = "100%";
	openUpload.classList.toggle('display_none');
	closeUpload.classList.toggle('display_none');
};

const closeUploadi = () => {
	upload.style.height = "0%";
	openUpload.classList.toggle('display_none');
	closeUpload.classList.toggle('display_none');
};

openUpload.addEventListener('click', openUploadi);
closeUpload.addEventListener('click', closeUploadi);



