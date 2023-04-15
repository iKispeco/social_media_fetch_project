import pt from "prop-types";

function UserInfo(props) {
  const { data } = props;
  const { avatar_url, name, location, bio } = data;

  return (
    <section className="user-container">
      <div className="logo-container">
        <img src={avatar_url} alt="logo" width="150" height="150" />
        <h1>{name}</h1>
      </div>
      <p className="paragraf">
        <strong>BIO: </strong>
        {bio}
      </p>

      <p className="paragraf">
        <strong>LOCATION: </strong>
        {location}
      </p>
    </section>
  );
}

UserInfo.propTypes = {
  data: pt.object,
};

export default UserInfo;
