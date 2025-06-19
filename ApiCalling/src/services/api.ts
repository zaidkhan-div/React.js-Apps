import axios from "axios";
import { toast } from "react-toastify";

// ✅ What is a "Common Axios Service"?
// A common Axios service is a centralized setup for:
// 🧱 Base API config (like baseURL)
// 🔐 Authentication (like setting the Bearer token in headers)
// 🚨 Global error handling (like 401, 403, 500)
// 🔄 Request/response interceptors
// 📦 Reuse: You don't have to repeat axios.get(...) everywhere with same headers
// Login / Protected APIs	Automatically adds the Bearer token

// Faq's
// What are Axios interceptors?
// Middleware functions that run before request or after response.
// How do you set an auth token in Axios globally?
// Add Authorization: Bearer <token> using api.defaults.headers or request interceptor.
// How do you handle 401 Unauthorized globally?
// Response interceptor checks for 401, then logout user or refresh token.
// Can Axios cancel requests?
// Yes, with AbortController or Axios CancelToken.


const Api = axios.create({
    baseURL: "https://dummyjson.com/",
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        // what type of data i am sending
        // Hi Server i am sending JSON data in the body request
    },
})

Api.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
})

Api.interceptors.response.use(
    (response) => response,
    (error) => {
        const status = error.response?.status;
        if (status === 401) {
            // 🔐 Unauthorized (token invalid or expired)
            // 1. Remove token
            localStorage.removeItem("authToken");
            // 2. Redirect to login page
            window.location.href = "/login";
            // 3. Optionally show toast
            toast.error("Session expired. Please log in again.");
        }
        if (status === 403) {
            toast.error("Access Denied (Forbidden)");
        }

        if (status >= 500) {
            toast.error("Server error. Try again later.");
        }

        return Promise.reject(error); // important!
    }
)

export default Api

// You don’t want to write baseURL again and again.
// Easy to reuse across all components.
// Central place to manage all headers and settings.


//  what is interceptor in react ?

// In React, an "interceptor" typically refers to a mechanism that allows you to intercept and modify HTTP requests or responses before they are sent or received by your application. While React itself doesn't have built-in interceptor functionality, this concept is commonly implemented using HTTP client libraries like Axios.
// How Interceptors Work (with Axios as an example):
// Axios, a popular JavaScript library for making HTTP requests, provides a robust interceptor feature. It allows you to define functions that are executed at specific points in the request-response lifecycle: 
// Request Interceptors:
// These functions run before a request is sent to the server. They are useful for:
// Adding authentication tokens to headers (e.g., JWT).
// Modifying request data or parameters.
// Logging request details.
// Handling rate limiting.