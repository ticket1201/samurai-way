import axios from 'axios';

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '06a5051c-4a76-4b4c-b1bc-63ff9bd7a4be'
    }
})

export const authAPI = {
    getAuth: () => {
        return axiosInstance.get(`auth/me`).then(response => response.data)
    },
    login: (email: string, password: string, rememberMe:boolean = false) => {
        return axiosInstance.post(`auth/login`, {email, password, rememberMe}).then(resolve => resolve.data)
    },
    logout: () => {
        return axiosInstance.delete(`auth/login`)
    }
}

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 4) => {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    getProfile: (userID: string) => {
        console.warn('Deprecated method. Please use profileAPI object.')
        return profileAPI.getProfile(userID)
    },

    followUser: (userID: string) => {
        return axiosInstance.post(`follow/${userID}`).then(resolve => resolve.data)
    },
    unfollowUser: (userID: string) => {
        return axiosInstance.delete(`follow/${userID}`).then(resolve => resolve.data)
    }
}

export const profileAPI = {
    getProfile: (userID: string) => {
        return axiosInstance.get(`profile/` + userID)
    },
    getStatus(userID: string) {
        return axiosInstance.get(`profile/status/` + userID)
    },
    updateStatus(status: string) {
        return axiosInstance.put('profile/status/', {status})
    }
}

