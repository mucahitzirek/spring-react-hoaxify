import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { postHoax, postHoaxAttachment } from "../api/apiCalls";
import { useApiProgress } from "../shared/ApiProgress";
import ButtonWithProgress from "./ButtonWithProgress";
import ProfilImageWithDefault from "./ProfilImageWithDefault";
import Input from "./Input";
import {
  pendingApiCallHoaxSubmitPath,
  postHoaxAttachmentPath,
} from "../api/apiCallsPath";
import AutoUploadImage from "./AutoUploadImage";

const HoaxSubmit = () => {
  const { image } = useSelector((store) => ({ image: store.image }));
  const [focused, setFocused] = useState(false);
  const [hoax, setHoax] = useState("");
  const [errors, setErrors] = useState({});
  const [newImage, setNewImage] = useState();
  const [attachmentId, setAttachmentId] = useState(); // fileattachment(uploadFile) response objesinin id sini tutmak icin

  const { t } = useTranslation();

  useEffect(() => {
    if (!focused) {
      setHoax("");
      setErrors({});
      setNewImage();
      setAttachmentId();
    }
  }, [focused]);

  useEffect(() => {
    setErrors({});
  }, [hoax]);

  const pendingApiCall = useApiProgress(
    "post",
    pendingApiCallHoaxSubmitPath,
    true
  );
  const pendingFileUpload = useApiProgress(
    "post",
    postHoaxAttachmentPath,
    true
  );
  const onClickHoaxify = async () => {
    const body = {
      content: hoax,
      attachmentId: attachmentId,
    };
    try {
      await postHoax(body);
      setFocused(false);
    } catch (error) {
      if (error.response.data.validationErrors) {
        setErrors(error.response.data.validationErrors);
      }
    }
  };
  const onChangeFile = (event) => {
    if (event.target.files.length < 1) {
      return;
    }
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setNewImage(fileReader.result);
      uploadFile(file);
    };
    fileReader.readAsDataURL(file);
  };

  const uploadFile = async (file) => {
    const attachment = new FormData();
    attachment.append("file", file);
    const response = await postHoaxAttachment(attachment);
    setAttachmentId(response.data.id);
  };

  let textAreaClass = "form-control";
  if (errors.content) {
    textAreaClass += " is-invalid";
  }

  return (
    <div className="card p-1 flex-row">
      <ProfilImageWithDefault
        image={image}
        width="32"
        height="32"
        className="rounded-circle mr-1"
      ></ProfilImageWithDefault>
      <div className="flex-fill">
        <textarea
          className={textAreaClass}
          rows={focused ? "3" : "1"}
          onFocus={() => setFocused(true)}
          onChange={(event) => {
            setHoax(event.target.value);
          }}
          value={hoax} // textareanin kendi internal state'i ni bizim hoaxa degiskenine
          // esitlememiz lazimdi cancelda icinin bosalmasi icin
        />
        <div className="invalid-feedback">{errors.content}</div>
        {focused && (
          <>
            {!newImage && <Input type="file" onChange={onChangeFile} />}
            {newImage && (
              <AutoUploadImage image={newImage} uploading={pendingFileUpload} />
            )}
            <div className="text-right mt-2">
              <ButtonWithProgress
                onClick={onClickHoaxify}
                pendingApiCall={pendingApiCall}
                disabled={pendingApiCall || pendingFileUpload}
                text="Hoaxify"
              ></ButtonWithProgress>
              <button
                disabled={pendingApiCall || pendingFileUpload}
                className="btn btn-light d-inline-flex ml-3"
                onClick={() => {
                  setFocused(false);
                }}
              >
                <i className="material-icons">close</i>
                {t("Cancel")}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HoaxSubmit;
