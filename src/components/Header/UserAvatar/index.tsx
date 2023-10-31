type UserAvatarProps = {
  avatar: string;
};

const UserAvatar = ({ avatar }: UserAvatarProps) => {
  return (
    <div className="profile">
      <img className="thumb" src={avatar} alt="Avatar" />
      <span className="username">Jucicreide</span>
    </div>
  );
};
export default UserAvatar;
