import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import { Layout } from "../../../layout/Layout";
import { Login } from "../Login";
import { Singup } from "../Signup";
import { ResetPassword } from "../RestPassword";
import { WhoAreYou } from "../WhoAreYou";

export const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element={<Layout />}>
        <Route index element={<WhoAreYou />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Singup />} />
        <Route path="reset-password" element={<ResetPassword />} />
    </Route>
</>
))