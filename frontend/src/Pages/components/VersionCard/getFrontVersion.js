import { packageJson } from "../../../assets";


/**
 * Obtiene la versión del frontend desde el package.json empacado en assets.
 * @returns {string}
 */
export const getFrontVersion = () => {
    return packageJson.version;
};
