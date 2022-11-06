import { useRef } from "react";

const AddDataForm = () => {
  const nameRef = useRef(null);
  const ownerRef = useRef(null);
  const addressRef = useRef(null);
  const conservationRef = useRef(null);
  const tumblingDateRef = useRef(null);
  const tumblingLawRef = useRef(null);
  const tumblingTypeRef = useRef(null);
  const imageRef = useRef(null);
  const historicalDataRef = useRef(null);

  function handleCreateData(event) {
    event.preventDefault();

    const name = nameRef.current.value;
    const owner = ownerRef.current.value;
    const address = addressRef.current.value;
    const conservation = conservationRef.current.value;
    const tumblingDate = tumblingDateRef.current.value;
    const tumblingLaw = tumblingLawRef.current.value;
    const tumblingType = tumblingTypeRef.current.value;
    const image = imageRef.current.value;
    const historicalData = historicalDataRef.current.value;

    
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
      <label for="name">Nome</label>
      <input
        type="text"
        placeholder="Nome"
        id="name"
        ref={nameRef}
      />
      <label for="owner">Proprietário</label>
      <input
        type="text"
        placeholder="Proprietário"
        id="owner"
        ref={ownerRef}
      />
      <label for="address">Endereço</label>
      <input
        type="text"
        placeholder="Endereço"
        id="address"
        ref={addressRef}
      />
      <label for="conservation">Conservação</label>
      <input
        type="text"
        placeholder="Conservação"
        id="conservation"
        ref={conservationRef}
      />
      <label for="tumblingDate">Data de Tombamento</label>
      <input
        type="date"
        placeholder="Data de Tombamento"
        id="tumblingDate"
        ref={tumblingDateRef}
      />
      <label for="tumblingLaw">Lei do Tombamento</label>
      <input
        type="text"
        placeholder="Lei do Tombamento"
        id="tumblingLaw"
        ref={tumblingLawRef}
      />
      <label>Tipo de Tombamento</label>
      <select name="select" ref={tumblingTypeRef} defaultValue="Tipo de Tombamento">
        <option value="federal">Federal</option>
        <option value="estadual">Estadual</option>
        <option value="municipal">Municipal</option>
      </select>
      <label for="tumblingImage">Imagem do Tombamento</label>
      <input
        type="file"
        accept="image/png, image/jpeg"
        id="tumblingImage"
        ref={imageRef}
      />
      <label for="tumblingData">Dados Históricos</label>
      <input
        type="file"
        accept="image/png, image/jpeg, .doc, .pdf"
        id="tumblingData"
        ref={historicalDataRef}
      />
      <input
        type="submit"
        placeholder="ENVIAR"
      />
    </form>
  )
}

export { AddDataForm };
