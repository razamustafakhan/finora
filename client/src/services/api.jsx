// services/api.js

const handleResponse = async (res) => {
  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Something went wrong");
  }

  return result;
};

// ==============================
// GET
// ==============================

export const apiGet = async (endpoint) => {
  try {
    const res = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    return await handleResponse(res);
  } catch (error) {
    throw new Error(error.message);
  }
};

// ==============================
// POST - JSON
// ==============================

export const apiPost = async (endpoint, data) => {
  try {
    const res = await fetch(endpoint, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",

      body: JSON.stringify(data),
    });

    return await handleResponse(res);
  } catch (error) {
    throw new Error(error.message);
  }
};

// ==============================
// POST - FormData
// ==============================

export const apiPostFormData = async (endpoint, formData) => {
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      credentials: "include",

      body: formData,
    });

    return await handleResponse(res);
  } catch (error) {
    throw new Error(error.message);
  }
};

// ==============================
// PUT
// ==============================

export const apiPut = async (endpoint, data) => {
  try {
    const res = await fetch(endpoint, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",

      body: JSON.stringify(data),
    });

    return await handleResponse(res);
  } catch (error) {
    throw new Error(error.message);
  }
};

// ==============================
// DELETE
// ==============================

export const apiDelete = async (endpoint) => {
  try {
    const res = await fetch(endpoint, {
      method: "DELETE",
      credentials: "include",
    });

    return await handleResponse(res);
  } catch (error) {
    throw new Error(error.message);
  }
};
