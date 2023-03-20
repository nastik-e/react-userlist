import { Skeleton } from "./Skeleton";
import User from "./User";
import "./Users.scss";

const Users = ({
  items,
  isLoading,
  onChangeSearchValue,
  searchValue,
  onClickInvite,
  invites,
  onSendInvites
}) => {
  return (
    <div className="users">
      <div className="search">
        <svg
          className="searchPic"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input
          onChange={onChangeSearchValue}
          type="text"
          placeholder="User Search..."
        />
      </div>
      {isLoading ? (
        <div className="skeletonBox">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="usersList">
          {items
            .filter((item) => {
              const full_name = item.first_name + item.last_name;
              return (
                full_name.toLowerCase().includes(searchValue) ||
                item.email.toLowerCase().includes(searchValue)
              );
            })
            .map((user) => (
              <User
                isInvited={invites.includes(user.id)}
                onClickInvite={onClickInvite}
                key={user.id}
                {...user}
                // если пропсы включают такие параметры, как и ключи объекта, то можно сократить, использовав spread
                // email={user.email}
                // first_name={user.first_name}
                // last_name={user.last_name}
                // avatar={user.avatar}
              />
            ))}
        </ul>
      )}
{invites.length > 0 && (
      <button onClick={onSendInvites} className="send buttonOrange">Send Invitation</button>
) } </div>
  );
};

export default Users;
