
const LocalStorage = {
    appName: "myApp",
    formatedName: function(name) {
        return `${this.appName}-${name}`;
    },
    getItem: function (name) {
        return JSON.parse(localStorage.getItem(this.formatedName(name)));
    },
    setItem: function (name, item) {
        return localStorage.setItem(this.formatedName(name), JSON.stringify(item));
    },
    removeItem: function (name) {
        return localStorage.removeItem(this.formatedName(name));
    }
};

export default LocalStorage;