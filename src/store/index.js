import { configureStore } from "@reduxjs/toolkit";
//reducers
import ownerModal from "./slices/owners";
import photo from "./slices/register";
import loginReducer from "../store/slices/login/loginSlice";
import personReducer from "../store/slices/person/personSlice";
import petReducer from "../store/slices/pet/petSlice";
import procedureReducer from "../store/slices/procedures/proceduresSlice";
import historyReducer from "../store/slices/history/historySilce";
import owner from "./slices/ownersControl";

export default configureStore({
  reducer: {
    ownerModal,
    photo,
    login: loginReducer,
    person: personReducer,
    pet: petReducer,
    procedure: procedureReducer,
    history: procedureReducer,
    owner,
  },
});
