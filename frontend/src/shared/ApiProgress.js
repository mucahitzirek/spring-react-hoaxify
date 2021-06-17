import { useEffect, useState } from "react";
import axios from "axios";

export const useApiProgress = (apiMethod, apiPath, strictPath) => {
  // strictPathi true verirsek apiPathi verdigimiz url'e kesin esit olmasini istedik
  // aksi durumda (else if)  bu url ile basliyanlar olacak.
  const [pendingApiCall, setPendingApiCall] = useState(false);

  const updateApiCallFor = (method, url, inProgress) => {
    if (method !== apiMethod) {
      return;
    }
    if (strictPath && url === apiPath) {
      // biz strictPath'i verirsek yani true dersek verdigimiz path'e bire bir esit olmasini istedik, sirf bu yuzden yaptik aslinda 
      setPendingApiCall(inProgress);
    } else if (!strictPath && url.startsWith(apiPath)) {
      // eger suan(url) bizim request attigimiz url tanimlanirken verilen(apiPath) pathle basliyorsa 
      // bu requeste pendingApiCall degerini false yada trueya cekiyoruz
      setPendingApiCall(inProgress);
    }
  };

  useEffect(() => {
    let requestInterceptor, responseInterceptor;
    const registerInterceptor = () => {
      requestInterceptor = axios.interceptors.request.use((request) => {
        const { url, method } = request;
        updateApiCallFor(method, url, true);
        return request;
      });
      responseInterceptor = axios.interceptors.response.use(
        (response) => {
          const { url, method } = response.config;
          updateApiCallFor(method, url, false);
          return response;
        },
        (error) => {
          const { url, method } = error.config;
          updateApiCallFor(method, url, false);
          throw error;
        }
      );
    };

    const unregisterUnterceptor = () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
    registerInterceptor();

    return function unmount() {
      unregisterUnterceptor();
    };
  }, [apiPath, apiMethod, strictPath]);

  return pendingApiCall;
};
