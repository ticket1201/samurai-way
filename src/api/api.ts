import axios from 'axios';

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '06a5051c-4a76-4b4c-b1bc-63ff9bd7a4be'
    }
})

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 4) => {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    getProfile: (userID: String) => {
       return  axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
    },
    followUser: (userID: String) => {
        return axiosInstance.post(`follow/${userID}`).then(resolve => resolve.data)
    },
    unfollowUser: (userID: String) => {
        return axiosInstance.delete(`follow/${userID}`).then(resolve => resolve.data)
    }
}

export const authAPI = {
    getAuth: () => {
        return axiosInstance.get(`auth/me`).then(response => response.data)
    }
}

