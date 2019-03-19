import { html, render } from "./node_modules/lit-html/lit-html.js"

const model = {
  login: {
    email: "",
    password: "",
    error: ""
  },
  user: null
}

const auth = () => {
  const { email, password } = model.login
  if (email === "me@here.now" && password === "neverguess") model.user = { name: "Me" }
  else {
    model.login.password = ""
    model.login.error = "Credentials not recongnised"
  }
  updateView()
}

const loginView = (login, auth) => html`
  <form>
    <label>
      Email
      <input type="text"
        .value=${login.email} 
        @blur=${e => login.email = e.target.value} />
    </label>
    <label>
      Password
      <input type="password"
        .value=${login.password} 
        @blur=${e => login.password = e.target.value} />
    </label>
    <button type="button" @click=${auth}>Log In</button>
    <p>${login.error}</p>
  </form>  
`

const appView = model => model.user
  ? html`You're logged in, enjoy the app`
  : loginView(model.login, auth)

function updateView () {
  render(appView(model), document.body)
}

updateView()
