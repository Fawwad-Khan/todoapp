// const modules = ["Company", "Plan", "Customer", "Vendor", "Product", "Inventory", "Sale"];

export const ACL = {
    "Sale": { List: true, Update: true, Add: true, Delete: false, Print: true }
};

const getRouteObject = (m, rights) => ({ module: `${rights}${m}`, path: `/${rights}${(m).toLowerCase()}` }); 

const getRoutes = () => {
    return Object.keys(ACL).reduce((accu, mdl) => {
        let moduleAccess = Object.keys(ACL[mdl]).reduce((acc, r) => {
            if (ACL[mdl][r]) {
                return [...acc, getRouteObject(mdl, r)];
            }
            return acc
        }, []);
        return [...accu, ...moduleAccess, {module: "Dashboard", path: "/dashboard"}];
    }, []);

}

export default getRoutes;