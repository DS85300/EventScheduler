import { useState } from "react";

const CreateEntry = () => {
  const dataObject = {
    date: null,
    title: null,
    location: null,
    lat: null,
    long: null,
    description: null,
  };

  const [input, setInput] = useState({ dataObject });

  const handleSubmit = (event) => {
    event.preventDefault();

    async function postData() {
      try {
        const response = await fetch(URL, {
          method: "POST",
          body: JSON.stringify({
            input,
          }),
        });
      } catch (error) {}
    }
  };

  return (
    <>
      <h1>Create new event</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Date:{" "}
          <input
            name="date"
            type="date"
            onChange={(e) => setInput({ ...input, date: e.target.value })}
          />
        </label>
        <label>
          Title:{" "}
          <input
            name="title"
            type="text"
            placeholder="What's it about?"
            onChange={(e) => setInput({ ...input, title: e.target.value })}
          />
        </label>
        <label>
          Location:{" "}
          <input
            name="location"
            type="text"
            placeholder="Where does it take place?"
            onChange={(e) => setInput({ ...input, location: e.target.value })}
          />
        </label>
        <div>
          <label>Coordinates</label>
          <label>
            Latitude{" "}
            <input
              name="lat"
              type="text"
              placeholder="Enter latitude"
              onChange={(e) => setInput({ ...input, lat: e.target.value })}
            />
          </label>
          <label>
            Longitude{" "}
            <input
              name="long"
              type="text"
              placeholder="Enter longitude"
              onChange={(e) => setInput({ ...input, long: e.target.value })}
            />
          </label>
        </div>
        <label>
          Description{" "}
          <textfield
            name="description"
            placeholder="Describe your event"
            onChange={(e) =>
              setInput({ ...input, description: e.target.value })
            }
          ></textfield>
        </label>
        <input type="submit" />
      </form>
    </>
  );
};

export default CreateEntry;
