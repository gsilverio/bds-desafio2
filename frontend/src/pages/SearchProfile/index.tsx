import axios from "axios";
import { useState } from "react";
import ProfileCard from "../../components/ProfileCard";
import ProfileLoader from "./ProfileLoader";
import "./styles.css";

type ProfileData = {
  url: string;
  followers: number;
  location: string;
  name: string;
  avatar_url: string;
};
type Login = {
  nickname: string;
};
const SearchProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>();
  const [login, setLogin] = useState<Login>({
    nickname: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const nickN = event.target.value;
    setLogin({ ...login, [name]: nickN });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    axios
      .get(`https://api.github.com/users/${login.nickname}`)
      .then((responde) => {
        setProfileData(responde.data);
      })
      .catch((error) => {
        setProfileData(undefined);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <div className="search-container">
        <div className="search-content">
          <h2>Encontre um perfil Github</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nickname"
              value={login.nickname}
              placeholder="Usuario Github"
              onChange={handleChange}
            />

            <button type="submit">
              <h3>Encontrar</h3>
            </button>
          </form>
        </div>
      </div>
      {isLoading ? (
        <div className="card-loader-contaneir">
          <ProfileLoader />
        </div>
      ) : (
        profileData && (
          <>
            <div className="card-profile-contaneir">
              <ProfileCard
                url={profileData?.url}
                followers={profileData?.followers}
                location={profileData?.location}
                name={profileData?.name}
                avatar_url={profileData?.avatar_url}
              />
            </div>
          </>
        )
      )}
    </>
  );
};

export default SearchProfile;
