import "./styles.css";

type Props = {
  url: string;
  followers: number;
  location: string;
  name: string;
  avatar_url: string;
};

const ProfileCard = ({ url, followers, location, name, avatar_url }: Props) => {
  return (
    <>
      <div className="profilecard-container">
        <div className="profilecard-content">
          <div className="profile-img">
            <img src={avatar_url} alt="" />
          </div>
          <div className="profile-info-container">
            <h2>Informações</h2>
            <div className="profile-info">
              <h3>
                Perfil:<p>{url}</p>
              </h3>
              <h3>Seguidores: {followers}</h3>
              <h3>Localidade: {location}</h3>
              <h3>Nome: {name}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
