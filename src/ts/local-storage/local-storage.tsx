type User = {
    theme: string,
    lang: string
}

const defUser: User = {
    theme: "dark",
    lang: "en"
};

export const getUser = (): User => JSON.parse(localStorage.getItem("user") || JSON.stringify(defUser));
export const saveUser = (user:User) => localStorage.setItem("user", JSON.stringify(user));
