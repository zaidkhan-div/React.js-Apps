// src/hooks/useTabSync.js
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { listenToTabs } from "../broadcast";
import { addUserToCurrentUser, sendMessage } from "../features/ChatSlice"; // adjust path if needed

const useTabSync = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        listenToTabs(({ type, payload }) => {
            if (type === "ADD_USER") {
                dispatch(addUserToCurrentUser(payload)); // sync user
            }

            if (type === "SEND_MESSAGE") {
                dispatch(sendMessage(payload)); // sync message
            }
        });
    }, []);
};

export default useTabSync;
