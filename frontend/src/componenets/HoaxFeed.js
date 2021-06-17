import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { getHoaxes, getNewHoaxCount, getNewHoaxes } from "../api/apiCalls";
import { useApiProgress } from "../shared/ApiProgress";
import HoaxView from "./HoaxView";
import Spinner from "./Spinner";
import { getOldHoaxes } from "../api/apiCalls";
import {
  getHoaxesPath,
  getOldHoaxesPath,
  getNewHoaxesPath,
} from "../api/apiCallsPath";

const HoaxFeed = () => {
  const [hoaxPage, setHoaxPage] = useState({
    content: [],
    last: true,
    number: 0,
  });
  const [newHoaxCount, setNewHoaxCount] = useState(0);

  const { t } = useTranslation();
  const { username } = useParams();
  const initialHoaxLoadProgress = useApiProgress(
    "get",
    getHoaxesPath(username)
  );

  let lastHoaxId = 0;
  let firstHoaxId = 0;

  if (hoaxPage.content.length > 0) {
    firstHoaxId = hoaxPage.content[0].id;
    const lastHoaxIndex = hoaxPage.content.length - 1;
    lastHoaxId = hoaxPage.content[lastHoaxIndex].id;
  }

  const loadOldHoaxesProgress = useApiProgress(
    "get",
    getOldHoaxesPath(lastHoaxId, username),
    true
  );

  const loadNewHoaxesProgress = useApiProgress(
    "get",
    getNewHoaxesPath(firstHoaxId, username),
    true
  );

  useEffect(() => {
    const getCount = async () => {
      const response = await getNewHoaxCount(firstHoaxId, username);
      setNewHoaxCount(response.data.count);
    };
    let looper = setInterval(getCount, 5000);
    return function cleanup() {
      clearInterval(looper);
    };
  }, [firstHoaxId, username]);

  useEffect(() => {
    const loadHoaxes = async (page) => {
      try {
        const response = await getHoaxes(username, page);
        setHoaxPage((previousHoaxPage) => ({
          ...response.data,
          content: [...previousHoaxPage.content, ...response.data.content],
        }));
      } catch (error) {}
    };
    loadHoaxes();
  }, [username]);

  const loadOldHoaxes = async () => {
    const response = await getOldHoaxes(lastHoaxId, username); // son hoaxin id'sine gore...
    setHoaxPage((previousHoaxPage) => ({
      ...response.data,
      content: [...previousHoaxPage.content, ...response.data.content],
      // statette tuttugumuz content'e -------  yeni verileri ekliyoruz eskilerinin ardina.
    }));
  };

  const loadNewHoaxes = async () => {
    const response = await getNewHoaxes(firstHoaxId, username);
    setHoaxPage((previousHoaxPage) => ({
      ...previousHoaxPage,
      content: [...response.data, ...previousHoaxPage.content],
      // statette tuttugumuz content'e yeni verileri ekliyoruz,
      // Once yeni gelenleri, sonra eskileri contente atiyoruz.
    }));
    setNewHoaxCount(0);
  };

  const onDeleteHoaxSuccess = (id) => {
    setHoaxPage((previousHoaxPage) => ({
      ...previousHoaxPage,
      // silinen id lerin olmadigi bir listeyi geri donerek filtrelemis olduk
      content: previousHoaxPage.content.filter((hoax) => hoax.id !== id),
    }));
  };

  const { content, last } = hoaxPage;

  if (content.length === 0) {
    return (
      <div className="alert alert-secondary text-center">
        {initialHoaxLoadProgress ? <Spinner /> : t("There are no hoaxes")}
      </div>
    );
  }

  return (
    <div>
      {newHoaxCount > 0 && (
        <div
          className="alert alert-secondary text-center mb-1"
          style={{ cursor: loadNewHoaxesProgress ? "not-allowed" : "pointer" }}
          onClick={loadNewHoaxesProgress ? () => {} : loadNewHoaxes}
        >
          {loadNewHoaxesProgress ? <Spinner /> : t("There are new hoaxes")}
        </div>
      )}
      {content.map((hoax) => {
        // Burada verdigimiz keyin sebebi, dongude olan bir tag olmasi o taga bir key verme zorunlulugu vardir
        return (
          <HoaxView
            key={hoax.id}
            hoax={hoax}
            onDeleteHoax={onDeleteHoaxSuccess}
          />
        );
      })}
      {!last && (
        <div
          className="alert alert-secondary text-center"
          style={{ cursor: loadOldHoaxesProgress ? "not-allowed" : "pointer" }}
          onClick={loadOldHoaxesProgress ? () => {} : loadOldHoaxes}
        >
          {loadOldHoaxesProgress ? <Spinner /> : t("Load old hoaxes")}
        </div>
      )}
    </div>
  );
};
export default HoaxFeed;
