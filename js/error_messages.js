export const globalVarDoesNotExistMsg = (varName) => { return `Die globale Variable ${varName} existiert nicht!` };
export const localVarDoesNotExistMsg = (varName) => { return `Die lokale Variable ${varName} existiert nicht!` };
export const isGlobalNotLocalMsg = (varName) => { return `Die Variable ${varName} ist global, nicht lokal angelegt!` };
export const isLocalNotGlobalMsg = (varName) => { return `Die Variable ${varName} ist lokal, nicht global angelegt!` }
export const wrongTypeMsg = (varName, requiredType) => { return `Die Variable ${varName} ist nicht vom Typ ${requiredType}!` };
export const stringIsEmptyMsg = (varName) => { return `Die Variable ${varName} vom Typ String hat keinen Inhalt!` };
export const scriptDoesNotContainMsg = (requiredText) => { return `Dein Script enthält kein ${requiredText}!` };