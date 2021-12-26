import axios from "axios";
import md5 from "md5";
const domain = "http://gateway.marvel.com/v1/public/";
const ts = new Date().getTime().toString();
const publicKey = "9b4ed815c60976c336d3b3979035167e";
const privateKey = "be0175386a771322a560924fc7dbef1a02b77f97";
let hash = md5(`${ts}${privateKey}${publicKey}`);
const getToken = () => {
	return {
		ts,
		apikey: publicKey,
		hash,
	};
};
export const axiosApp = axios.create({
	baseURL: domain,
	headers: {
		"content-type": "application/json",
	},
	timeout: 8000,
});
axiosApp.interceptors.request.use(async (req) => {
	req.params = { ...getToken(), ...req.params };
	return req;
});
