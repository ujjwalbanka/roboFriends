export function searchRobot(text) {
    return {
        type: "Fetch_Robots",
        payload: text
    }
};
