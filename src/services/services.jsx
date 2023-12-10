import axios from "axios";
const END_POINT = "https://65742b7cf941bda3f2af6f15.mockapi.io";

export const get = async (endPoint) => {
  try {
    const resp = await axios(`${END_POINT}${endPoint}`);
    if (resp?.status) {
      const { data, status, statusText } = resp;
      return { data, status, statusText };
    } else {
      return resp;
    }
  } catch (err) {
    return err;
  }
};

export const post = async (endPoint, data) => {
  try {
    const resp = await axios(`${END_POINT}${endPoint}`, {
      method: "POST",
      headers: {
        headers: { "content-type": "application/json" },
      },
      data,
    });
    if (resp?.status) {
      const { data, status, statusText } = resp;
      return { data, status, statusText };
    } else {
      return resp;
    }
  } catch (err) {
    return err;
  }
};

export const patch = async (endPoint, data) => {
  try {
    const resp = await axios(`${END_POINT}${endPoint}`, {
      method: "PUT",
      headers: {
        headers: { "content-type": "application/json" },
      },
      data: data,
    });
    if (resp?.status) {
      const { data, status, statusText } = resp;
      return { data, status, statusText };
    } else {
      return resp;
    }
  } catch (err) {
    return err;
  }
};

export const remove = async (endPoint) => {
  try {
    const resp = await axios(`${END_POINT}${endPoint}`, {
      method: "DELETE",
      headers: {
        headers: { "content-type": "application/json" },
      },
    });
    if (resp?.status) {
      const { data, status, statusText } = resp;
      return { data, status, statusText };
    } else {
      return resp;
    }
  } catch (err) {
    return err;
  }
};

// export const remove = () => {
//   try {
//   } catch (err) {}
// };
// export const update = () => {
//   try {
//   } catch (err) {}
// };
