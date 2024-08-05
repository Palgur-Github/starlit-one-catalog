import { useState } from "react";

function CreateStarPattern(props) {
  const { createStarPattern } = props;



  const [image, setImage] = useState("");
 const [name, setName] = useState("");
  const [translation, setTranslation] = useState("");

  const handleImageInput = (e) => {
    setImage(e.target.value);
  };

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handleTranslationInput = (e) => {
    setTranslation(e.target.value);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    const starPattern = {
      image: image,
      name: name,
      translation: translation
    }
    console.log(starPattern);

    if (!name) {
      console.log("Please write a name");
      return;
    }
    createStarPattern(starPattern);

    setImage("");
    setName("");
    setTranslation("");

  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="star-pattern-image"> Star Pattern's Image : </label>
        <input
          type="text"
          id="star-pattern-image"
          onChange={handleImageInput}
          value={image}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="star-pattern-name">Star Pattern's Name : </label>
        <input
          type="text"
          id="star-pattern-name"
          onChange={handleNameInput}
          value={name}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="star-pattern-translation">Star Pattern's Translation : </label>
        <input
          type="text"
          id="star-pattern-translation"
          onChange={handleTranslationInput}
          value={translation}
        />
      </fieldset>
      <button>Create A Star Pattern</button>
    </form>
  );
}

export default CreateStarPattern;
