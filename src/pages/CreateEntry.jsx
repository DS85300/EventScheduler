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
      <div>
        <p className="text-green-500">Your event has been created!</p>
        <button
          onClick={() => {
            setSuccess(false);
            setError(false);
          }}
        >
          Create new event
        </button>
      </div>
    );
  }

  return (
    <>
      <h1>Create new event</h1>
      <form className="grid" onSubmit={handleSubmit}>
        {error ? (
          <div>
            <p className="bg-red-400">Error: {error}</p>
          </div>
        ) : (
          ""
        )}

        <label>
          Date:{" "}
          <input
            name="date"
            type="date"
            value={input.date}
            onChange={(e) => setInput({ ...input, date: e.target.value })}
          />
        </label>
        <label>
          Title:{" "}
          <input
            name="title"
            type="text"
            value={input.title}
            placeholder="What's it about?"
            onChange={(e) => setInput({ ...input, title: e.target.value })}
          />
        </label>
        <label>
          Location:{" "}
          <input
            name="location"
            type="text"
            value={input.location}
            placeholder="Where does it take place?"
            onChange={(e) => setInput({ ...input, location: e.target.value })}
          />
        </label>
        <div>
          <label>Coordinates: </label>
          <label>
            Latitude{" "}
            <input
              name="lat"
              type="text"
              value={input.latitude}
              placeholder="Enter latitude"
              onChange={(e) => setInput({ ...input, latitude: e.target.value })}
            />
          </label>
          <label>
            Longitude{" "}
            <input
              name="long"
              type="text"
              value={input.longitude}
              placeholder="Enter longitude"
              onChange={(e) =>
                setInput({ ...input, longitude: e.target.value })
              }
            />
          </label>
        </div>
        <label>
          Description{" "}
          <textarea
            name="description"
            placeholder="Describe your event"
            value={input.description}
            onChange={(e) =>
              setInput({ ...input, description: e.target.value })
            }
          ></textarea>
        </label>
        <br />
        <button type="submit"> Create </button>
      </form>
    </>
  );
};

export default CreateEntry;
