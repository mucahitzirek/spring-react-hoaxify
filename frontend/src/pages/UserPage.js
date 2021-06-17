import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { getUser } from "../api/apiCalls";
import HoaxFeed from "../componenets/HoaxFeed";
import ProfileCard from "../componenets/ProfileCard";
import Spinner from "../componenets/Spinner";
import { useApiProgress } from "../shared/ApiProgress";

const UserPage = (props) => {
  const [user, setUser] = useState({});
  const [notFound, setNotFound] = useState(false);
  const { username } = useParams(); // React- Routerin ozelligi; http://localhost:3000/#/user/user2 linkindeki  /user2 yi ifade eder.

  const { t } = useTranslation();

  //sayfa acilirken bu pathi kullanarak backendden userin varligini kontrol ediyoruz ve ona gore varsa profil karti gosteriyoruz yoksa hata mesaji veriyoruz
  const pendingApiCall = useApiProgress(
    "get",
    "/api/1.0/users/" + username,
    true
  );

  useEffect(() => {
    setNotFound(false);
  }, [user]);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await getUser(username);
        setUser(response.data);
      } catch (error) {
        setNotFound(true);
      }
    };
    loadUser();
  }, [username]);

  if (notFound) {
    return (
      <div className="container">
        <div className="alert alert-danger text-center">
          <div>
            <i className="material-icons" style={{ fontSize: "48px" }}>
              error
            </i>
          </div>
          {t("User Not Found")}
        </div>
      </div>
    );
  }
  if (pendingApiCall || user.username !== username) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ProfileCard user={user} />
        </div>
        <div className="col">
          <HoaxFeed />
        </div>
      </div>
    </div>
  );
};
export default UserPage;
