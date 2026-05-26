import { BiUser } from "react-icons/bi";
import Header from "../components/Header";
import { CgLock } from "react-icons/cg";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Form from "../features/login-signup/Form";

export default function Signup() {
  return (
    <>
      <Header showBackButton={true} pContent="Signup" />
      <main className="min-h-screen overflow-y-scroll lg:overflow-hidden pt-40 sm:pt-24 lg:pt-18">
        <Form
          url="/login"
          text="You have an account?"
          buttonTitle="Signup"
          linkTitle="Login"
        />
      </main>
    </>
  );
}
