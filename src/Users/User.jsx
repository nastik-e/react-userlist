import "./User.scss";

const User = ({
  id,
  email,
  first_name,
  last_name,
  avatar,
  onClickInvite,
  isInvited,
}) => {
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
      <div className="add" onClick={() => onClickInvite(id)}>
        {isInvited ? "-" : "+"}
      </div>
    </li>
  );
};

export default User;
