import { toastErrorNotify, toastSuccessNotify } from "@/utils/ToastNotify";
import axios from "axios";
import { useRouter } from "next/navigation";

const useFormCalls = () => {
  const router = useRouter();
  //const BASE_URL = "https://krc-buchhaltung.vercel.app";
  const BASE_URL = "";
  const sendAnmeldung = async (formData) => {
    const postFormData = new FormData();

    for (const key in formData) {
      postFormData.append(key, formData[key]);
    }
    try {
      const data = await axios.post(
        BASE_URL + "/api/forms/anmeldung",
        postFormData,
        { headers: { "Content-Type": "multipart/from-data" } }
      );

      toastSuccessNotify(`Eingabe erfolgreich gesendet`);

      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (error) {
      console.log(error);
      if (error.response?.data?.error?.includes("No recipients defined")) {
        toastErrorNotify("Email ist falsch eingegeben");
      } else {
        toastErrorNotify(
          "Etwas ist schiefgelaufen, bitte versuchen Sie es später erneut!"
        );
      }
      console.log(error);
    }
  };
  const sendAbmeldung = async (formData) => {
    try {
      const data = await axios.post(
        BASE_URL + "/api/forms/abmeldung",
        formData
      );
      toastSuccessNotify(`Eingabe erfolgreich gesendet`);
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (error) {
      if (error.response.data?.error?.includes("No recipients defined")) {
        toastErrorNotify("Email ist falsch eingegeben");
      } else {
        toastErrorNotify(
          "Etwas ist schiefgelaufen, bitte versuchen Sie es später erneut!"
        );
      }
      console.log(error);
    }
  };
  const sendAenderung = async (formData) => {
    try {
      const data = await axios.post(
        BASE_URL + "/api/forms/aenderung",
        formData
      );
      toastSuccessNotify(`Eingabe erfolgreich gesendet`);
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (error) {
      if (error.response.data?.error?.includes("No recipients defined")) {
        toastErrorNotify("Email ist falsch eingegeben");
      } else {
        toastErrorNotify(
          "Etwas ist schiefgelaufen, bitte versuchen Sie es später erneut!"
        );
      }
      console.log(error);
    }
  };
  const sendStorno = async (formData) => {
    try {
      const data = await axios.post(BASE_URL + "/api/forms/storno", formData);
      toastSuccessNotify(`Eingabe erfolgreich gesendet`);
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (error) {
      if (error.response.data?.error?.includes("No recipients defined")) {
        toastErrorNotify("Email ist falsch eingegeben");
      } else {
        toastErrorNotify(
          "Etwas ist schiefgelaufen, bitte versuchen Sie es später erneut!"
        );
      }
      console.log(error);
    }
  };

  return { sendAnmeldung, sendAbmeldung, sendAenderung, sendStorno };
};

export default useFormCalls;
