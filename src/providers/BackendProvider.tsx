import React, { useContext } from "react"
import { FirebaseCalls } from "../services/api.services"

interface BackendCallsInterface {
    signIn: (username: string, password: string) => Promise<any>,
    signUpUser: (email: string, password: string, userName: string) => Promise<any>,
    logout: () => Promise<any>,
    userName: () => string,
    createList: (listName: string) => Promise<any>
    createTask: (taskName: string, isCompleted: boolean, listId: string) => Promise<any>
    updateTask: (taskID: string, isCompleted: boolean) => Promise<any>
    getAllLists: () => Promise<any>,
    getAllTasks: (listID: string) => Promise<any>
}

const BackendContext = React.createContext<BackendCallsInterface>({
    signIn: (username: string, password: string) => ({} as Promise<any>),
    signUpUser: (email: string, password: string, userName: string) => ({} as Promise<any>),
    logout: () => ({} as Promise<any>),
    userName: () => "",
    createList: (listName: string) => ({} as Promise<any>),
    createTask: (taskName: string, isCompleted: boolean, listId: string) => ({} as Promise<any>),
    updateTask: (taskID: string, isCompleted: boolean) => ({} as Promise<any>),
    getAllLists: () => ({} as Promise<any>),
    getAllTasks: (listID: string) => ({} as Promise<any>)
})

export const useBackend = (): BackendCallsInterface => {
    return useContext(BackendContext)
}

const BackendProvider = ({ children }: any) => {
    const firebaseCalls = new FirebaseCalls()

    return (
        <BackendContext.Provider value={firebaseCalls}>
            {children}
        </BackendContext.Provider>
    )
}
export default BackendProvider