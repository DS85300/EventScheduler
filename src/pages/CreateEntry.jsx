import { useState, useEffect } from "react";
import authCheck from "../utils/authCheck";

const CreateEntry = () => {
  const loggedIn = authCheck();
  if (!loggedIn) return <div>Not logged in</div>;

  const API_TOKEN = loggedIn;
  const PORT = 3001;
  const dataObject = {
    date: "",
    title: "",
    location: "",
    latitude: 0,
    longitude: 0,
    description: "",
  };

  const [input, setInput] = useState({ ...dataObject });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const isAnyFieldEmpty = Object.values(input).some((value) => !value);
    if (isAnyFieldEmpty) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }
    const checkLat = !isNaN(input.latitude);
    const checkLong = !isNaN(input.longitude);
    if (!checkLat || !checkLong) {
      setError("Use numbers for latitude and longitude");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`http://localhost:${PORT}/api/events`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify(input),
      });

      if (!response.ok) throw new Error(response.status);

      console.log("Success:", { response });
      setSuccess(true);
      setInput({ ...dataObject });
    } catch (error) {
      console.log("Error:", { error });
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setSuccess(false);
  }, []);

  if (loading) return <div>Loading...</div>;

  if (success) {
    return (
      <div className="flex flex-col items-center my-10">
        <div class="w-xl">
          <div role="alert" className="alert alert-success mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Your event has been created!</span>
          </div>
          <button
            className="btn btn-outline btn-primary "
            onClick={() => {
              setSuccess(false);
              setError(false);
            }}
          >
            Create new event
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl py-10">Create new event</h1>
      <form onSubmit={handleSubmit}>
        <fieldset className="fiseldset w-xl bg-base-200 border border-base-300 p-4 rounded-box">
          <legend className="fieldset-legend">Event details</legend>
          {error ? (
            <div role="alert" className="alert alert-error mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Error: {error}</span>
            </div>
          ) : (
            ""
          )}

          <label className="fieldset-label">Date: </label>
          <input
            className="input w-full"
            name="date"
            type="date"
            value={input.date}
            onChange={(e) => setInput({ ...input, date: e.target.value })}
          />
          <label className="fieldset-label">Title: </label>
          <input
            className="input w-full"
            name="title"
            type="text"
            value={input.title}
            placeholder="What's it about?"
            onChange={(e) => setInput({ ...input, title: e.target.value })}
          />
          <label className="fieldset-label">Location: </label>
          <input
            className="input w-full"
            name="location"
            type="text"
            value={input.location}
            placeholder="Where does it take place?"
            onChange={(e) => setInput({ ...input, location: e.target.value })}
          />

          <label className="fieldset-label">Coordinates: </label>
          <div className="flex gap-5 w-full">
            <div className="w-full">
              <label className="fieldset-label">Latitude </label>
              <input
                className="input w-full"
                name="lat"
                type="text"
                value={input.latitude}
                placeholder="Enter latitude"
                onChange={(e) =>
                  setInput({ ...input, latitude: e.target.value })
                }
              />
            </div>
            <div className="w-full">
              <label className="fieldset-label">Longitude </label>
              <input
                className="input w-full"
                name="long"
                type="text"
                value={input.longitude}
                placeholder="Enter longitude"
                onChange={(e) =>
                  setInput({ ...input, longitude: e.target.value })
                }
              />
            </div>
          </div>

          <label className="fieldset-label">Description </label>
          <textarea
            className="input w-full mb-2"
            name="description"
            placeholder="Describe your event"
            value={input.description}
            onChange={(e) =>
              setInput({ ...input, description: e.target.value })
            }
          ></textarea>

          <br />
          <button className="btn btn-outline btn-primary" type="submit">
            {" "}
            Create{" "}
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default CreateEntry;
