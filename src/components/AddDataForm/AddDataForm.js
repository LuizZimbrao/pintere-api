import { useRef } from "react";

const AddDataForm = () => {
  const nameRef = useRef(null);

  function handleCreateData(event) {
    event.preventDefault();

    const name = nameRef.current.value;

    console.log(name)
  }

  return(
    <form
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={handleCreateData}
    >
      <input
        type="text"
        placeholder="Nome"
        ref={nameRef}
      />
      <input
        type="submit"
        placeholder="ENVIAR"
      />
    </form>
  )
}

export { AddDataForm };
