import ContentLoader from "react-content-loader";

const ProfileLoader = () => (
  <ContentLoader
    speed={2}
    width={1200}
    height={500}
    viewBox="0 0 1200 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="1" y="43" rx="0" ry="0" width="200" height="200" />
    <rect x="230" y="90" rx="3" ry="3" width="800" height="10" />
    <rect x="230" y="230" rx="3" ry="3" width="800" height="10" />
    <rect x="230" y="180" rx="3" ry="3" width="800" height="10" />
    <rect x="230" y="135" rx="3" ry="3" width="800" height="10" />
    <rect x="230" y="48" rx="3" ry="3" width="400" height="10" />
  </ContentLoader>
);

export default ProfileLoader;
