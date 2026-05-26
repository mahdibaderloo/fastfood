import Header from "../components/Header";
import Form from "../features/login-signup/Form";

export default function Login() {
  return (
    <>
      <Header showBackButton={true} pContent="Login" />
      <main className="min-h-screen overflow-y-scroll lg:overflow-hidden pt-40 sm:pt-24 lg:pt-18">
        <Form
          url="/signup"
          text="You don't have an account?"
          buttonTitle="Login"
          linkTitle="Signup"
        />
      </main>
    </>
  );
}
