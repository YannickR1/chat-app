import "./Register.scss";

export default function Register() {
  return (
    <div className="register">
      <section className="register__container">
        <h1>My Chat</h1>
        <h3>Register</h3>
        <form className="register__container__form">
          <input
            type="text"
            placeholder="display name"
            className="register__container__form__input"
          ></input>
          <input
            type="email"
            placeholder="name@email.com"
            className="register__container__form__input"
          ></input>
          <input
            type="password"
            placeholder="password"
            className="register__container__form__input"
          ></input>
          <input
            type="file"
            className="register__container__form__input__image"
          ></input>
          <button  className="register__container__form__btn">Register</button>
        </form>
        <p>Already have an account? Log in here</p>
      </section>
    </div>
  );
}
