import axios from 'axios';
import Encryption from './encryption';

class Network {
    constructor(auth = null) {
        this.auth = auth;
        this.serverUrl = "https://khademi.liara.run/";
        this.enc = new Encryption();
    }

    async makeRequest(method, data) {
        data = {
            method: method,
            data: data
        };

        try {
            const response = await axios.post(
                this.serverUrl,
                this.enc.encrypt(JSON.stringify(data)),
            );
            return response.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async getNews(page = 1, limit = 10) {
        return await this.makeRequest("get_news", {
            page: page,
            limit: limit
        });
    }

    async getAlbums(page = 1, limit = 10) {
        return await this.makeRequest("get_albums", {
            page: page,
            limit: limit
        });
    }

    async getTeachers(page = 1, limit = 10) {
        return await this.makeRequest("get_teachers", {
            page: page,
            limit: limit
        });
    }

    async getHonors(page = 1, limit = 10) {
        return await this.makeRequest("get_honors", {
            page: page,
            limit: limit
        });
    }

    async getContacts(page = 1, limit = 10) {
        return await this.makeRequest("get_contacts", {
            page: page,
            limit: limit
        });
    }

    async getAbouts(page = 1, limit = 10) {
        return await this.makeRequest("get_abouts", {
            page: page,
            limit: limit
        });
    }

    async getBaseInfo() {
        return await this.makeRequest("get_base_info", {});
    }

    async signin(username, password) {
        return await this.makeRequest("signin", {
            username: username,
            password: password
        });
    }

    async login(username, password) {
        return await this.makeRequest("login", {
            username: username,
            password: password
        });
    }
}

export default Network;