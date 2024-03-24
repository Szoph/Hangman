export const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, state: object, setState: any) => {
    const key: string = e.target.name;
    const value: string = e.target.value;

    setState((state: object) => ({
        ...state,
        [key]: value,
    }))
}