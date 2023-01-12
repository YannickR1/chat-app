import './Register.scss'

export default function Register() {
  return (
    <div className="register">
      <article className="register__container"></article>
      <h1>My Chat</h1>
      <h2>Register</h2>
      <form className="register__container__form">
        <input type={text} placeholder="display name"></input>
        <input type={email} placeholder="name@email.com"></input>
        <input type={password} placeholder="password"></input>
        <input type={file}></input>
        <button>Register</button>
      </form>
    </div>
  );
}
