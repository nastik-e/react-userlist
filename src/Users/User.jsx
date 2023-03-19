import "./User.scss";

const User = ({ id, email, first_name, last_name, avatar }) => {
  return (
    <li className="user">
      <div className="userInfo">
        <img className="avatar" src={avatar} alt="Avatar" />
        <div>
          <h3 className="name">
            {first_name} {last_name}
          </h3>
          <p className="emailBox">
            <span className="at">@</span>
            {email}
          </p>
        </div>
      </div>
      <div onClick={} className="add">+</div>
    </li>
  );
};

export default User;
