export const getMyProjects = async () => {
    const response = await fetch("https://api.github.com/users/JungleGiu/repos?visibility=public", {

    });
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
};

export const getMyJavaScriptProjects = async () => {
    const response = await fetch("https://api.github.com/users/JungleGiu/repos?tags=javascript&visibility=public", {
        headers: {
            Accept: "application/vnd.github.v3+json",
        },
    });
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
};