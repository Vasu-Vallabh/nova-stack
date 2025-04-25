type UseLocalStorageStateHook<T> = [T, React.Dispatch<React.SetStateAction<T>>]
declare function useLocalStorageState<T>(key: string, initialValue: T): UseLocalStorageStateHook<T>
export default useLocalStorageState
