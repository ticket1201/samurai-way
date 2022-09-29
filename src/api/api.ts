import axios from 'axios';
import {ProfileContactsType} from '../redux/profile-reducer';

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '18ee2a7f-5b8a-4b8b-9bc7-75b99a20fd9c'
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
    },
    savePhoto(file: File) {
        const formData = new FormData();
        formData.append('image', file)
        return axiosInstance.put('profile/photo/', formData, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(data: ProfileContactsType) {
        return axiosInstance.put('profile/', data)
    }
}

