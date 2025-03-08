class Api {
	_headers: HeadersInit | undefined;
	_url: string;
	constructor(options: { headers: HeadersInit | undefined; url: string }) {
		this._headers = options.headers;
		this._url = options.url;
	}

	getMatches() {
		return this._request(`${this._url}/fronttemp`, {
			method: 'GET',
			headers: this._headers,
		});
	}

	_checkResponse(res: Response) {
		if (res.ok) {
			return res.json();
		}

		return Promise.reject(`Ошибка: ${res.statusText}`);
	}

	_request(url: RequestInfo | URL, options: RequestInit | undefined) {
		return fetch(url, options).then((res) => this._checkResponse(res));
	}
}

const api = new Api({
	url: `${import.meta.env.VITE_URL}`,
	headers: {
		'Content-Type': 'application/json',
	},
});
export default api;
